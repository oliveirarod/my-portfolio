import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './sections/home/home.module';
import { ExperiencesModule } from './sections/experiences/experiences.module';
import { AboutMeModule } from './sections/about-me/about-me.module';
import { ContactModule } from './sections/contact/contact.module';
import { WorksModule } from './sections/works/works.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    AboutMeModule,
    ExperiencesModule,
    ContactModule,
    WorksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
