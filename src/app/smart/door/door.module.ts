import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoorPageRoutingModule } from './door-routing.module';

import { DoorPage } from './door.page';
import { DoorModalPage } from './door-modal/door-modal.page';
import { DoorPasswordPage } from './door-password/door-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoorPageRoutingModule
  ],
  declarations: [DoorPage, DoorModalPage, DoorPasswordPage],
  entryComponents: [DoorModalPage, DoorPasswordPage]

})
export class DoorPageModule { }
