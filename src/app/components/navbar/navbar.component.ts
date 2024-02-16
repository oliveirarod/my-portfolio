import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  name = 'Rodrigo O.Ortiz';
  navItems: string[] = ['Home', 'About', 'Services', 'Contact'];

  constructor() {}

  toggleMenu(isMenuOpen: boolean) {
    this.isMenuOpen = isMenuOpen;
  }
}
