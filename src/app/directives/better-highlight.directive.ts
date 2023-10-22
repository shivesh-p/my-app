import {
  Directive,
  ElementRef,
  Input,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective {
  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'gray';
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'red')
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseHover(eventData: Event) {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'red')
    // this.backgroundColor = 'red';
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent')
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
