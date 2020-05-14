import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostProvider } from '../../../../provider/post-provider';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  account_info = [];

  constructor(
    private modalController: ModalController,
    public postPvdr: PostProvider,

  ) {
    console.log("hi MAate");
    let accountID = localStorage.getItem("id");
    let body = {
      event: 'account-setting',
      accountID: accountID
    };

    this.postPvdr.postData(body, 'account/event?event=account-setting').subscribe(data => {
      this.account_info = data;
      console.log(this.account_info);
    });

  }

  ngOnInit() {


  }

  async closeModal() {
    await this.modalController.dismiss();
  }


}
