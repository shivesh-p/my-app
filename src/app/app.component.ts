import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h2 {
        color: green;
      }
    `,
  ],
})
export class AppComponent {
  title = 'my-app';
}
