import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrialPageRoutingModule } from './trial-routing.module';

import { TrialPage } from './trial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrialPageRoutingModule
  ],
  declarations: [TrialPage]
})
export class TrialPageModule {}
