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
  constructor() { }

  userArray = [
    {username:'Suphattra', password:'1234', tel:'0888888888', email:'a@hotmail.com'}
    ]

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
