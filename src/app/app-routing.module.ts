import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './layouts/presentation/presentation.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  // { path: 'skills', component: SkillsComponent },
  // { path: 'experience', component: ExperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
