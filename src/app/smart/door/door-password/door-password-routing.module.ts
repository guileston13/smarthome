import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoorPasswordPage } from './door-password.page';

const routes: Routes = [
  {
    path: '',
    component: DoorPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoorPasswordPageRoutingModule {}
