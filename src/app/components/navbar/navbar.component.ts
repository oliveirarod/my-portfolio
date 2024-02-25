import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  showBackground: boolean = false;

  name: string = 'Rodrigo O. Ortiz';
  navItems: string[] = ['Home', 'About', 'Works', 'Resume', 'Contact'];

  @HostListener('window:scroll')
  setNavbarBgOnScroll() {
    const scrollThreshold = window.innerHeight * 0.15;
    const scrolledBelowThreshold = window.scrollY >= scrollThreshold;
    this.showBackground = scrolledBelowThreshold;
  }

  constructor() {}

  toggleMenu(isMenuOpen: boolean) {
    this.isMenuOpen = isMenuOpen;
  }
}
