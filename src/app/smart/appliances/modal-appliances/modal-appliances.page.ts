import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { PostProvider } from '../../../../provider/post-provider';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-modal-appliances',
  templateUrl: './modal-appliances.page.html',
  styleUrls: ['./modal-appliances.page.scss'],
})
export class ModalAppliancesPage implements OnInit {
  device_id = '';
  appliances = [];
  messages = [];
  constructor(
    navParams: NavParams,
    public postPvdr: PostProvider,
    public modalController: ModalController,
    public socket: Socket
  ) {

    const device_id = navParams.get('device-id');
    let body = {
      event: 'modal-appliances',
      device_id: device_id
    };

    this.postPvdr.postData(body, 'device/register-device').subscribe(data => {
      this.appliances = data;
    });

    this.socket.on('data1', (message) => {
      this.messages = [];
      this.messages.push(message);
    });
  }

  getappliances() {
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
  async toogle_change(registered_device_id, status) {
    let body = {
      event: 'toogle-device',
      registered_device_id: registered_device_id,
      status: status
    };
    this.postPvdr.postData(body, 'device/register-device').subscribe(data => {
      console.log(data);
      //this.appliances = data;
    });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }



  ngOnInit() {
  }


}
