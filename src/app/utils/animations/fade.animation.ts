import { animate, style, transition, trigger } from "@angular/animations";

export const fadeSlideUpAnimation = trigger('fadeSlideUpAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(25px)' }),
    animate('1.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ])
]);
