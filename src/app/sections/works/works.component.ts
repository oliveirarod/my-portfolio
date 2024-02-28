import { Component, OnInit } from '@angular/core';

import { WorkService } from 'src/app/services/work.service';
import { WorkInterface } from 'src/app/utils/interfaces/work';
import { ResponsiveAnimationService } from './../../services/responsive-animation.service';
import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  works: WorkInterface[] = [];

  constructor(
    private workService: WorkService,
    private responsiveAnimationService: ResponsiveAnimationService
  ) {}

  ngOnInit(): void {
    this.getWorks();
  }

  // TODO: Criar tratamento de erro
  getWorks(): void {
    this.workService.getBlocks().subscribe((works) => {
      this.works = works;
    });
  }

  openWork(link: string) {
    window.open(link, '_blank');
  }

  determineAnimationDirection(index: number): AnimationProperties {
    return this.responsiveAnimationService.determineWorksAnimationDirection(
      index
    );
  }
}
