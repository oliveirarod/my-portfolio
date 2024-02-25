import { TimelineService } from './../../services/timeline.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TimelineBlock } from 'src/app/utils/interfaces/timeline-block';

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

  ngOnInit(): void {
    this.getBlocks();
    this.setIsMobileOnResize();
  }

  constructor(private timelineService: TimelineService) {}

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
