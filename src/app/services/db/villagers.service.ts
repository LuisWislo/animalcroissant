import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/entities/user';
import { Villager } from 'src/app/entities/villager';
import { Item } from 'src/app/entities/item';

@Injectable({
  providedIn: 'root'
})
export class VillagersService {

  private baseUrl = "https://servercruzandoanimales.web.app";

  constructor(private http : HttpClient) { }

  //REGISTER
  register(user : User) {
    return this.http.post<any>(this.baseUrl + "/register_user", user);
  }

  // VILLAGERS

  getAllVillagers() : Observable<Villager[]> {
    return this.http.get<Villager[]>(this.baseUrl + '/get_all_villagers');    
  }
  
  getAllItems() : Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl + '/get_all_items');    
  }

  //USER

  getUser(username : string) : Observable<User> {
    return this.http.get<User>(this.baseUrl + "/get_user/" + username);
  }



}
