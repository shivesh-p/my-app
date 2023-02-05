import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // // template: `<ul>
  // //   <li class="item1">1</li>
  // //   <li class="item2">2</li>
  // //   <li class="item3">3</li>
  // //   <li class="item4">4</li>
  // //   <li class="item5">5</li>
  // // </ul>`,
  // template: '<app-server></app-server>',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}
}
