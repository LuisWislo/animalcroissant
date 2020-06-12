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
  }

  ionViewWillEnter() {
    this.pageSubscriptions = new Subscription();
    this.setup();
  }

  ionViewWillLeave() {
    this.pageSubscriptions.unsubscribe();
  }

  setup() {
    let setupObs = this.db.getAllItems();
    this.pageSubscriptions.add(setupObs.subscribe(
      (items : Item[]) => {
        this.items = items;
      }, () => {
        console.log("Error retrieving items")
      }
    ));
    
  }

  onChange(data : InputEvent) {
    console.log(data.data)
  }

}
