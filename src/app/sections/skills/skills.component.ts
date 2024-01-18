import { Component } from '@angular/core';
import { createAnimation } from 'src/app/utils/functions/createAnimation';
import { SkillCardInfo } from 'src/app/utils/interfaces/skill-card-info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  cards: SkillCardInfo[] = [
    this.createSkillCard(
      'Front-end',
      'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      -600
    ),
    this.createSkillCard(
      'Back-end',
      'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      -300
    ),
    this.createSkillCard(
      'Design',
      'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      300
    ),
    this.createSkillCard(
      'Others',
      'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      600
    ),
  ];

  private createSkillCard(
    skill: string,
    desc: string,
    translateX: number
  ): SkillCardInfo {
    return {
      skill,
      desc,
      animationProperties: createAnimation({
        translateX: [translateX, 0],
      }),
    };
  }
}
