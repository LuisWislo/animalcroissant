import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { VillagerItemComponent } from './villager-item.component';

@NgModule({
  declarations: [VillagerItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [VillagerItemComponent]
})
export class VillagerItemModule { }
