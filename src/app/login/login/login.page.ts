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

  firstName = '';
  password = '';
  event = '';
  playerid = '';
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

      let body = {
        event: 'login',
        firstName: this.firstName,
        password: this.password,
        player_id: this.playerid = localStorage.getItem("playerID")
      };

      this.postPvdr.postData(body, 'account/event').subscribe(data => {
        console.log(data);
        console.log(Object.keys(data).length);
        if (Object.keys(data).length == 0) {
          //this.router.navigate(['smart', 'dashboard']);
          this.cantaccess();
          console.log("cant");

        } else {
          console.log("in");
          console.log(data[0].pin);
          localStorage.setItem("id", data[0]._id);
          localStorage.setItem("pin", data[0].pin);
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