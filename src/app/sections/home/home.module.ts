import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home.component';
import { ParticlesModule } from 'src/app/components/particles/particles.module';
import { DirectivesModule } from 'src/app/utils/directives/directives.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserAnimationsModule, CommonModule, ParticlesModule, DirectivesModule],
  exports: [HomeComponent],
})
export class HomeModule {}
