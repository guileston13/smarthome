import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PostProvider } from 'src/provider/post-provider';

@Component({
  selector: 'app-door-password',
  templateUrl: './door-password.page.html',
  styleUrls: ['./door-password.page.scss'],
})
export class DoorPasswordPage implements OnInit {
  pin = '';
  door = [];

  @Input() registered_device_id: string;
  @Input() state: string;
  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private postPvdr: PostProvider,
    public navParams: NavParams,
  ) {

    console.log(navParams.get('registered_device_id'));
    console.log(navParams.get('state'));
  }

  ngOnInit() {
  }

  password() {
    let accountID = localStorage.getItem("id");
    let pin = this.pin;
    let registered_device_id = this.navParams.get('registered_device_id');
    let state = this.navParams.get('state');
    console.log(this.pin);
    let body = {
      event: 'get-pin',
      accountID: accountID,
      pin: pin
    };
    this.postPvdr.postData(body, 'account/event?event=get-pin').subscribe(data => {
      console.log(data);
      if (data[0]._id) {
        this.Correct();
        this.closeModal();
        this.toogle_change(registered_device_id, state);

      } else {
        this.Wrong();
      }
    });

  }

  async toogle_change(registered_device_id, state) {
    let body = {
      event: 'door-toogle-device',
      registered_device_id: registered_device_id,
      state: state
    };
    this.postPvdr.postData(body, 'devices/event?event=door-toogle-device').subscribe(data => {
      //console.log(data);
      this.toogle_door();

      // let onesignal_body = {
      //   "app_id": "2512695d-9642-462f-ad9e-cc4b3c1109bf",
      //   "included_segments": ["Active Users"],
      //   "data": { "foo": "bar" },
      //   "contents": { "en": "English Message" }
      // };
      // this.postPvdr.postOnesignal(onesignal_body, 'api/v1/notification').subscribe(data => {
      //   //console.log(data);

      // });
    });
  }

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
      window.location.reload();

    });
  }

  async closeModal() {
    let registered_device_id = this.navParams.get('registered_device_id');
    let state = this.navParams.get('state');
    await this.modalController.dismiss();
    this.toogle_change(registered_device_id, state);
  }

  async Correct() {
    const toast = await this.toastController.create({
      message: 'Successfully Entered the PIN.',
      duration: 2000
    });
    toast.present();
  }

  async Wrong() {
    const toast = await this.toastController.create({
      message: 'Wrong PIN.',
      duration: 2000
    });
    toast.present();
  }
}
