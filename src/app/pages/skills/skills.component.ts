import { Component, OnInit } from '@angular/core';
import { SkillCardInfo } from 'src/app/utils/interfaces/skill-card-info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  cards: SkillCardInfo[] = [
    {
      skill: 'Front-end',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      animationProperties: {
        translateX: [-25, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 300,
        easing: 'easeInOutSine'
      }
    },
    {
      skill: 'Back-end',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      animationProperties: {
        translateX: [-25, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutSine'
      }
    },
    {
      skill: 'Design',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      animationProperties: {
        translateX: [25, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutSine'
      }
    },
    {
      skill: 'Others',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting.',
      animationProperties: {
        translateX: [25, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 300,
        easing: 'easeInOutSine'
      }
    },
  ]
}
