import { Component, OnInit } from '@angular/core';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { Subscription } from 'rxjs';
import { MenuController } from '@ionic/angular';

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

  pageSubscriptions : Subscription;

  constructor(
    private db : VillagersService,
    private menu : MenuController
  ) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.pageSubscriptions = new Subscription();
    this.getAllVillagers();
  }

  getAllVillagers() {
    this.pageSubscriptions.add(
      this.db.getAllVillagers().subscribe(
        res => {
          console.log(res);
        }
      )
    );

    this.pageSubscriptions.add(
      this.db.getAllItems().subscribe(
        res => {
          console.log(res);
        }
      )
    )

  }

  toggleMenu() {
    this.menu.close();
  }

  logout() {
    console.log("logging out");
  }



}
