import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoorPasswordPageRoutingModule } from './door-password-routing.module';

import { DoorPasswordPage } from './door-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoorPasswordPageRoutingModule
  ],
  declarations: [DoorPasswordPage]
})
export class DoorPasswordPageModule {}
