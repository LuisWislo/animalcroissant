import { Component, OnInit } from '@angular/core';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { Subscription } from 'rxjs';
import { Villager } from 'src/app/entities/villager';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.page.html',
  styleUrls: ['./villagers.page.scss'],
})
export class VillagersPage implements OnInit {

  villagers : Villager[] = []

  pageSubscriptions : Subscription;

  constructor(private db : VillagersService) { }

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
    let setupObs = this.db.getAllVillagers();

    this.pageSubscriptions.add(setupObs.subscribe(
      (villagers : Villager[]) => {
        this.villagers = villagers;
      }, () => {
        console.log("Error retrieving villagers")
      }
    ));

  }

  

}
