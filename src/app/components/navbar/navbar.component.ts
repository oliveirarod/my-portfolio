import { Component, HostListener, OnInit } from '@angular/core';

import { NavbarService } from 'src/app/services/navbar.service';
import { ScrollToService } from 'src/app/services/scroll-to.service';
import { Sections } from 'src/app/utils/enums/sections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  sections = Sections;

  isMenuOpen!: boolean;
  showBackground: boolean = false;

  name: string = 'Rodrigo O. Ortiz';
  navItems: string[] = [];

  @HostListener('window:scroll')
  setNavbarBgOnScroll() {
    const scrollThreshold = window.innerHeight * 0.15;
    const scrolledBelowThreshold = window.scrollY >= scrollThreshold;

    this.showBackground = scrolledBelowThreshold;
  }

  constructor(
    private navbarService: NavbarService,
    private scrollToService: ScrollToService
  ) {}

  ngOnInit(): void {
    this.setNavItems();
    this.subscribeToIsMenuOpen();
  }

  subscribeToIsMenuOpen() {
    this.navbarService.isMenuOpen$.subscribe((isMenuOpen) => {
      this.isMenuOpen = isMenuOpen;
    });
  }

  goToSection(section: string) {
    this.isMenuOpen ? (this.navbarService.isMenuOpen = false) : null;

    this.scrollToService.scrollToSection(section);
  }

  setNavItems() {
    this.navItems = Object.values(Sections);
  }
}
