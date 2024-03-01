import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

import { AnimationProperties } from '../interfaces/animation-properties';

/**
 * `appAnimateWhenScrollDirective` is an Angular directive used to animate elements when they enter the viewport on scroll.
 * To use this directive, follow these steps:
 *
 * 1. Import `DirectivesModule` in your module and declare it.
 * 2. Add `appAnimateWhenScrollDirective` to the element you want to animate in your template.
 * 3. Bind the `[animationProperties]` input with the desired animation properties.
 *
 * Example usage:
 *
 * <div 
 *  appAnimateWhenScrollDirective
 *  [animationProperties]="{ opacity: [0, 1], translateY: ['20px', '0'] }">
 *   Content to be animated
 * </div>
 */

@Directive({
  selector: '[appAnimateWhenScrollDirective]',
})
export class AnimateWhenScrollDirective implements OnInit {
  @Input() animationProperties!: AnimationProperties;
  private animationExecuted = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (!this.animationProperties) return;
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    const shouldAnimate =
      element.getBoundingClientRect().top < window.innerHeight;

    if (!this.animationExecuted && shouldAnimate) {
      this.animationExecuted = true;

      anime({
        targets: element,
        ...this.animationProperties,
      });
    }
  }
}
