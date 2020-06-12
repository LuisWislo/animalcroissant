import { Component, OnInit } from '@angular/core';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { Subscription } from 'rxjs';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/entities/user';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  menuOptions = [
    {
      name: "Passport",
      route: "/home/passport",
      icon: "card-outline"
    },
    {
      name: "Villagers",
      route: "/home/villagers",
      icon: "paw-outline"
    },
    {
      name: "Items",
      route: "/home/items",
      icon: "leaf-outline"
    }
  ]

  user : User;

  pageSubscriptions : Subscription;

  constructor(
    private db : VillagersService,
    private menu : MenuController,
    private auth : AuthService,
    private nav : NavController
  ) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.pageSubscriptions = new Subscription();
    this.setup();
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

  toggleMenu() {
    this.menu.close();
  }

  logout() {
    this.auth.logout().subscribe(
      () => {
        this.nav.navigateRoot("/");
      }
    )
  }



}
