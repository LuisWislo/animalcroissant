import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Item } from 'src/app/entities/item';
import { Subscription, from } from 'rxjs';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  
  items : Item[];
  filteredItems : Item[]; 

  categories : any[]

  size = 25
  page = 0

  itemsForm : FormGroup;
  pageSubscriptions : Subscription;
  
  constructor(
    private formBuilder : FormBuilder,
    private db : VillagersService,
    private loadingController : LoadingController,
    private alertController : AlertController
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

    let setupObs = this.db.getCategories();

    this.pageSubscriptions.add(setupObs.subscribe(
      (cats : any[]) => {
        this.categories = cats;
        this.itemsForm = this.formBuilder.group({
          search: [],
          select: ['Accessories']
        });
        this.getItemsByCategory();
      }, () => {
        this.presentAlert("Error retrieving data.");
      }
    ));
    
  }

  /*loadMore(infiniteScroll) {
    this.page++;
    this.loadUsers(infiniteScroll);
    /*
    if (this.page === this.maximumPages) {
      infiniteScroll.enable(false);
    }
    
  }*/

  onChange(data : InputEvent) {
    console.log(data.data)
  }

  /*loadUsers(infiniteScroll?) {
    this.db.getManyItems(50).subscribe(
      (items : Item[]) => {
        this.items = this.items.concat(items);
        if (infiniteScroll) {
          infiniteScroll.complete();
        }
      }, () => {
        console.log("Error retrieving items")
      }
    )
  }*/

  getItemsByCategory() {

    let itemsObs = from(this.presentLoading()).pipe(
      concatMap(() => {
        return this.db.getItemsByCategory(this.itemsForm.get('select').value);
      })
    );

    this.pageSubscriptions.add(itemsObs.subscribe(
      (items : Item[]) => {
        this.items = items;
        this.filteredItems = this.items;
        this.loadingController.dismiss();
      }, () => {
        this.presentAlert("Error retrieving data.");
        this.loadingController.dismiss();
      }
    ));

  }

  filterItems(input) {
    this.filteredItems = this.items;
    let value : string = input.srcElement.value;
    
    if(!value) {
      return;
    }

    this.filteredItems = this.filteredItems.filter((v : Item) => {
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
