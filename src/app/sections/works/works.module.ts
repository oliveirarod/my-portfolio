import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksComponent } from './works.component';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';

@NgModule({
  declarations: [WorksComponent],
  imports: [CommonModule, SectionTitleModule],
  exports: [WorksComponent]
})
export class WorksModule {}
