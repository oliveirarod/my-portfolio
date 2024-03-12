import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { SkillsService } from './../../services/skills.service';
import { SkillCardInfo } from 'src/app/utils/interfaces/skill-card-info';
import { ScrollToService } from 'src/app/services/scroll-to.service';
import { Sections } from 'src/app/utils/enums/sections';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @ViewChild('sectionRef') sectionRef!: ElementRef;

  skills: SkillCardInfo[] = [];

  constructor(
    private skillsService: SkillsService,
    private scrollToService: ScrollToService
  ) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
  }

  ngAfterViewInit(): void {
    this.scrollToService.handleScrollToSection(
      Sections.SKILLS,
      this.sectionRef
    );
  }
}
