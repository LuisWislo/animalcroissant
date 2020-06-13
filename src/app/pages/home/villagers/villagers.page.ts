import { Component, OnInit } from '@angular/core';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { Subscription, from } from 'rxjs';
import { Villager } from 'src/app/entities/villager';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { concatMap } from 'rxjs/operators';

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
    private formBuilder : FormBuilder,
    private loadingController : LoadingController,
    private alertController : AlertController
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
    let setupObs = from(this.presentLoading()).pipe(
      concatMap(() => {
        return this.db.getAllVillagers();
      })
    )

    setupObs.subscribe(
      (villagers : Villager[]) => {
        this.loadingController.dismiss();
        this.villagers = villagers;
        this.filteredVillagers = this.villagers;
      }, () => {
        this.loadingController.dismiss();
        this.presentAlert("Error retrieving data.");
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

  async presentLoading() {
    const loading = await this.loadingController.create({});
    await loading.present();
  }


  async presentAlert(message : string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }

}
