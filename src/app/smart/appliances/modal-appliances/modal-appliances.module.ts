import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAppliancesPageRoutingModule } from './modal-appliances-routing.module';

import { ModalAppliancesPage } from './modal-appliances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAppliancesPageRoutingModule
  ],
  declarations: [ModalAppliancesPage]
})
export class ModalAppliancesPageModule {}
