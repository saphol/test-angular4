import { Component, OnInit } from '@angular/core';

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
