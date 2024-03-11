import { Component, OnInit } from '@angular/core';

import { SkillsService } from './../../services/skills.service';
import { SkillCardInfo } from 'src/app/utils/interfaces/skill-card-info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: SkillCardInfo[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
  }
}
