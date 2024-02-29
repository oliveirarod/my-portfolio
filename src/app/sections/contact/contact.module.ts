import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { SectionTitleModule } from 'src/app/components/section-title/section-title.module';
import { DirectivesModule } from 'src/app/utils/directives/directives.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, SectionTitleModule, ReactiveFormsModule, FormsModule, DirectivesModule],
  exports: [ContactComponent],
})
export class ContactModule {}
