import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoorUpdatePage } from './door-update.page';

const routes: Routes = [
  {
    path: '',
    component: DoorUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoorUpdatePageRoutingModule {}
