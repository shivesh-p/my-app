import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'Offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getColorForServer() {
    //console.log(this.serverStatus.trim().toLowerCase());
    return this.serverStatus.trim().toLowerCase() === 'offline'
      ? 'red'
      : 'lightgreen';
  }
  getClassOnlineForServer() {
    return this.serverStatus === 'Online';
  }
  getClassOfflineForServer() {
    return this.serverStatus === 'Offline';
  }
}
