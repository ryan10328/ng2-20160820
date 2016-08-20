import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'The Will Will Web';
  subTitle: string = '記載著 Will 在網路世界的學習心得與技術分享';
  url: string = 'http://blog.miniasp.com/';
  num: number = 0;

  constructor() { }

  plusOne($event: MouseEvent) {
    if ($event.altKey) {
      this.num--;
    } else {
      this.num++;
    }
  }

  getClass() {
    return {
      'red': (this.num % 2) === 0,
      'green': (this.num % 2) !== 0
    };
  }


  ngOnInit() {
  }

}
