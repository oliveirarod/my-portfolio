import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sections } from 'src/app/utils/interfaces/sections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  sections = [Sections.HOME, Sections.SKILLS, Sections.EXPERIENCES];

  constructor(private router: Router) {}

  scrollToSection(sectionId: string) {
    this.router.navigate(['/' + sectionId]);

    const element = document.getElementById(sectionId);
    element && element.scrollIntoView({ behavior: 'smooth' });
  }
}
