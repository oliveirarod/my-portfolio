import { Component, OnInit } from "@angular/core";

import { WorkService } from "src/app/services/work.service";
import { WorkInterface } from 'src/app/utils/interfaces/work';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit{

  works: WorkInterface[] = [];

  constructor(
    private workService: WorkService
  ) {}

  ngOnInit(): void {
    this.getWorks();
  }

  // TODO: Criar tratamento de erro
  getWorks(): void {
    this.workService.getBlocks().subscribe((works) => {
      this.works = works;
    })
  }

  openWork(link: string) {
    window.open(link, '_blank');
  }
}
