import { Component, OnInit } from '@angular/core';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { Subscription } from 'rxjs';
import { Villager } from 'src/app/entities/villager';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.page.html',
  styleUrls: ['./villagers.page.scss'],
})
export class VillagersPage implements OnInit {

  villagers : Villager[] = []
  currentURL = "villagers"

  pageSubscriptions : Subscription;

  constructor(
    private db : VillagersService,
    private nav : NavController
  ) { }

  ngOnInit() {
    this.setup();
  }

  ionViewWillEnter() {
    this.pageSubscriptions = new Subscription();
    
  }

  ionViewWillLeave() {
    this.pageSubscriptions.unsubscribe();
  }

  setup() {
    let setupObs = this.db.getAllVillagers();

    setupObs.subscribe(
      (villagers : Villager[]) => {
        this.villagers = villagers;
      }, () => {
        console.log("Error retrieving villagers")
      }
    )

  }

  goToVillager(villager : string) {
    this.nav.navigateForward("/home/villagers/" + villager);

  }


}
