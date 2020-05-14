import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpModule } from '@angular/http';
import { PostProvider } from '../provider/post-provider';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { PapaParseModule } from 'ngx-papaparse';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppLauncher } from '@ionic-native/app-launcher/ngx';

const server_ip_address = localStorage.getItem("server_ip_address");
const config: SocketIoConfig = { url: 'http://' + server_ip_address + ':3000', options: {} };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    PapaParseModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppLauncher,
    File,
    SocialSharing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
