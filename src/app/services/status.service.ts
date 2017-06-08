import { Injectable } from '@angular/core';

@Injectable()
export class StatusService {

  statusArray = [
       {name: 'Kukkik', password: '1234', content: 'วันนี้ง่วงจัง T_T', picture: ''}
      ,{name: 'Num', password: '1234', content: 'กินข้าวอิ่มหรือยัง?'}
      ,{name: 'Art', password: '1234', content: 'ฝนจะตกไหมน้าาา ^^"'}
      ,{name: 'Da', password: '1234', content: 'อยากกลับบ้านจุงเบยยย o_O'}
      ,{name: 'Top', password: '1234', content: 'อยากกินกาแฟซักแก้ว ><!'}
  ]

  nameLogin = "";

  isLogin = false;

  constructor() { }
  

}
