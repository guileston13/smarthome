import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CctvPage } from './cctv.page';

const routes: Routes = [
  {
    path: '',
    component: CctvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CctvPageRoutingModule {}
