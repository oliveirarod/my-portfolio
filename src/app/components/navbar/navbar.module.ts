import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { HamburgerMenuModule } from '../hamburger-menu/hamburger-menu.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, HamburgerMenuModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
