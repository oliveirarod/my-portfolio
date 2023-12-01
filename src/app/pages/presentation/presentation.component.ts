import { Component, OnInit } from '@angular/core';

import { SECTIONS } from 'src/app/utils/constants/sections';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {
  sectionId = SECTIONS.presentation;
}
