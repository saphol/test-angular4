import { StatusService } from './../services/status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  statusArray = [
       {name: 'Kukkik', password: '1234', content: 'วันนี้ง่วงจัง T_T'}
      ,{name: 'Num', password: '1234', content: 'กินข้าวอิ่มหรือยัง?'}
      ,{name: 'Art', password: '1234', content: 'ฝนจะตกไหมน้าาา ^^"'}
      ,{name: 'Da', password: '1234', content: 'อยากกลับบ้านจุงเบยยย o_O'}
      ,{name: 'Top', password: '1234', content: 'อยากกินกาแฟซักแก้ว ><!'}
  ]

  constructor(public statusService: StatusService) {
   this.statusArray = this.statusService.statusArray;
   }

  ngOnInit() {
  }

   

}
