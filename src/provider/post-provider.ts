import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/Rx';
// import 'rxjs/add/operator/map';
const server_ip_address = localStorage.getItem("server_ip_address");

@Injectable()
export class PostProvider {
    constructor(
        public http: Http,
        private storage: Storage
    ) {
        //const server_ip_address = localStorage.getItem("server_ip_address");
    }

    server: string = "http://" + server_ip_address + ":3000/automation/";
    onesignal: string = "https://onesignal.com/";
    postData(body, file) {
        let type = "application/json: charset=UFT-8";
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });
        console.log("body =>" + body);
        console.log("server =>" + this.server);
        console.log("file =>" + file);

        return this.http.post(this.server + file, body, options)
            .map(res => res.json());
    }

    getData(body, file) {
        let type = "application/json: charset=UFT-8";
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });
        console.log("body =>" + body);
        console.log("server =>" + this.server);
        console.log("file =>" + file);

        return this.http.get(this.server + file, options)
            .map(res => res.json());
    }

    postOnesignal(body, file) {
        let header = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Basic NGUzOGM5ZTMtYWNiYS00YjVmLTlkMjUtNWEyNjgzYWE4Y2I2'
        });
        let options = new RequestOptions({ headers: header });
        return this.http.post(this.onesignal + file, body, options)
            .map(res => res.json());

    }




}   
