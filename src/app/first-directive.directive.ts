import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {
  toggleFlag = false;
  constructor(
    private renderer: Renderer2,
    private ef: ElementRef
  ) { }
  @HostListener('click') onclick(): void {
   const div = this.renderer.createElement('div');
   const textDiv = this.renderer.createText(' my first Directive');
   this.renderer.appendChild(div, textDiv);
   this.renderer.appendChild(this.ef.nativeElement, div);
   this.toggleFlag = !this.toggleFlag;
   this.renderer.setStyle(this.ef.nativeElement, 'background', 'green');
   this.renderer.setStyle(this.ef.nativeElement, 'color', 'white');
   this.renderer.setProperty(this.ef.nativeElement, 'id' , 'first');
  }
  @HostListener('mouseover') onMouseOver(): void {
    this.renderer.addClass(this.ef.nativeElement, 'abc');
  }
  @HostListener('onMouseOver') onMouseLeave(): void{
    this.renderer.removeClass(this.ef.nativeElement, 'abc');
  }
}
