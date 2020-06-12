import { Component, OnInit } from '@angular/core';
import { Villager } from 'src/app/entities/villager';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, concatMap } from 'rxjs/operators';
import { VillagersService } from 'src/app/services/db/villagers.service';
import { Observable, EMPTY } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-villager',
  templateUrl: './villager.page.html',
  styleUrls: ['./villager.page.scss'],
})
export class VillagerPage implements OnInit {

  villager : Observable<Villager>;

  constructor(
    private route : ActivatedRoute,
    private db : VillagersService,
    private auth : AuthService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.setup();
  }

  setup() {
    this.villager =
    this.route.paramMap.pipe(
      switchMap((params : ParamMap) => {
        return this.db.getVillager(params.get('name'));
      })
    )
  }

  makeFavorite(villager : string) {
    let thingObs =
    this.auth.loggedInUser.pipe(
      concatMap((username : string) => {
        return this.db.addFavorite(username, villager);
      })
    );
    thingObs.subscribe(
      (res) => {
        if(res.status) {
          console.log("added favorite!");
        } else {
          console.log("error adding favorite")
        }
      }
    );
  }




}
