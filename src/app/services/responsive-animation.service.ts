import { HostListener, Injectable, OnInit } from '@angular/core';
import { AnimationProperties } from '../utils/interfaces/animation-properties';
import { createAnimation } from '../utils/functions/createAnimation';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveAnimationService implements OnInit {
  private windowWidth!: number;

  private slideRightAnimation: AnimationProperties = createAnimation({
    duration: 1500,
    translateX: [-150, 0],
  });

  private slideLeftAnimation: AnimationProperties = createAnimation({
    duration: 1500,
    translateX: [150, 0],
  });

  private opacityAnimation: AnimationProperties = createAnimation({
    duration: 1500,
  });

  @HostListener('window:resize', ['$event'])
  getWindowWidth(): void {
    this.windowWidth = window.innerWidth;
  }

  constructor() {}

  ngOnInit(): void {
    this.getWindowWidth();
  }

  // TODO: Criar enum pra melhorar manutenção? É necessário?
  determineWorksAnimationDirection(index: number): AnimationProperties {
    const isMobile = this.windowWidth < 768;
    const isTabletOddIndex =
      this.windowWidth >= 768 && this.windowWidth < 1280 && index % 2 !== 0;
    const isDesktopSecondIndex =
      this.windowWidth >= 1280 && (index + 2) % 3 === 0;
    const isDesktopThirdIndex =
      this.windowWidth >= 1280 && (index + 1) % 3 === 0;

    if (isMobile || isTabletOddIndex || isDesktopThirdIndex) {
      return this.slideLeftAnimation;
    } else if (isDesktopSecondIndex) {
      return this.opacityAnimation;
    } else {
      return this.slideRightAnimation;
    }
  }

  
}
