import { Injectable } from '@angular/core';
import { SkillCardInfo } from '../utils/interfaces/skill-card-info';
import { createAnimation } from '../utils/functions/createAnimation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {

  // TODO: Substituir essa variável por um retorno de API
  private skills: SkillCardInfo[] = [
    this.createSkillCard(
      'Front-end',
      `
        • HTML, CSS
        • JavaScript/TypeScript <br />
        • Angular and React <br />
        • Bootstrap <br />
        • Angular Material
        • Materialize <br />
        • Tailwind.css <br />
        • API Integrations <br />
        • Google Analytics <br />
      `,
      -300
    ),
    this.createSkillCard(
      'Back-end',
      `
        • API creation <br />
        • MySQL <br />
        • Node.js <br />
        • Java <br />
        • Spring Boot <br />
      `,
      300
    ),
    this.createSkillCard(
      'DevOps and Quality',
      `
        • Git <br />
        • Github <br />
        • Bitbucket <br />
        • Docker <br />
        • Jenkins <br />
        • SonarQube <br />
        • Jira, Confluence <br />
        • Bamboo <br />
        • Unit testing <br />
        • Integration testing <br />
        • Automated testing <br />
      `,
      -300
    ),
    this.createSkillCard(
      'Others',
      `
        • Scrum <br />
        • Kanban <br />
        • Agile <br />
        • Solid <br />
        • Design Patterns <br />
        • OOP <br />
      `,
      300
    ),
  ];

  // TODO: Esses dados já devem estar imbutidos no retorno da API
  private createSkillCard(
    name: string,
    desc: string,
    translateX: number
  ): SkillCardInfo {
    return {
      name,
      desc,
      animationProperties: createAnimation({
        translateX: [translateX, 0],
      }),
    };
  }

  getSkills(): Observable<SkillCardInfo[]> {
    return new Observable<SkillCardInfo[]>((observer) => {
      setTimeout(() => {
        observer.next(this.skills);
        observer.complete();
      }, 1000);
    });
  }

  constructor() {}
}
