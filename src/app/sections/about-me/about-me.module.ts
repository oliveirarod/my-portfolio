import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me.component';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';
import { DirectivesModule } from 'src/app/utils/directives/directives.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, SectionTitleModule, DirectivesModule],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}
