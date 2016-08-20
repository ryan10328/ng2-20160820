import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService {

   constructor(private http: Http) {
      http.get('/api/articles.json')
      .subscribe((value: Response) => {
          this.data = value.json();
      }, (error: any) => {
          console.log(error);
      });
  }

  title = 'The Will Will Web';

  keyword: string = 'Hello, World';

  data: any = [];

  printKeyword(inputText: string) {
    this.keyword = inputText;
  }

  DeleteArticle(item) {
    let index = this.data.indexOf(item);
    this.data.splice(index, 1);
  }

}
