import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';

import { HeaderModule } from '../../../components/header/header.module';
import { ItemModule } from '../../../components/item/item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    HeaderModule,
    ItemModule,
    ReactiveFormsModule
  ],
  declarations: [ItemsPage]
})
export class ItemsPageModule {}
