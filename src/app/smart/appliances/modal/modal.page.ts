import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostProvider } from '../../../../provider/post-provider';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'modal-page',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],

})
export class ModalPage implements OnInit {
  appliances = '';
  deviceList = '';
  area = '';
  macAddress = '';
  accountID = '';
  unregistered = '';
  constructor(
    private modalController: ModalController,
    private postPvdr: PostProvider,
    private router: Router,
    private loadingController: LoadingController
  ) {

  }
  // Display Unregistered Appliances 
  ionViewWillEnter() {
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'view-unregistered-device',
      accountID: accountID
    };
    this.postPvdr.postData(body, 'devices/event?event=view-unregistered-device').subscribe(data => {
      this.unregistered = data;
      console.log(this.unregistered);
    });
  }

  ngOnInit() {

  }
  // Dismiss Modal
  async closeModal() {
    await this.modalController.dismiss();
  }


  // Register a Appliances
  register() {
    let account = localStorage.getItem("id");
    return new Promise(resolve => {
      let body = {
        event: 'register-devices',
        appliances: this.appliances,
        deviceList: this.deviceList,
        area: this.area,
        macAddress: this.macAddress,
        accountID: account
      };

      this.postPvdr.postData(body, 'devices/event?event=register-devices').subscribe(data => {
        //console.log(+ JSON.stringify(data));
        this.modal_ip();
      });

    });
  }

  // Registered on the Main Page Appliances
  async display() {
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'view-registered-device',
      accountID: accountID
    };
    this.postPvdr.postData(body, 'devices/event?event=view-registered-device').subscribe(data => {
      console.log(data);
      this.modalController.dismiss();
      this.appliances = data;
    });
  }

  // Progress Bar the Exit back to Main Page Appliances
  async modal_ip() {
    const loading = await this.loadingController.create({
      message: 'Successfully Added',
      duration: 1500,
      spinner: "dots"
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading Dismissed!');
    this.modalController.dismiss();
  }
}
