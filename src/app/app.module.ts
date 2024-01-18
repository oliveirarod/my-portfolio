import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './sections/home/home.module';
import { SkillsModule } from './sections/skills/skills.module';
import { ExperiencesModule } from './sections/experiences/experiences.module';
import { AboutMeModule } from './sections/about-me/about-me.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    AboutMeModule,
    SkillsModule,
    ExperiencesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
