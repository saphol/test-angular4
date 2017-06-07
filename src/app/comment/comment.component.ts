import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  userArray = [
    {username:'Suphattra', password:'1234', tel:'0888888888', email:'a@hotmail.com'}
    ];


  constructor() { }

  ngOnInit() {
  }

}
