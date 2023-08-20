import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  users = [];
  users2 = [];

  pushUser(event: any) {
    this.users.push(event);
  }

  pushAdmin(event) {
    this.users2.push(event);
  }
  removeitem(j) {
    this.users.splice(j, 1);
  }
  removeitem2(j) {
    this.users2.splice(j, 1);
  }
}
