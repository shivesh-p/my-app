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
  serverCreationStatus: string = 'No Server Created';
  serverName: string = '2-Way Binding';
  showServerCreation: boolean = false;
  serverList = ['Server 1', 'Server 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onClickCreateServer() {
    this.serverList.push(this.serverName);
    this.showServerCreation = true;
    this.serverCreationStatus =
      'Server was created. Name is ' + this.serverName;
  }
  onInputData(event: any) {
    this.serverName = event.target.value;
  }
  ngOnInit() {}
}
