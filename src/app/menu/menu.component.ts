import { Http } from '@angular/http';
import { StatusService } from './../services/status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  statusArray = [];

   constructor (public statusService: StatusService
              , public http: Http){
     this.statusArray = this.statusService.statusArray;
    }

  ngOnInit() {
  }

}
