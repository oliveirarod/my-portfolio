import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills.component';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, SectionTitleModule],
  exports: [SkillsComponent]
})
export class SkillsModule {}
