import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMenu]'
})
export class MenuDirective {

  constructor(private el:ElementRef, private renderer: Renderer2) {
    
   
  }
  ngOnInit() {
    if(!localStorage.getItem('loginStatus')) {
      this.renderer.addClass(this.el.nativeElement, 'hide-link')
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'hide-link')
    }
  }
}
