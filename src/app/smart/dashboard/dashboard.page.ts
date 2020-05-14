import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ActivatedRoute, Router } from '@angular/router';
import { SettingPage } from './setting/setting.page';
//import { Socket } from 'ngx-socket-io';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  nickname = '';
  playerid = '';
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private modalController: ModalController,
    public appLauncher: AppLauncher
    // private socket: Socket,
  ) { }

  ngOnInit() {
    // Get User ID
    this.playerid = localStorage.getItem("playerID");
  }
  // Redirect for the Sensor Fire Alarm
  sensor() {
    var options: AppLauncherOptions = {
      packageName: "com.company.pn210.cn"
    }
    this.appLauncher.canLaunch(options).then((launched: Boolean) => {
      if (launched) {
        this.appLauncher.launch(options).then(() => {

        }, (err) => {
          alert(JSON.stringify(err));
        })
      }
      else {
        alert("Unable to launch app");
      }
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }

  // Redirect for the CCTV
  cctvLauncherApp() {
    var options: AppLauncherOptions = {
      packageName: "com.macrovideo.v380"
    }
    this.appLauncher.canLaunch(options).then((launched: Boolean) => {
      if (launched) {
        this.appLauncher.launch(options).then(() => {

        }, (err) => {
          alert(JSON.stringify(err));
        })
      }
      else {
        alert("Unable to launch app");
      }
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }

  // Redirect for the Appliances
  appliance() {
    console.log("Hello");
    this.router.navigate(['smart', 'appliances']);
  }

  // Redirect for the Logout
  logout() {
    this.authService.logout();
  }
  // Redirect for the Logout
  ionViewWillLeave() {
    this.router.navigate(['login']);
  }
  // Present Warning 
  async presentModal() {
    const modal = await this.modalController.create({
      component: SettingPage
    });
    return await modal.present();
  }

}