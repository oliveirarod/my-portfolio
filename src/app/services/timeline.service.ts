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
      title: 'Lessa Solutions',
      isWorkExp: true,
      date: '2019',
      desc: `
        Full-stack developer responsible for the development of custom systems at Lessa Solutions company. Used technologies: <br />
        <br />
        • Angular (HTML, CSS, JavaScript/TypeScript) <br />
        • Ionic <br />
        • Figma, Bootstrap, Angular Material and Materialize <br />
        • Node.js and MySQL <br />
        • Jira e Kanban
      `,
    },
    {
      id: 2,
      title: "Bachelor's Degree - Analysis and Systems Development",
      isWorkExp: false,
      date: '2021',
      desc: 'My academic journey immersed me in the theoretical foundations of technology, exploring programming paradigms and algorithms. This knowledge equips me to tackle complex challenges with clarity and innovation, ensuring confidence in navigating the dynamic tech landscape.',
    },
    {
      id: 3,
      title: 'Bten Brasil',
      isWorkExp: true,
      date: '2021',
      desc: `
        Front-end developer responsible for the development of the ChatBot system for Bten company. Used technologies: <br />
        <br />
        • Angular (HTML, CSS, JavaScript/TypeScript) <br />
        • Bootstrap, Angular Material <br />
        • Figma <br />
        • Node.js <br />
        • Jira, Kanban, and Scrum
      `,
    },
    {
      id: 4,
      title: 'BV Bank',
      isWorkExp: true,
      date: '2022',
      desc: `
        Front-end developer responsible for the development of the Open Finance system at Votorantim Bank (BV), outsourced by CWI Software. Used technologies: <br />
        <br />
        • Angular (HTML, CSS, JavaScript/TypeScript) <br />
        • Google Analytics <br />
        • Git and BitBucket <br />
        • Figma <br />
        • Jira, Kanban, and Scrum <br />
      `,
    },
    {
      id: 5,
      title: 'Bradesco',
      isWorkExp: true,
      date: '2023',
      desc: `
        Full-stack developer responsible for developing systems for legal entities at Bradesco Bank, outsourced by CI&T Software S/A. Used technologies: <br />
        <br />
        • Angular (HTML, CSS, JavaScript/TypeScript) <br />
        • Java (Spring Boot, Maven, JMeter) <br />
        • Cucumber <br />
        • Adobe XD <br />
        • Jira, Kanban, and Scrum <br />
      `,
    },
    {
      id: 6,
      title: 'Postgraduate Degree - Software Engineering',
      isWorkExp: false,
      date: '2023',
      desc: 'My postgraduate studies in Software Engineering provided an advanced exploration of software design, development methodologies, and system architecture. This specialized knowledge enhances my ability to engineer robust software solutions, ensuring efficiency and adaptability in the ever-evolving tech industry.',
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
