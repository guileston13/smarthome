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
  playerid = '';
  playerid1 = '';
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
  // Entering Password for Door
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
      if (data) {
        // Correct PIN
        if (data[0]._id) {
          this.Correct();
          this.closeModal();

        }
        // Correct PIN
        else {
          this.Wrong();
        }

      } else {
        // Correct PIN
        this.Wrong();
      }
    });

  }
  // Toogle Change on device
  async toogle_change(registered_device_id, state) {
    this.playerid = localStorage.getItem("playerID");

    let body = {
      event: 'door-toogle-device',
      registered_device_id: registered_device_id,
      state: state,
      playerid: this.playerid,
    };
    this.postPvdr.postData(body, 'devices/event?event=door-toogle-device').subscribe(data => {

    });
  }
  // Toogle Door
  async toogle_door() {
    let accountID = localStorage.getItem("id");

    let body = {
      event: 'view-registered-device',
      accountID: accountID,
      type: 'Door',
      playerid: this.playerid,
      playerid1: this.playerid1

    };
    this.postPvdr.postData(body, 'devices/event?event=view-registered-device').subscribe(data => {
      console.log(data);
      this.door = data;
      window.location.reload();
    });
  }
  // Dismiss
  async closeModal() {
    let registered_device_id = this.navParams.get('registered_device_id');
    let state = this.navParams.get('state');
    this.modalController.dismiss();
    this.toogle_change(registered_device_id, state);

  }
  // Present Toast Right PIN

  async Correct() {
    const toast = await this.toastController.create({
      message: 'Successfully Entered the PIN.',
      duration: 2000
    });
    toast.present();
  }
  // Present Toast Wrong PIN
  async Wrong() {
    const toast = await this.toastController.create({
      message: 'Wrong PIN.',
      duration: 2000
    });
    toast.present();
  }
}
