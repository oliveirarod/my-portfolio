import { Component, OnInit } from '@angular/core';

import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';
import { AboutMeService } from './about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  title = { greetings: 'Hi, my name is', name: 'Rodrigo' };
  desc!: string;

  // Animations
  imgAnimation!: AnimationProperties;
  titleAnimation!: AnimationProperties;
  descAnimation!: AnimationProperties;
  btnAnimation!: AnimationProperties;

  /* 
  TODO: Incluir links de redes sociais (em ícones?)

  socialMediaList = [
    { name: 'LinkedIn', value: 'linkedin-link' },
    { name: 'GitHub', value: 'github-link' },
    { name: 'E-mail', value: 'email@example.com' },
  ];
  */

  constructor(private aboutMeService: AboutMeService) {}

  ngOnInit(): void {
    this.setUpComponentData();
  }

  setUpComponentData() {
    this.desc = this.aboutMeService.desc;
    this.imgAnimation = this.aboutMeService.imgAnimation;
    this.titleAnimation = this.aboutMeService.titleAnimation;
    this.descAnimation = this.aboutMeService.descAnimation;
    this.btnAnimation = this.aboutMeService.btnAnimation;
  }
}
