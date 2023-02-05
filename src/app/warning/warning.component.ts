import { Component } from '@angular/core';
@Component({
  templateUrl: './warning.component.html',
  selector: 'app-warning',
  styles: [
    `
      p {
        color: rgb(142, 142, 215);
      }
    `,
  ],
})
export class WarningComponent {
  userName: string = '';

  onClickButton() {
    this.userName = '';
  }
}
