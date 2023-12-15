import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

import { AnimationProperties } from '../interfaces/animation-properties';

@Directive({
  selector: '[appAnimateWhenScrollDirective]',
})
export class AnimateWhenScrollDirective implements OnInit {
  @Input() animationProperties: AnimationProperties = {};
  private animationExecuted = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (!this.animationExecuted && elementPosition < screenPosition) {
      this.animationExecuted = true;

      anime({
        targets: element,
        ...this.animationProperties,
      });
    } else if (this.animationExecuted && elementPosition >= screenPosition) {
      this.animationExecuted = false;
    }
  }
}
