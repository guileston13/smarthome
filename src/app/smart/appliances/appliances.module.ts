import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, Platform } from '@ionic/angular';
import { AppliancesPageRoutingModule } from './appliances-routing.module';
import { AppliancesPage } from './appliances.page';
import { ModalPage } from './modal/modal.page';
import { ModalAppliancesPage } from './modal-appliances/modal-appliances.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppliancesPageRoutingModule
  ],
  declarations: [AppliancesPage, ModalPage, ModalAppliancesPage],
  entryComponents: [ModalPage, ModalAppliancesPage]

})
export class AppliancesPageModule {
  constructor(
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private platform: Platform,
    private splashScreen: SplashScreen
  ) {
    // this.initializeApp();
  }
  // initializeApp() {
  //    this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //     if (this.platform.is('cordova')) {
  //       this.setupPush();
  //     }
  //   });
  // }





}


