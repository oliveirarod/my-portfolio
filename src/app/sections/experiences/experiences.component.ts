import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollToService } from 'src/app/services/scroll-to.service';
import { Sections } from 'src/app/utils/enums/sections';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements AfterViewInit {
  @ViewChild('experiencesSection') experiencesSection!: ElementRef;

  constructor(private scrollToService: ScrollToService) {}

  ngAfterViewInit(): void {
    this.scrollToService.handleScrollToSection(
      Sections.EXPERIENCES,
      this.experiencesSection
    );
  }
}
