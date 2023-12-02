import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PresentationComponent } from './presentation.component';
import { ParticlesModule } from 'src/app/components/particles/particles.module';

@NgModule({
  declarations: [PresentationComponent],
  imports: [BrowserAnimationsModule, CommonModule, ParticlesModule],
})
export class PresentationModule {}
