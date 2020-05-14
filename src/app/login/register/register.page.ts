import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../../provider/post-provider';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
  PIN: string = "";
  question1: string = "";
  question2: string = "";
  answer1: string = "";
  answer2: string = "";
  constructor(
    private postPvdr: PostProvider,
    private router: Router,
    private toastController: ToastController
  ) {
    console.log(localStorage.getItem("id"));
  }

  ngOnInit() {
  }
  // Register an User Account 
  register() {
    return new Promise(resolve => {
      let body = {
        event: 'register',
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        contactNumber: this.contactNumber,
        password: this.password,
        birthday: this.birthday,
        PIN: this.PIN,
        question1: this.question1,
        question2: this.question2,
        answer1: this.answer1,
        answer2: this.answer2
      };

      this.postPvdr.postData(body, 'account/event?event=register').subscribe(data => {
        console.log(data);
        this.Correct();
      });
    });
  }

  // Present Toaster
  async Correct() {
    const toast = await this.toastController.create({
      message: 'Successfully Registered',
      duration: 2000
    });
    toast.present();
  }
}
