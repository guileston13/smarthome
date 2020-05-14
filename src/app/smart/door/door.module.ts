import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoorPageRoutingModule } from './door-routing.module';

import { DoorPage } from './door.page';
import { DoorModalPage } from './door-modal/door-modal.page';
import { DoorPasswordPage } from './door-password/door-password.page';
import { DoorHistoryPage } from './door-history/door-history.page';
import { DoorUpdatePage } from './door-update/door-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoorPageRoutingModule
  ],
  declarations: [DoorPage, DoorModalPage, DoorPasswordPage, DoorHistoryPage, DoorUpdatePage],
  entryComponents: [DoorModalPage, DoorPasswordPage, DoorHistoryPage, DoorUpdatePage]

})
export class DoorPageModule { }
