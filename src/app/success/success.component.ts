import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  toggleDisplay: boolean = false;
  logArray: any = [];
  constructor() {}

  ngOnInit() {}
  onClickLog(event: any) {
    this.toggleDisplay = !this.toggleDisplay;
    this.logArray.push(event);
  }
  getColorForBackground(log: any) {
    return this.logArray.indexOf(log) >= 4 ? 'dodgerblue' : 'white';
  }
  getClassForLogs(log: any) {
    return this.logArray.indexOf(log) >= 4 ? true : false;
  }
}
