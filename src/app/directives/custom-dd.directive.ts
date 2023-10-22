import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDD]',
  exportAs: 'appCustomDD'
})
export class CustomDDDirective {
  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  };
  @HostBinding('class.show') isOpen: boolean = false;
  constructor(private eleRef: ElementRef) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
