import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAppliancesPage } from './modal-appliances.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAppliancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAppliancesPageRoutingModule {}
