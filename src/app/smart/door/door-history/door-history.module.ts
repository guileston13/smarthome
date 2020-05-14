import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoorHistoryPageRoutingModule } from './door-history-routing.module';

import { DoorHistoryPage } from './door-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoorHistoryPageRoutingModule
  ],
  declarations: [DoorHistoryPage]
})
export class DoorHistoryPageModule {}
