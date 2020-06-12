import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillagerPageRoutingModule } from './villager-routing.module';

import { VillagerPage } from './villager.page';
import { HeaderModule } from '../../../../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillagerPageRoutingModule,
    HeaderModule
  ],
  declarations: [VillagerPage]
})
export class VillagerPageModule {}
