import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './pages/home/home.module';
import { AboutMeModule } from './pages/about-me/about-me.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    AboutMeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
