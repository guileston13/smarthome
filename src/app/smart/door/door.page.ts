import { Component, OnInit } from '@angular/core';
//import { ModalPage } from '../appliances/modal/modal.page';
import { DoorModalPage } from '../door/door-modal/door-modal.page';
import { DoorPasswordPage } from '../door/door-password/door-password.page';

import { ToastController, ModalController } from '@ionic/angular';
import { PostProvider } from 'src/provider/post-provider';

@Component({
  selector: 'app-door',
  templateUrl: './door.page.html',
  styleUrls: ['./door.page.scss'],
})
export class DoorPage implements OnInit {
  door = [];
  constructor(
    public modalController: ModalController,
    private toastCtrl: ToastController,
    private postPvdr: PostProvider,


  ) { }

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
  }

  ngOnInit() {
  }

  async toogle_change(registered_device_id, state) {
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



  async presentModal() {
    const modal = await this.modalController.create({
      component: DoorModalPage
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
    return await modal.present();
  }

}
