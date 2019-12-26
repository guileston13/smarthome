import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirealarmPageRoutingModule } from './firealarm-routing.module';

import { FirealarmPage } from './firealarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirealarmPageRoutingModule
  ],
  declarations: [FirealarmPage]
})
export class FirealarmPageModule {}
