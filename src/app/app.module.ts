import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './sections/home/home.module';
import { SkillsModule } from './sections/skills/skills.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
