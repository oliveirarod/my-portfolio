import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills.component';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';
import { SkillCardModule } from 'src/app/components/skill-card/skill-card.module';
import { DirectivesModule } from 'src/app/utils/directives/directives.module';

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SectionTitleModule,
    SkillCardModule,
    DirectivesModule,
  ],
  exports: [SkillsComponent],
})
export class SkillsModule {}
