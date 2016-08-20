import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword: string = 'Hello, World';

  printKeyword($event: KeyboardEvent) {

    let temp = $event.target as HTMLInputElement;
    console.log($event);
    if ($event.keyCode === 13) {
       this.keyword = temp.value;
    }
  }
}
