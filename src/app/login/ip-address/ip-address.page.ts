import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.page.html',
  styleUrls: ['./ip-address.page.scss'],
})
export class IpAddressPage implements OnInit {
  input_address = '';
  constructor(
    private router: Router,
    private storage: Storage,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }
  // IP Address for to connect to a specific server OFFLINE
  async add_address() {
    let server = localStorage.getItem("server_ip_address");
    server = '';
    localStorage.setItem("server_ip_address", this.input_address);
    //console.log(localStorage.getItem("server_ip_address"));
    this.modal_ip();
  }

  // Progress Bar
  async modal_ip() {
    const loading = await this.loadingController.create({
      message: 'Sucessfully Change IP',
      duration: 1500,
      spinner: "dots"
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading Dismissed!');
    this.router.navigate(['login'])
      .then(() => {
        window.location.reload();
      });
  }


}
