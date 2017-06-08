import { StatusService } from './../services/status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  statusArray = [];

  constructor(public statusService: StatusService) {
   this.statusArray = this.statusService.statusArray;
   }

  ngOnInit() {
  }

   

}
