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

    // this.getMessages().subscribe(message => {
    //   this.messages.push(message);
    //   //console.log(this.messages);
    // });

  }
  ionViewWillEnter() {
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'view-registered-device',
      accountID: accountID
    };
    this.postPvdr.postData(body, 'device/register-device').subscribe(data => {
      console.log(data);
      this.appliances = data;
    });
  }
  ngOnInit() {

    // this.socket.on('data1', (message) => {
    //   this.messages = [];
    //   this.messages.push(message);
    // });
    // let accountID = localStorage.getItem("id");
    // let body = {
    //   event: 'view-registered-device',
    //   accountID: accountID
    // };
    // this.postPvdr.postData(body, 'device/register-device').subscribe(data => {
    //   console.log(data);
    //   this.appliances = data;
    // });
  }

  async clickable(x) {
    console.log(x);
  }

  async toogle_change(registered_device_id, status) {
    let body = {
      event: 'toogle-device',
      registered_device_id: registered_device_id,
      status: status
    };
    this.postPvdr.postData(body, 'device/register-device').subscribe(data => {
      console.log(data);
      let onesignal_body = {
        "app_id": "2512695d-9642-462f-ad9e-cc4b3c1109bf",
        "included_segments": ["Active Users"],
        "data": { "foo": "bar" },
        "contents": { "en": "English Message" }
      };
      this.postPvdr.postOnesignal(onesignal_body, 'api/v1/notification').subscribe(data => {
        console.log(data);
      });
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  async presentModalAppliances(x) {
    const modal = await this.modalController.create({

      component: ModalAppliancesPage,
      componentProps: {
        'device-id': x,
      }
    });
    return await modal.present();
  }

}
