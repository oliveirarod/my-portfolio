import { Component, OnInit } from '@angular/core';
import { TimelineBlock } from 'src/app/utils/interfaces/timeline-block';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  // TODO: transformar a data para o tipo date
  // TODO: Jogar todo esse código para uma service para manter organizado
  blocks: TimelineBlock[] = [
    {
      id: 1,
      title: 'Title',
      isWorkExp: false,
      date: '2019',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 1,
      title: 'Title',
      isWorkExp: true,
      date: '2019',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 2,
      title: 'Title',
      isWorkExp: false,
      date: '2021',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 3,
      title: 'Title',
      isWorkExp: true,
      date: '2021',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 4,
      title: 'Title',
      isWorkExp: true,
      date: '2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 5,
      title: 'Title',
      isWorkExp: true,
      date: '2023',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 6,
      title: 'Title',
      isWorkExp: false,
      date: '2023',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
  ];

  blockDates: { date: string; isWorkExp: boolean }[] = [];

  ngOnInit(): void {
    this.initializeBlockDates();
  }

  initializeBlockDates(): void {
    this.blockDates = this.blocks.map(({ date, isWorkExp }) => ({
      date,
      isWorkExp,
    }));
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
}
