import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostProvider } from '../../../../provider/post-provider';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-door-modal',
  templateUrl: './door-modal.page.html',
  styleUrls: ['./door-modal.page.scss'],
})
export class DoorModalPage implements OnInit {
  appliances = '';
  deviceList = '';
  area = '';
  macAddress = '';
  accountID = '';
  unregistered = '';
  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    private modalController: ModalController,
    private loadingController: LoadingController
  ) {
    // let accountID = localStorage.getItem("id");
    // let body = {
    //   event: 'view-unregistered-device',
    //   accountID: accountID
    // };
    // this.postPvdr.postData(body, 'devices/event').subscribe(data => {
    //   this.unregistered = data;
    //   console.log(this.unregistered);
    // });
  }

  ionViewWillEnter() {
    console.log("Hello");
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'view-unregistered-device',
      accountID: accountID
    };
    this.postPvdr.postData(body, 'devices/event?event=view-unregistered-device').subscribe(data => {
      this.unregistered = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

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



  async modal_ip() {
    const loading = await this.loadingController.create({
      message: 'Successfully Added',
      duration: 1500,
      spinner: "dots"
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading Dismissed!');
    this.modalController.dismiss()
      .then(() => {
        window.location.reload();
      });
  }




}
