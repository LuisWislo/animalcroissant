import { Component, OnInit, Input } from '@angular/core';
import { Villager } from 'src/app/entities/villager';

@Component({
  selector: 'app-villager-item',
  templateUrl: './villager-item.component.html',
  styleUrls: ['./villager-item.component.scss'],
})
export class VillagerItemComponent implements OnInit {

  @Input('villager') villager : Villager;

  constructor() { }

  ngOnInit() {}

}
