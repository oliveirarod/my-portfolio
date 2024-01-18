import { AnimationProperties } from '../interfaces/animation-properties';

export function createAnimation(
  animationProperties: AnimationProperties
): AnimationProperties {
  return {
    delay: 0,
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeInOutSine',
    ...animationProperties,
  };
}
