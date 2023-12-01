import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationComponent } from './presentation.component';
import { ParticlesModule } from 'src/app/components/particles/particles.module';

@NgModule({
  declarations: [PresentationComponent],
  imports: [CommonModule, ParticlesModule],
})
export class PresentationModule {}
