import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ModalPage } from '../appliances/modal/modal.page';
import { ModalAppliancesPage } from '../appliances/modal-appliances/modal-appliances.page';
import { PostProvider } from '../../../provider/post-provider';
@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.page.html',
  styleUrls: ['./appliances.page.scss'],
})
export class AppliancesPage implements OnInit {
  appliances = [];
  registered_device_id = '';
  status = '';
  // nickname = '';
  message = '';
  messages = [];
  constructor(
    private authService: AuthenticationService,
    private toastCtrl: ToastController,
    private socket: Socket,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public postPvdr: PostProvider
  ) {


  }

  // Display Existing Registered Device Appliances
  ionViewWillEnter() {
    let accountID = localStorage.getItem("id");
    console.log(accountID);
    let body = {
      event: 'view-registered-device',
      accountID: accountID,
      type: 'Appliances'
    };
    this.postPvdr.postData(body, 'devices/event?event=view-registered-device').subscribe(data => {
      console.log(data);
      this.appliances = data;
    });
  }
  ngOnInit() {
    console.log("welcomeBack");

  }

  async clickable(x) {
    console.log(x);
  }


  // Notification in Android
  async toogle_change(registered_device_id, state, Appliances) {
    console.log(state);
    let body = {
      event: 'toogle-device',
      registered_device_id: registered_device_id,
      state: state,
      type: Appliances
    };
    this.postPvdr.postData(body, 'devices/event?event=toogle-device').subscribe(data => {
      //console.log(data);
      this.toogle_appliances();
      let onesignal_body = {
        "app_id": "2512695d-9642-462f-ad9e-cc4b3c1109bf",
        "included_segments": ["Active Users"],
        "headings": { "en": "My Notification" },
        "contents": { "en": "Your Device has been turn On " },
        "data": { "task": "Sent Through API" },
      };
      this.postPvdr.postOnesignal(onesignal_body, 'api/v1/notification').subscribe(data => {
      });

    });
  }

  // Toogle Off and On Appliances
  async toogle_appliances() {
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'view-registered-device',
      accountID: accountID,
      type: 'Appliances'

    };
    this.postPvdr.postData(body, 'devices/event?event=view-registered-device').subscribe(data => {
      console.log("Hello DAta");
      this.appliances = data;
    });
  }

  // Model for Adding
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  // Model for View Application
  async presentModalAppliances(x, macAddress) {
    const modal = await this.modalController.create({

      component: ModalAppliancesPage,
      componentProps: {
        'device-id': x,
        'macAddress': macAddress
      }
    });
    return await modal.present();
  }

}
