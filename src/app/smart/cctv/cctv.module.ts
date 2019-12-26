import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CctvPageRoutingModule } from './cctv-routing.module';

import { CctvPage } from './cctv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CctvPageRoutingModule
  ],
  declarations: [CctvPage]
})
export class CctvPageModule {}
