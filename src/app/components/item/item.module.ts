import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ItemComponent } from './item.component';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [ItemComponent]
})
export class ItemModule { }
