import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  test = [
    {}, {}, {}
  ]

  itemsForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.setup();
  }

  setup() {
    this.itemsForm = this.formBuilder.group({
      search: []
    });
  }

  onChange(data : InputEvent) {
    console.log(data.data)
  }

}
