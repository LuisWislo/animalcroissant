import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/entities/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input('item') item : Item;

  constructor() { }

  ngOnInit() {}

}