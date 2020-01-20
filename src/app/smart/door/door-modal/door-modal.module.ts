import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoorModalPageRoutingModule } from './door-modal-routing.module';

import { DoorModalPage } from './door-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoorModalPageRoutingModule
  ],
  declarations: [DoorModalPage]
})
export class DoorModalPageModule { }
