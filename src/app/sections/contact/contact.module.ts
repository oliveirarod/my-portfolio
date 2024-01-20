import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, SectionTitleModule],
  exports: [ContactComponent],
})
export class ContactModule {}
