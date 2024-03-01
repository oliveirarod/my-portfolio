import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WorkInterface } from '../utils/interfaces/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  // TODO: Substituir essa variável por um retorno de API
  private works: WorkInterface[] = [
    {
      title: 'Work Title 1',
      desc: 'Description of Work 1',
      img: '../../assets/images/amazon-work-example.png',
      link: ''
    },
    {
      title: 'Work Title 2',
      desc: 'Description of Work 2',
      img: '../../assets/images/amazon-work-example.png',
      link: ''
    },
    {
      title: 'Work Title 3',
      desc: 'Description of Work 3',
      img: '../../assets/images/amazon-work-example.png',
      link: ''
    },
    {
      title: 'Work Title 4',
      desc: 'Description of Work 4',
      img: '../../assets/images/amazon-work-example.png',
      link: ''
    },
    {
      title: 'Work Title 5',
      desc: 'Description of Work 5',
      img: '../../assets/images/amazon-work-example.png',
      link: ''
    }
  ];

  constructor() { }

  getBlocks(): Observable<WorkInterface[]> {
    return new Observable<WorkInterface[]>((observer) => {
      setTimeout(() => {
        observer.next(this.works);
        observer.complete();
      }, 1000);
    });
  }
}
