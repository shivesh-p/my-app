import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  toggleDisplay: boolean = false;
  logArray: any = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('onchanges');
  }
  ngOnInit() {
    console.log('oninit');
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('dochck');
  }
  ngAfterContentInit(): void {
    console.log('ci');
  }
  ngAfterContentChecked(): void {
    console.log('cc');
  }
  ngAfterViewInit(): void {
    console.log('vi');
  }
  ngAfterViewChecked(): void {
    console.log('vc');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
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
