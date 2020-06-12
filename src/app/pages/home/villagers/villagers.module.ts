import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillagersPageRoutingModule } from './villagers-routing.module';

import { VillagersPage } from './villagers.page';

import { HeaderModule } from '../../../components/header/header.module';
import { VillagerItemModule } from '../../../components/villager-item/villager-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillagersPageRoutingModule,
    HeaderModule,
    VillagerItemModule,
    ReactiveFormsModule
  ],
  declarations: [VillagersPage]
})
export class VillagersPageModule {}
