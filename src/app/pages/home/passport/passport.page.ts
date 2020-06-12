import { Component, OnInit } from '@angular/core';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { User } from 'src/app/entities/user';
import { Villager } from 'src/app/entities/villager';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.page.html',
  styleUrls: ['./passport.page.scss'],
})
export class PassportPage implements OnInit {

  pageSubscriptions : Subscription;

  user : User;
  favs : Villager[] = []

  constructor(
    private db : VillagersService,
    private auth : AuthService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.pageSubscriptions = new Subscription();
    this.setup();
  }

  ionViewWillLeave() {
    this.pageSubscriptions.unsubscribe();
  }

  setup() {
    let loadObs = 
    this.auth.loggedInUser.pipe(
      concatMap((username : string) => {
        return this.db.getUser(username);
      })
    )

    this.pageSubscriptions.add(loadObs.subscribe(
      (user : User) => {
        this.user = user;
        console.log(user)
      },
      (err) => {
        console.log(err);
      }
    ));

  }

}
