import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'passport',
        loadChildren: () => import('./passport/passport.module').then( m => m.PassportPageModule)
      },
      {
        path: 'items',
        loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
      },
      {
        path: 'villagers',
        loadChildren: () => import('./villagers/villagers.module').then( m => m.VillagersPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
