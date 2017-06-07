import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  userArray = [
    {username:'Suphattra', password:'1234', tel:'0888888888', email:'a@hotmail.com'}
    ]

  constructor() { }

  

  ngOnInit() {
  }

}
