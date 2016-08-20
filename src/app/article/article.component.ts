import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item: any;

  @Input()
  i: number;
  // 開放一個delete事件用來回傳給AppComponent
  @Output()
  delete = new EventEmitter<any>();

  DeleteArticle(item) {
    this.delete.emit(item);
  }

  constructor() { }

  ngOnInit() {
  }

}
