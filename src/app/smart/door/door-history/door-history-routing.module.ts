import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoorHistoryPage } from './door-history.page';

const routes: Routes = [
  {
    path: '',
    component: DoorHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoorHistoryPageRoutingModule {}
