import { Component, OnInit } from '@angular/core';
//import { ModalPage } from '../appliances/modal/modal.page';
import { DoorModalPage } from '../door/door-modal/door-modal.page';
import { DoorPasswordPage } from '../door/door-password/door-password.page';
import { DoorHistoryPage } from '../door/door-history/door-history.page';
import { DoorUpdatePage } from '../door/door-update/door-update.page';
import { LoadingController } from '@ionic/angular';

import { ToastController, ModalController } from '@ionic/angular';
import { PostProvider } from 'src/provider/post-provider';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-door',
  templateUrl: './door.page.html',
  styleUrls: ['./door.page.scss'],
})
export class DoorPage implements OnInit {
  door = [];
  window = [];
  public show = true;
  constructor(
    public modalController: ModalController,
    private toastCtrl: ToastController,
    private postPvdr: PostProvider,
    public socket: Socket,
    private loadingController: LoadingController



  ) {

  }

  ionViewWillEnter() {

    let accountID = localStorage.getItem("id");
    console.log(accountID);
    let body = {
      event: 'view-registered-device',
      accountID: accountID,
      type: 'Door'
    };
    this.postPvdr.postData(body, 'devices/event?event=view-registered-device').subscribe(data => {
      console.log(data);
      this.door = data;
    });
    let body_window = {
      event: 'view-registered-device',
      accountID: accountID,
      type: 'Window'
    };
    this.postPvdr.postData(body_window, 'devices/event?event=view-registered-device').subscribe(data => {
      console.log(data);
      this.window = data;
    });

  }
  call() {

    let accountID = localStorage.getItem("id");
    console.log(accountID);
    let body = {
      event: 'view-registered-device',
      accountID: accountID,
      type: 'Door'
    };
    this.postPvdr.postData(body, 'devices/event?event=view-registered-device').subscribe(data => {
      console.log(data);
      this.door = data;
    });
    let body_window = {
      event: 'view-registered-device',
      accountID: accountID,
      type: 'Window'
    };
    this.postPvdr.postData(body_window, 'devices/event?event=view-registered-device').subscribe(data => {
      console.log(data);
      this.window = data;
    });

  }

  ngOnInit() {

    this.socket.on('window', (message) => {
      for (var i = 0; i <= this.window.length; i++) {
        if (this.window[i] == undefined) {

        } else {
          if (this.window[i].macAddress == message.macAddress) {
            if (message.state == this.window[i].state) {
              console.log("no changes");
            } else {
              this.window[i].state = message.state;
              this.window = this.window;
            }
          } else {

          }
        }
      }
    });
  }

  async toogle_change(registered_device_id, state, type) {
    this.presentPassword(registered_device_id, state);
  }
  // async toogle_change(registered_device_id, state) {
  //   let body = {
  //     event: 'door-toogle-device',
  //     registered_device_id: registered_device_id,
  //     state: state
  //   };
  //   this.postPvdr.postData(body, 'devices/event?event=door-toogle-device').subscribe(data => {
  //     //console.log(data);
  //     this.toogle_door();
  //     //this.door_toogle(registered_device_id, status);
  //     let onesignal_body = {
  //       "app_id": "2512695d-9642-462f-ad9e-cc4b3c1109bf",
  //       "included_segments": ["Active Users"],
  //       "data": { "foo": "bar" },
  //       "contents": { "en": "English Message" }
  //     };
  //     this.postPvdr.postOnesignal(onesignal_body, 'api/v1/notification').subscribe(data => {
  //       //console.log(data);
  //     });
  //   });
  // }

  async toogle_door() {
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'view-registered-device',
      accountID: accountID,
      type: 'Door'
    };
    this.postPvdr.postData(body, 'devices/event?event=view-registered-device').subscribe(data => {
      console.log(data);
      this.door = data;
    });
  }

  async presentupdate(id) {
    const modal = await this.modalController.create({
      component: DoorUpdatePage,
      componentProps: {
        'registered_device_id': id,
      }
    });
    modal.present();
    const { data } = await modal.onWillDismiss();
    this.call();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DoorModalPage
    });
    modal.present();
    const { data } = await modal.onWillDismiss();
    this.call();
  }

  async presentHistory() {
    const modal = await this.modalController.create({
      component: DoorHistoryPage
    });
    return await modal.present();
  }

  async presentPassword(registered_device_id, state) {
    const modal = await this.modalController.create({
      component: DoorPasswordPage,
      componentProps: {
        'registered_device_id': registered_device_id,
        'state': state,
      }
    });
    modal.present();
    const { data } = await modal.onWillDismiss();
    setTimeout(() => {

      this.modal_ip();
      this.call();
    }, 20000);
  }

  async modal_ip() {
    const loading = await this.loadingController.create({
      message: 'Successfully Added',
      duration: 1000,
      spinner: "dots"
    });
    await loading.present();
    this.modalController.dismiss();
  }

}
