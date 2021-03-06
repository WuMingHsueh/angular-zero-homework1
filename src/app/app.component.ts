import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  userInput = '';
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }

  changeSearchInput($event: KeyboardEvent) {
    if ($event.keyCode === 27) {
      this.userInput = '';
      return ;
    }
    this.userInput = $event.target.value;
    // this.userInput += $event;
  }
}
