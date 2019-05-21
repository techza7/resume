import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FSkillsComponent } from './f-skills/f-skills.component';

import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'fskills',
    component: FSkillsComponent
},

{
    path: 'about',
    component: AboutComponent
},
{
  path: 'experience',
  component: ExperienceComponent
},
{
  path: 'education',
  component: EducationComponent
},
{
  path: 'contact',
  component: ContactComponent
},

{
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
