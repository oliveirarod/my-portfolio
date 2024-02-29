import { Injectable } from '@angular/core';
import { AnimationProperties } from '../utils/interfaces/animation-properties';
import { createAnimation } from '../utils/functions/createAnimation';
import { slideUpAnimation } from '../utils/animations/slide-up.animation';

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

    const defaultDelay = 200;

    if (isMobile) {
      return this.opacityAnimation(defaultDelay);
    } else if (isTablet) {
      return this.opacityAnimation((index % 2) * defaultDelay);
    } else {
      return this.opacityAnimation((index % 3) * defaultDelay);
    }
  }

  private opacityAnimation(delay?: number) {
    return createAnimation({
      delay,
      duration: 1500,
    });
  }
}
