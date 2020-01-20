import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../provider/post-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  event: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  contactNumber: string = "";
  password: string = "";
  birthday: string = "";

  constructor(
    private postPvdr: PostProvider,
    private router: Router,
  ) {
    console.log(localStorage.getItem("id"));
  }

  ngOnInit() {
  }

  register() {
    return new Promise(resolve => {
      let body = {
        event: 'register',
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        contactNumber: this.contactNumber,
        password: this.password,
        birthday: this.birthday
      };

      this.postPvdr.postData(body, 'account/event').subscribe(data => {
        console.log(data);
      });
    });
  }
}
