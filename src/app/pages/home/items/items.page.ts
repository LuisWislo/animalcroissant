import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Item } from 'src/app/entities/item';
import { Subscription } from 'rxjs';
import { VillagersService } from 'src/app/services/db/villagers.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items : Item[] = [];
  filteredItems : Item[] = [];
  pageItems = 25
  page = 0

  itemsForm : FormGroup;
  pageSubscriptions : Subscription;
  
  constructor(
    private formBuilder : FormBuilder,
    private db : VillagersService
  ) { }

  ngOnInit() {
    this.itemsForm = this.formBuilder.group({
      search: []
    });
    this.setup();
  }

  ionViewWillEnter() {
    this.pageSubscriptions = new Subscription();
    
  }

  ionViewWillLeave() {
    this.pageSubscriptions.unsubscribe();
  }

  setup() {
    let setupObs = this.db.getAllItems();
    setupObs.subscribe(
      (items : Item[]) => {
        this.items = items;
        this.filteredItems = this.items;
      }, () => {
        console.log("Error retrieving items")
      }
    )
    
  }

  loadMore(infiniteScroll) {
    this.page++;
    this.loadUsers(infiniteScroll);
    /*
    if (this.page === this.maximumPages) {
      infiniteScroll.enable(false);
    }
    */
  }

  onChange(data : InputEvent) {
    console.log(data.data)
  }

  loadUsers(infiniteScroll?) {
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

}
