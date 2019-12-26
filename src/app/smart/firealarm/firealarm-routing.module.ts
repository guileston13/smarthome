import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirealarmPage } from './firealarm.page';

const routes: Routes = [
  {
    path: '',
    component: FirealarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirealarmPageRoutingModule {}
