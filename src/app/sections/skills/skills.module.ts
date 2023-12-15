import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills.component';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';
import { CardModule } from 'src/app/components/card/card.module';
import { DirectivesModule } from 'src/app/utils/directives/directives.module';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, SectionTitleModule, CardModule, DirectivesModule],
  exports: [SkillsComponent]
})
export class SkillsModule {}
