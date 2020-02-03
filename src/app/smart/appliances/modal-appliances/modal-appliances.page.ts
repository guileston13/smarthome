import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, Platform } from '@ionic/angular';
import { PostProvider } from '../../../../provider/post-provider';
import { Socket } from 'ngx-socket-io';
import { Papa } from 'ngx-papaparse';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-modal-appliances',
  templateUrl: './modal-appliances.page.html',
  styleUrls: ['./modal-appliances.page.scss'],
})
export class ModalAppliancesPage implements OnInit {
  device_id = '';
  consumption_device_id = '';
  appliances = [];
  messages = [];
  tables = [];
  co = 0;
  constructor(
    navParams: NavParams,
    public postPvdr: PostProvider,
    public modalController: ModalController,
    public socket: Socket,
    private plt: Platform,
    private papa: Papa,
    private file: File,
    private socialSharing: SocialSharing

  ) {

    const device_id = navParams.get('device-id');
    let accountID = localStorage.getItem("id");

    let body = {
      event: 'modal-appliances',
      device_id: device_id,
      accountID: accountID
    };

    this.postPvdr.postData(body, 'devices/event?event=modal-appliances').subscribe(data => {
      this.appliances = data;
    });

    this.postPvdr.postData(body, 'devices/consumption/event?event=view-consumptions').subscribe(data => {
      this.tables = data;
    });




    this.socket.on('data1', (message) => {
      this.messages = [];
      this.messages.push(message);
      let count_socket = this.co++
      if (count_socket == 5) {
        this.co = 0;
        this.save_data_on_timer(this.messages);
      } else {
        //console.log(count_socket);
        //console.log(this.messages[0].voltage);
      }

    });
  }

  async save_data_on_timer(side) {
    console.log(side[0].voltage);
    console.log(side);
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'insert-consumptions',
      accountID: accountID,
      voltage: side[0].voltage,
      current: side[0].current,
      power: side[0].power,
      deviceID: side[0]._id
    };
    this.postPvdr.postData(body, 'devices/consumption/event?event=insert-consumptions').subscribe(data => {
      this.getconsumptions();
    });
  }

  getconsumptions() {
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'modal-appliances',
      accountID: accountID
    };

    this.postPvdr.postData(body, 'devices/consumption/event?event=view-consumptions').subscribe(data => {
      this.tables = data;
    });

  }
  getappliances() {
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'view-registered-device',
      accountID: accountID
    };
    this.postPvdr.postData(body, 'devices/event?event=view-registered-device').subscribe(data => {
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
    this.postPvdr.postData(body, 'devices/event?event=toogle-device').subscribe(data => {
      console.log(data);
      //this.appliances = data;
    });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  // CSV

  exportCSV() {
    let csv = this.papa.unparse({
      data: this.tables
    })
    console.log(csv);
    if (this.plt.is('cordova')) {
      this.file.writeFile(this.file.dataDirectory, 'data.csv', csv, { replace: true }).then(res => {
        this.socialSharing.share(null, null, res.nativeURL, null);
      });
    } else {
      var blob = new Blob([csv]);
      var a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'newdata.csv';
      a.click();
      document.body.removeChild(a);
    }
  }



  ngOnInit() {
  }


}
