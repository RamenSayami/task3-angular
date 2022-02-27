import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}

  title = 'task3-app';
  emailStr = 'asd';

  public subscribe() {
    console.log(this.emailStr);
  }
}
