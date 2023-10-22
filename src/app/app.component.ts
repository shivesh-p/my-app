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
  constructor() {
    debugger;

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    debugger;

  }
  ngAfterViewInit(): void {
    debugger;
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngafterviewinitTEST===");

  }
}
