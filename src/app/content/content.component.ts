import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  statusArray = [];

  constructor(public statusService: StatusService) {
    //this.statusArray = this.statusService.statusArray;
   }


  ngOnInit() {
  }

}
