import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineComponent } from './timeline.component';
import { DirectivesModule } from 'src/app/utils/directives/directives.module';

@NgModule({
  declarations: [TimelineComponent],
  imports: [CommonModule, DirectivesModule],
  exports: [TimelineComponent],
})
export class TimelineModule {}
