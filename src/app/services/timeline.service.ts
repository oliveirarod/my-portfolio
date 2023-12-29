import { Injectable } from '@angular/core';
import { TimelineBlock } from '../utils/interfaces/timeline-block';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  // TODO: Substituir essa variável por um retorno de API
  private blocks: TimelineBlock[] = [
    {
      id: 1,
      title: 'Title',
      isWorkExp: false,
      date: '2019',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 2,
      title: 'Title',
      isWorkExp: true,
      date: '2019',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 3,
      title: 'Title',
      isWorkExp: false,
      date: '2021',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 4,
      title: 'Title',
      isWorkExp: true,
      date: '2021',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 5,
      title: 'Title',
      isWorkExp: true,
      date: '2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 6,
      title: 'Title',
      isWorkExp: true,
      date: '2023',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
    {
      id: 7,
      title: 'Title',
      isWorkExp: false,
      date: '2023',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsaratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.',
    },
  ];

  constructor() {}

  getBlocks(): Observable<TimelineBlock[]> {
    return new Observable<TimelineBlock[]>((observer) => {
      setTimeout(() => {
        observer.next(this.blocks);
        observer.complete();
      }, 1000);
    });
  }
}
