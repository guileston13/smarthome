import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostProvider } from '../../../provider/post-provider';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  firstname = '';
  password = '';
  event = '';
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private postPvdr: PostProvider,
    private storage: Storage,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    let server = localStorage.getItem("server_ip_address");
    console.log(localStorage.getItem("server_ip_address"));
  }

  login() {
    return new Promise(resolve => {
      console.log("Hello");
      let body = {
        event: 'login',
        firstname: this.firstname,
        password: this.password,
      };

      this.postPvdr.postData(body, 'account/event').subscribe(data => {
        console.log(Object.keys(data).length);
        if (Object.keys(data).length == 0) {
          //this.router.navigate(['smart', 'dashboard']);
          this.cantaccess();
          console.log("cant");

        } else {
          console.log("in");
          localStorage.setItem("id", data[0]._id);
          this.access();
        }
      });
    });

  }

  async access() {
    this.loadingController.create({
      message: 'Welcome to SmartHome',
      cssClass: 'custom-loader-class',
      duration: 2000
    }).then((res) => {
      res.present();
      this.router.navigate(['smart', 'dashboard']);
    });
  }

  async cantaccess() {
    this.loadingController.create({
      message: 'Wrong Username or Password',
      cssClass: 'custom-loader-class',
      duration: 1000
    }).then((res) => {
      res.present();

    });
  }




}