import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sections } from 'src/app/utils/interfaces/sections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems = [Sections.HOME, Sections.SKILLS, Sections.EXPERIENCES, 'Download CV'];
  showBackground = false;

  @HostListener('window:scroll')
  setNavbarBgOnScroll() {
    const scrollThreshold = window.innerHeight * 0.25;
    const scrolledBelowThreshold = window.scrollY >= scrollThreshold;
    this.showBackground = scrolledBelowThreshold;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  scrollToSection(sectionId: string) {
    this.router.navigate(['/' + sectionId]);

    const element = document.getElementById(sectionId);
    element && element.scrollIntoView({ behavior: 'smooth' });
  }
}
