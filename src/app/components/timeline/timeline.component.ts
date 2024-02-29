import { Component, HostListener, Input, OnInit } from '@angular/core';

import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';
import { TimelineBlock } from 'src/app/utils/interfaces/timeline-block';
import { TimelineService } from 'src/app/services/timeline.service';
import { slideUpAnimation } from 'src/app/utils/animations/slide-up.animation';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  @Input() showHeaders = false;
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  setIsMobileOnResize() {
    this.isMobile = window.innerWidth < 795;
  }

  blocks!: TimelineBlock[];
  blockDates: { date: string; isWorkExp: boolean }[] = [];

  slideUpAnimation: AnimationProperties = slideUpAnimation;

  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {
    this.getBlocks();
    this.setIsMobileOnResize();
  }

  shouldPullUpBlock(index: number): boolean {
    const previousBlock = this.blockDates[index - 1];
    const currentBlock = this.blockDates[index];

    const hasPreviousBlock = Boolean(previousBlock);
    const isSameDate = previousBlock?.date === currentBlock.date;
    const hasDifferentWorkExp =
      previousBlock?.isWorkExp !== currentBlock.isWorkExp;

    return hasPreviousBlock && isSameDate && hasDifferentWorkExp;
  }

  // TODO: Criar tratamento de erro
  getBlocks(): void {
    this.timelineService.getBlocks().subscribe((blocks) => {
      this.blocks = blocks;

      this.blockDates = this.blocks.map(({ date, isWorkExp }) => ({
        date,
        isWorkExp,
      }));
    });
  }
}
