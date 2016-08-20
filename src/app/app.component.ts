import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword: string = 'Hello, World';

  printKeyword(inputText: string) {
    this.keyword = inputText;
  }
}
