import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimateWhenScrollDirective } from './animate-when-scroll.directive';

@NgModule({
  declarations: [AnimateWhenScrollDirective],
  imports: [CommonModule],
  exports: [AnimateWhenScrollDirective],
})
export class DirectivesModule {}
