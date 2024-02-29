import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollToService } from 'src/app/services/scroll-to.service';
import { Sections } from 'src/app/utils/enums/sections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;
  showBackground: boolean = false;

  name: string = 'Rodrigo O. Ortiz';
  navItems: string[] = [];

  @HostListener('window:scroll')
  setNavbarBgOnScroll() {
    const scrollThreshold = window.innerHeight * 0.15;
    const scrolledBelowThreshold = window.scrollY >= scrollThreshold;
    this.showBackground = scrolledBelowThreshold;
  }

  constructor(private scrollToService: ScrollToService) {}

  ngOnInit(): void {
    this.setNavItems();
  }

  toggleMenu(isMenuOpen: boolean) {
    this.isMenuOpen = isMenuOpen;
  }

  scrollToSection(section: string) {
    this.scrollToService.scrollToSection(section);
  }

  setNavItems() {
    this.navItems = Object.values(Sections);
  }
}
