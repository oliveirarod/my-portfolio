import { Injectable } from '@angular/core';
import { AnimationProperties } from '../utils/interfaces/animation-properties';
import { createAnimation } from '../utils/functions/createAnimation';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveAnimationService {
  private windowWidth!: number;

  get windowWidthValue(): number {
    return this.windowWidth;
  }

  set windowWidthValue(value: number) {
    this.windowWidth = value;
  }

  constructor() {}

  determineWorksAnimationDirection(index: number): AnimationProperties {
    const isMobile = this.windowWidth < 768;
    const isTablet = this.windowWidth >= 768 && this.windowWidth < 1280;

    if (isMobile) {
      return this.opacityAnimation(150);
    } else if (isTablet) {
      return this.opacityAnimation((index % 2) * 200);
    } else {
      return this.opacityAnimation((index % 3) * 200);
    }
  }

  private opacityAnimation(delay?: number) {
    return createAnimation({
      delay,
      duration: 1500,
    });
  }
}
