import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  cardsAnimation = {
    translateX: [10, 0],
    translateY: [10, 0],
    duration: 1000,
    easing: 'easeInOutSine',
  };

  ngOnInit(): void {}
}
