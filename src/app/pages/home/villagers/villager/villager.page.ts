import { Component, OnInit } from '@angular/core';
import { Villager } from 'src/app/entities/villager';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-villager',
  templateUrl: './villager.page.html',
  styleUrls: ['./villager.page.scss'],
})
export class VillagerPage implements OnInit {

  villager : Villager;

  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
  }

  setup() {
    this.route.paramMap.pipe(
      
    )
  }

}
