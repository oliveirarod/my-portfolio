import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresetationComponent } from './layouts/presentation/presetation.component';

const routes: Routes = [
  { path: '', component: PresetationComponent },
  // { path: 'skills', component: SkillsComponent },
  // { path: 'experience', component: ExperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
