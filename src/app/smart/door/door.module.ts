import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoorPageRoutingModule } from './door-routing.module';

import { DoorPage } from './door.page';
import { DoorModalPage } from './door-modal/door-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoorPageRoutingModule
  ],
  declarations: [DoorPage, DoorModalPage],
  entryComponents: [DoorModalPage]

})
export class DoorPageModule { }
