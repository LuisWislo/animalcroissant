import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, from } from 'rxjs';
import { switchMap, map, take, catchError, concatMap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const USERNAME = 'USERNAME';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginURL = "https://servercruzandoanimales.web.app/auth_user"

  private loggedInUserSource = new BehaviorSubject(null);
  loggedInUser = this.loggedInUserSource.asObservable();

  constructor(
    private http : HttpClient,
    private platform : Platform,
    private storage : Storage
  ) 
  {
    this.loadStoredUser();
  }

  loadStoredUser() {
    let platformObs = from(this.platform.ready());
    this.loggedInUser = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get(USERNAME));
      }),
      map( (username : string) => {
        if(username) {
          this.loggedInUserSource.next(username);
          return username;
        }
        return null;
      })
    )
  }

  login(credentials: {username: string, password: string}) : Observable<boolean> {
    return this.http.post<any>(this.loginURL, credentials).pipe(
      take(1),
      switchMap(
        (res) => {
          if(res.status) {
            this.loggedInUserSource.next(res.username);
            let storageObs = from(this.storage.set(USERNAME, res.username));
            return storageObs.pipe(
              concatMap(() => {
                return of(true)
              })
            )
          }

          return of(false);
        }
      )
    );
  }

  logout() : Observable<any> {
    this.loggedInUserSource.next(null);
    return from(this.storage.remove(USERNAME));
  }

}
