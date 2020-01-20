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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoorPageRoutingModule {}
