import { Component, Input } from '@angular/core';
import { createAnimation } from 'src/app/utils/functions/createAnimation';

import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent {
  @Input() titleText!: string;
  @Input() titleHighlight!: string;
  @Input() desc!: string;

  titleAnimation: AnimationProperties = createAnimation({
    translateY: [25, 0],
  });
}
