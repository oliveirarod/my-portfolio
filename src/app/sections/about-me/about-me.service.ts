import { Injectable } from '@angular/core';

import { createAnimation } from 'src/app/utils/functions/createAnimation';
import { AnimationProperties } from 'src/app/utils/interfaces/animation-properties';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  constructor() {}

  get imgAnimation(): AnimationProperties {
    return createAnimation({ translateY: [50, 0], opacity: 1 });
  }

  get titleAnimation(): AnimationProperties {
    return createAnimation({ translateY: [25, 0] });
  }

  get descAnimation(): AnimationProperties {
    return createAnimation({ translateY: [25, 0], delay: 100 });
  }

  get btnAnimation(): AnimationProperties {
    return createAnimation({ translateY: [25, 0], delay: 200 });
  }

  get desc(): string {
    return "Experienced full-stack developer with a strong focus on front-end development, particularly in Angular and React frameworks. With approximately 5 years of extensive experience, I've worked across various sectors, from startups to national banks. Currently, I'm employed at Bradesco Bank, where I specialize in the digital platform for corporate clients. My role involves leveraging my expertise in both front-end development, particularly in Angular framework, and back-end technologies such as Node.js and Java.";
  }
}
