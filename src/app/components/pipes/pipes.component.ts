import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  birthday = new Date('1996-07-01 10:00:00');
  titleSmall = 'lvxin';
  titleBig = 'LVXIN';
  userinfo: any = {
    name: ' lvxin',
    age: 25
  };
  bottom = 2;
  top = 10;
  constructor() {
  }
  ngOnInit() {
  }

}
