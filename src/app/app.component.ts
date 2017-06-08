import { StatusService } from './services/status.service';
import { Component } from '@angular/core';

import { Http } from "@angular/http";
import "rxjs/add/operator/map";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Facebook';
  statusArray = [];

    constructor (public statusService: StatusService
              , public http: Http){
     this.statusArray = this.statusService.statusArray;
    }

    loginRequest(username, password) {
      if(username == "art" && password == "1234"){
        console.log(this.statusArray);
      this.statusArray = this.statusService.statusArray;
      this.statusService.isLogin = true;
      }

    }

}
