import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillagerPageRoutingModule } from './villager-routing.module';

import { VillagerPage } from './villager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillagerPageRoutingModule
  ],
  declarations: [VillagerPage]
})
export class VillagerPageModule {}
