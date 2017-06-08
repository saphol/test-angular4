import { Http } from '@angular/http';
import { StatusService } from './../services/status.service';
import { User } from 'app/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Header';
  result;
  password;
  statusArray = [];

  constructor (public statusService: StatusService
              , public http: Http){
     this.statusArray = this.statusService.statusArray;
    }

  ngOnInit() {
  }

    signIn(username ,password){
    if(password == "1234"){
      this.result = "Login success";
    }else{
      this.result = username + ",Please check your password";
      this.password ="";
    }
  }

}
