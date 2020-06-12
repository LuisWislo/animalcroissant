import { Component, OnInit } from '@angular/core';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { Subscription } from 'rxjs';
import { Villager } from 'src/app/entities/villager';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.page.html',
  styleUrls: ['./villagers.page.scss'],
})
export class VillagersPage implements OnInit {

  villagers : Villager[] = []
  filteredVillagers : Villager[] = []
  currentURL = "villagers"

  villagersForm : FormGroup;

  pageSubscriptions : Subscription;

  constructor(
    private db : VillagersService,
    private nav : NavController,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.setup();
    this.villagersForm = this.formBuilder.group({
      search: []
    });

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
        this.filteredVillagers = this.villagers;
      }, () => {
        console.log("Error retrieving villagers")
      }
    )

  }

  goToVillager(villager : string) {
    this.nav.navigateForward("/home/villagers/" + villager);

  }

  filterVillagers(input) {
    this.filteredVillagers = this.villagers;
    let value : string = input.srcElement.value;
    
    if(!value) {
      return;
    }

    this.filteredVillagers = this.filteredVillagers.filter((v : Villager) => {
      if(v.name) {
        if(v.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    })



  }


}
