import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
  REVEAL_ANIMATION_TOTAL_DURATION,
  revealAnimation,
} from 'src/app/utils/animations/reveal.animation';
import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';
import { slideUpAnimation } from 'src/app/utils/animations/slide-up.animation';
import { ScrollToService } from 'src/app/services/scroll-to.service';
import { Sections } from 'src/app/utils/enums/sections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // TODO: Analisar se é melhor usar o anime.js ao invés das animações do angular
  animations: [revealAnimation],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('homeSection') homeSection!: ElementRef;

  phrases: string[] = [
    'I am Rodrigo de Oliveira Ortiz',
    'I am Full-Stack Developer',
    'I am Web Designer',
  ];

  currentPhraseIndex = 0;
  currentPhrase: string = this.phrases[0];

  slideUpAnimation: AnimationProperties = slideUpAnimation;

  constructor(
    private scrollToService: ScrollToService
  ) {}

  ngOnInit() {
    this.startAnimation();
  }

  ngAfterViewInit(): void {
    this.scrollToService.handleScrollToSection(
      Sections.HOME,
      this.homeSection
    );
  }

  startAnimation() {
    setInterval(() => {
      this.currentPhraseIndex =
        (this.currentPhraseIndex + 1) % this.phrases.length;
      this.currentPhrase = this.phrases[this.currentPhraseIndex];
    }, REVEAL_ANIMATION_TOTAL_DURATION);
  }
}
