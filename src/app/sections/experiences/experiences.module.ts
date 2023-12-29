import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesComponent } from './experiences.component';
import { TimelineModule } from 'src/app/components/timeline/timeline.module';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';

@NgModule({
  declarations: [ExperiencesComponent],
  imports: [CommonModule, TimelineModule, SectionTitleModule],
  exports: [ExperiencesComponent],
})
export class ExperiencesModule {}
