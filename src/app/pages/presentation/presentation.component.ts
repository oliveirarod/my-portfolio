import { Component, OnInit } from '@angular/core';
import { REVEAL_ANIMATION_TOTAL_DURATION, revealAnimation } from 'src/app/utils/animations/reveal.animation';

import { SECTIONS } from 'src/app/utils/constants/sections';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  animations: [revealAnimation],
})
export class PresentationComponent implements OnInit {
  sectionId = SECTIONS.presentation;

  phrases: string[] = [
    'I am Rodrigo de Oliveira Ortiz',
    'I am Full-Stack Developer',
    'I am Web Designer'
  ];
  currentPhraseIndex = 0;
  currentPhrase: string = this.phrases[0];

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    setInterval(() => {
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      this.currentPhrase = this.phrases[this.currentPhraseIndex];
    }, REVEAL_ANIMATION_TOTAL_DURATION);
  }
}
