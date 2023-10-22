import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-test-lifecycle',
  templateUrl: './test-lifecycle.component.html',
  styleUrls: ['./test-lifecycle.component.css']
})
export class TestLifecycleComponent implements OnInit {
  show: string = 'hide';
  @Input() title: string = 'teatae'
  @ViewChild('pElement') elementP!: ElementRef;
  constructor() {
    debugger;
    console.log("constructorTEST===", this.elementP);
  }
  ngOnInit(): void {
    debugger;

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ngoninitTEST===", this.elementP);
  }
  ngAfterViewInit(): void {
    debugger;
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngafterviewinitTEST===", this.elementP);

  }
  showHide() {
    if (this.show == "hide") {
      this.show = "show";
    }
    else {
      this.show = "hide";

    }
  }
}
