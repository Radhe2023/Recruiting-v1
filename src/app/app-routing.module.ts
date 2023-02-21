import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { InterviewComponent } from './interview/interview.component';
import { LocComponent } from './loc/loc.component';
import { PersonalComponent } from './personal/personal.component';
import { ProgressComponent } from './progress/progress.component';
import { SupportComponent } from './support/support.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'loc', 
  component: LocComponent 
},
  { path: 'assets', 
  component: AssetsComponent 
},
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'interview',
    component: InterviewComponent,
  },
  {
    path: 'personal',
    component: PersonalComponent,
  },
  {
    path: 'progress',
    component: ProgressComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  {
    path: 'training',
    component: TrainingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
