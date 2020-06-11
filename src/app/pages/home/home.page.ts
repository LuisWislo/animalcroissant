import { Component, OnInit } from '@angular/core';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageSubscriptions : Subscription;

  constructor(private db : VillagersService) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.pageSubscriptions = new Subscription();
    this.getAllVillagers();
  }

  getAllVillagers() {
    this.pageSubscriptions.add(
      this.db.getAllVillagers().subscribe(
        res => {
          console.log(res);
        }
      )
    );

    this.pageSubscriptions.add(
      this.db.getAllItems().subscribe(
        res => {
          console.log(res);
        }
      )
    )

  }



}
