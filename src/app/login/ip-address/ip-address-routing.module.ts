import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IpAddressPage } from './ip-address.page';

const routes: Routes = [
  {
    path: '',
    component: IpAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpAddressPageRoutingModule {}
