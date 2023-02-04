import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

const CLICK_EVENT = 'click';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }


  @HostListener(CLICK_EVENT) showDropdown() {
    const _class = 'open';
    const button = <HTMLButtonElement>this.elementRef.nativeElement;

    button.classList.contains(_class)
    ? this.renderer.removeClass(button, _class)
    : this.renderer.addClass(button, _class);
  }
}
