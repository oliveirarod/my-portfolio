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
    "Experienced full-stack developer with a strong focus on front-end development, particularly in Angular and React frameworks. With approximately 5 years of extensive experience, I've worked across various sectors, from startups to national banks. Currently, I'm employed at Bradesco Bank, where I specialize in the digital platform for corporate clients. My role involves leveraging my expertise in both front-end development, particularly in Angular framework, and back-end technologies such as Node.js and Java.";

  // TODO: Incluir links de redes sociais (em ícones?)
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
