import { Component } from '@angular/core';
//css

//jQuery
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facebook';

  userArray = [
    {username:'Suphattra', password:'1234', tel:'0888888888', email:'a@hotmail.com'}
    ];

}
