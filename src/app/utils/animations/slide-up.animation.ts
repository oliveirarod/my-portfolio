import { createAnimation } from '../functions/createAnimation';
import { AnimationProperties } from '../interfaces/animation-properties';

export const slideUpAnimation: AnimationProperties = createAnimation({
  duration: 1500,
  translateY: [150, 0],
});
