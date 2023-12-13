import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionTitleComponent } from './section-title.component';
import { DirectivesModule } from 'src/app/utils/directives/directives.module';

@NgModule({
  declarations: [SectionTitleComponent],
  imports: [CommonModule, DirectivesModule],
  exports: [SectionTitleComponent]
})
export class SectionTitleModule {}
