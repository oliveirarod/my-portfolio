import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';
import { AboutMeService } from '../../services/about-me.service';
import { ScrollToService } from 'src/app/services/scroll-to.service';
import { Sections } from 'src/app/utils/enums/sections';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutMeSection') aboutMeSection!: ElementRef;

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

  constructor(
    private aboutMeService: AboutMeService,
    private scrollToService: ScrollToService
  ) {}

  ngOnInit(): void {
    this.setUpComponentData();
  }

  ngAfterViewInit(): void {
    this.scrollToService.handleScrollToSection(
      Sections.ABOUT,
      this.aboutMeSection
    );
  }

  setUpComponentData() {
    this.desc = this.aboutMeService.desc;
    this.imgAnimation = this.aboutMeService.imgAnimation;
    this.titleAnimation = this.aboutMeService.titleAnimation;
    this.descAnimation = this.aboutMeService.descAnimation;
    this.btnAnimation = this.aboutMeService.btnAnimation;
  }
}
