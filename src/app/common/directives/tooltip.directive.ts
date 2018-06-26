import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class Tooltip {
  @Input() tooltip: string;
  newDiv: any;
  ELDOM: any;

  constructor(el: ElementRef) {
    var vm = this;
    el.nativeElement.style.position = 'relative';
    vm.newDiv = document.createElement('div');
    vm.newDiv.className = 'tooltip';
    vm.newDiv.onmouseenter = function () {
      vm.newDiv.style.display = 'block';
    };
    vm.newDiv.onmouseleave = function () {
      vm.newDiv.style.display = 'none';
    };
    document.body.appendChild(this.newDiv);
    vm.ELDOM = el;
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.tooltip && this.ELDOM.nativeElement.clientWidth < this.ELDOM.nativeElement.scrollWidth) {
      this.newDiv.style.display = 'block';
      this.newDiv.innerText = this.tooltip;
      this.newDiv.style.top = this.ELDOM.nativeElement.offsetTop + this.ELDOM.nativeElement.clientHeight * 0.8 + 'px';
      this.newDiv.style.left = this.ELDOM.nativeElement.offsetLeft + this.ELDOM.nativeElement.clientWidth * 0.5 + 'px';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.newDiv.style.display = 'none';
    this.newDiv.innerText = this.tooltip;
  }

}
