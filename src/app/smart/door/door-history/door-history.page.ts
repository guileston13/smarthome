import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostProvider } from 'src/provider/post-provider';

@Component({
  selector: 'app-door-history',
  templateUrl: './door-history.page.html',
  styleUrls: ['./door-history.page.scss'],
})
export class DoorHistoryPage implements OnInit {
  history = [];
  constructor(
    private modalController: ModalController,
    private postPvdr: PostProvider,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {

    let accountID = localStorage.getItem("id");
    console.log(accountID);
    let body = {
      event: 'view-history-device',
      accountID: accountID,
    };
    this.postPvdr.postData(body, 'devices/event?event=view-history-device').subscribe(data => {
      console.log(data);
      this.history = data;
    });
  }

  async closeModal() {
    await this.modalController.dismiss();
  }




}
