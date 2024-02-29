import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { WorkService } from 'src/app/services/work.service';
import { WorkInterface } from 'src/app/utils/interfaces/work';
import { ResponsiveAnimationService } from './../../services/responsive-animation.service';
import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';
import { ScrollToService } from 'src/app/services/scroll-to.service';
import { Sections } from 'src/app/utils/enums/sections';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit, AfterViewInit {
  @ViewChild('worksSection') worksSection!: ElementRef;

  works: WorkInterface[] = [];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.responsiveAnimationService.windowWidthValue = window.innerWidth;
  }

  constructor(
    private workService: WorkService,
    private responsiveAnimationService: ResponsiveAnimationService,
    private scrollToService: ScrollToService
  ) {}

  ngOnInit(): void {
    this.getWorks();
    this.onResize();
  }

  ngAfterViewInit(): void {
    this.scrollToService.handleScrollToSection(
      Sections.WORKS,
      this.worksSection
    );
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
