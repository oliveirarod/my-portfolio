import { animate, style, transition, trigger } from '@angular/animations';

const TEXT_ANIMATION_DURATION = 900; // in milliseconds
const DELAY_ANIMATION_DURATION = 1500; // in milliseconds
const MARGIN_ANIMATION_DURATION = 200; // in milliseconds
const TEXT_WIDTH = 105; // in pixels
const TEXT_MARGIN_RIGHT = 14; // in pixels

export const REVEAL_ANIMATION_TOTAL_DURATION =
  TEXT_ANIMATION_DURATION * 2 +
  MARGIN_ANIMATION_DURATION +
  DELAY_ANIMATION_DURATION;

export const revealAnimation = trigger('revealAnimation', [
  transition('* => *', [
    style({ width: `${TEXT_WIDTH}px`, marginRight: '0px' }),
    animate(
      `${TEXT_ANIMATION_DURATION}ms ease-in-out`,
      style({ width: '*', marginRight: `${TEXT_MARGIN_RIGHT}px` })
    ),
    animate(
      `${DELAY_ANIMATION_DURATION}ms`,
      style({ marginRight: `${TEXT_MARGIN_RIGHT}px` })
    ),
    animate(`${MARGIN_ANIMATION_DURATION}ms`, style({ marginRight: '0' })),
    animate(
      `${TEXT_ANIMATION_DURATION}ms ease-in-out`,
      style({ width: `${TEXT_WIDTH}px`, marginRight: '0px' })
    ),
  ]),
]);
