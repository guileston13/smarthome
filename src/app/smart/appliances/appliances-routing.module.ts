import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppliancesPage } from './appliances.page';

const routes: Routes = [
  {
    path: '',
    component: AppliancesPage
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'modal-appliances',
    loadChildren: () => import('./modal-appliances/modal-appliances.module').then( m => m.ModalAppliancesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppliancesPageRoutingModule {}
