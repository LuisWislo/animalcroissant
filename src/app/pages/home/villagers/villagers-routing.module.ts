import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillagersPage } from './villagers.page';

const routes: Routes = [
  {
    path: '',
    component: VillagersPage
  },
  {
    path: ':name',
    loadChildren: () => import('./villager/villager.module').then( m => m.VillagerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillagersPageRoutingModule {}
