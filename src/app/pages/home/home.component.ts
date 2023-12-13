import { Component, OnInit } from '@angular/core';

import { SECTIONS } from 'src/app/utils/constants/sections';
import {
  REVEAL_ANIMATION_TOTAL_DURATION,
  revealAnimation,
} from 'src/app/utils/animations/reveal.animation';
import { fadeSlideUpAnimation } from 'src/app/utils/animations/fade.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [revealAnimation, fadeSlideUpAnimation],
})
export class HomeComponent implements OnInit {
  sectionId = SECTIONS.home;

  phrases: string[] = [
    'I am Rodrigo de Oliveira Ortiz',
    'I am Full-Stack Developer',
    'I am Web Designer',
  ];
  currentPhraseIndex = 0;
  currentPhrase: string = this.phrases[0];

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    setInterval(() => {
      this.currentPhraseIndex =
        (this.currentPhraseIndex + 1) % this.phrases.length;
      this.currentPhrase = this.phrases[this.currentPhraseIndex];
    }, REVEAL_ANIMATION_TOTAL_DURATION);
  }
}
