import { Component } from '@angular/core';
import { createAnimation } from 'src/app/utils/functions/createAnimation';
import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  title = {
    greetings: 'Hi, my name is',
    name: 'Rodrigo',
  };

  desc =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit amet..";

  socialMediaList = [
    { name: 'LinkedIn', value: 'linkedin-link' },
    { name: 'GitHub', value: 'github-link' },
    { name: 'E-mail', value: 'email@example.com' },
  ];

  // Animations
  imgAnimation: AnimationProperties = createAnimation({
    translateY: [50, 0],
    opacity: 1
  });

  titleAnimation: AnimationProperties = createAnimation({
    translateY: [25, 0],
  });

  descAnimation: AnimationProperties = createAnimation({
    translateY: [25, 0],
    delay: 100,
  });

  btnAnimation: AnimationProperties = createAnimation({
    translateY: [25, 0],
    delay: 200,
  });
}
