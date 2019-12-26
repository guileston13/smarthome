import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  nickname = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    // private socket: Socket,
  ) { }

  ngOnInit() {
  }
  appliance() {
    console.log("Hello");
    this.router.navigate(['smart', 'appliances']);
  }
  logout() {
    this.authService.logout();
  }

  ionViewWillLeave() {
    this.router.navigate(['login']);
  }


  //joinChat() {
  // this.socket.connect();
  // this.socket.emit('set-nickname', this.nickname);
  // //this.router.navigate(['dashboard', { nickname: this.nickname }]);
  // //this.router.navigate(['/dashboard'], { nickname: this.nickname }]);
  // this.router.navigate(['smart', 'appliances', { nickname: this.nickname }]);
  // console.log('name =>:', this.nickname);
  // //this.navCtrl.push('dashboard', { nickname: this.nickname });
  // //this.navCtrl.navigateForward('/dashboard': { nickname: this.nickname });
  // //this.router.navigateByUrl('pages/(dashboard:{ nickname: this.nickname }');
  //}
}