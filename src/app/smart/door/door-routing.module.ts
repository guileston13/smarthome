import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoorPage } from './door.page';

const routes: Routes = [
  {
    path: '',
    component: DoorPage
  },
  {
    path: 'door-modal',
    loadChildren: () => import('./door-modal/door-modal.module').then( m => m.DoorModalPageModule)
  },
  {
    path: 'door-password',
    loadChildren: () => import('./door-password/door-password.module').then( m => m.DoorPasswordPageModule)
  },
  {
    path: 'door-history',
    loadChildren: () => import('./door-history/door-history.module').then( m => m.DoorHistoryPageModule)
  },
  {
    path: 'door-update',
    loadChildren: () => import('./door-update/door-update.module').then( m => m.DoorUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoorPageRoutingModule {}
