import { User } from './../user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fb-name',
  templateUrl: './fb-name.component.html',
  styleUrls: ['./fb-name.component.css']
})
export class FbNameComponent implements OnInit {

  @Input() user = User;

  // userArray = [
  //   {username:'Suphattra', password:'1234', tel:'0888888888', email:'a@hotmail.com'}
  //   ]
  
  constructor() { }

  ngOnInit() {
  }

}
