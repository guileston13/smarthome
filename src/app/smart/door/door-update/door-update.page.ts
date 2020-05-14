import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PostProvider } from 'src/provider/post-provider';

@Component({
  selector: 'app-door-update',
  templateUrl: './door-update.page.html',
  styleUrls: ['./door-update.page.scss'],
})
export class DoorUpdatePage implements OnInit {
  doorupdate = '';
  door = [];
  registered: '';
  deviceLists = '';
  constructor(
    private modalController: ModalController,
    private postPvdr: PostProvider,
    public navParams: NavParams,

  ) { }

  ngOnInit() {
  }

  update() {
    let accountID = localStorage.getItem("id");
    let registered = this.navParams.get('registered_device_id');
    console.log(this.deviceLists);
    let body = {
      event: 'update-registered-device',
      accountID: accountID,
      type: this.doorupdate,
      id: registered,
      deviceLists: this.deviceLists
    };
    this.postPvdr.postData(body, 'devices/event?event=update-registered-device').subscribe(data => {
    });
  }
  // Dismiss
  dismiss() {
    this.update();
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'view-registered-device',
      accountID: accountID,
      type: 'Door'
    };
    this.postPvdr.postData(body, 'devices/event?event=view-registered-device').subscribe(data => {
      this.modalController.dismiss(
        this.door = data
      );
    });
  }
}
