import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

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
  message$: Observable<string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() {
    this.resend();
  }
  ngOnInit() {
  }
  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }

}
