import { Component, Input } from '@angular/core';

import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {
  @Input() titleText!: string;
  @Input() titleHighlight!: string;
  @Input() desc!: string;

  titleAnimation: AnimationProperties = {
    translateY: [25, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeInOutSine',
  };
}
