import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoorUpdatePageRoutingModule } from './door-update-routing.module';

import { DoorUpdatePage } from './door-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoorUpdatePageRoutingModule
  ],
  declarations: [DoorUpdatePage]
})
export class DoorUpdatePageModule {}
