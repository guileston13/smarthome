import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IpAddressPageRoutingModule } from './ip-address-routing.module';

import { IpAddressPage } from './ip-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IpAddressPageRoutingModule
  ],
  declarations: [IpAddressPage]
})
export class IpAddressPageModule {}
