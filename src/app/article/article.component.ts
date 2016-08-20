import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  data: any;
  DeleteArticle(item) {
    let index = this.data.indexOf(item);
    this.data.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
