import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  userArray = [
    {username:'Suphattra', password:'1234', tel:'0888888888', email:'a@hotmail.com'}
    ];
    
  constructor() { }

  ngOnInit() {
  }

}
