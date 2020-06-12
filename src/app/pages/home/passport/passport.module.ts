import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassportPageRoutingModule } from './passport-routing.module';

import { PassportPage } from './passport.page';
import { HeaderModule } from '../../../components/header/header.module';
import { VillagerItemModule } from '../../../components/villager-item/villager-item.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassportPageRoutingModule,
    HeaderModule,
    VillagerItemModule
  ],
  declarations: [PassportPage]
})
export class PassportPageModule {}
