import { Component, HostListener, OnInit } from '@angular/core';

import { WorkService } from 'src/app/services/work.service';
import { createAnimation } from 'src/app/utils/functions/createAnimation';
import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';
import { WorkInterface } from 'src/app/utils/interfaces/work';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  works: WorkInterface[] = [];
  windowWidth!: number;

  leftToRightAnimation: AnimationProperties = createAnimation({
    duration: 1500,
    translateX: [-150, 0],
  });
  rightToLeftAnimation: AnimationProperties = createAnimation({
    duration: 1500,
    translateX: [150, 0],
  });
  opacityAnimation: AnimationProperties = createAnimation({
    duration: 1500,
  });

  @HostListener('window:resize', ['$event'])
  getWindowWidth(): void {
    this.windowWidth = window.innerWidth;
  }

  constructor(private workService: WorkService) {}

  ngOnInit(): void {
    this.getWindowWidth();
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

  private isMobile(): boolean {
    return this.windowWidth < 768;
  }

  private isTabletOddIndex(index: number): boolean {
    return (
      this.windowWidth >= 768 && this.windowWidth < 1280 && index % 2 !== 0
    );
  }

  private isDesktopSecondIndex(index: number): boolean {
    return this.windowWidth >= 1280 && (index + 2) % 3 === 0;
  }

  private isDesktopThirdIndex(index: number): boolean {
    return this.windowWidth >= 1280 && (index + 1) % 3 === 0;
  }

  determineAnimationDirection(index: number): AnimationProperties {
    if (
      this.isMobile() ||
      this.isTabletOddIndex(index) ||
      this.isDesktopThirdIndex(index)
    ) {
      return this.rightToLeftAnimation;
    } else if (this.isDesktopSecondIndex(index)) {
      return this.opacityAnimation;
    } else {
      return this.leftToRightAnimation;
    }
  }
}
