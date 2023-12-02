import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SECTIONS } from 'src/app/utils/constants/sections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  sections = [SECTIONS.home, SECTIONS.skills, SECTIONS.experiences];

  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    this.router.navigate(['/' + sectionId]);

    const element = document.getElementById(sectionId);
    element && element.scrollIntoView({ behavior: 'smooth' });
  }
}
