import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoorModalPage } from './door-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DoorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoorModalPageRoutingModule {}
