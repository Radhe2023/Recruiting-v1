import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocComponent } from './loc/loc.component';
import { ProgressComponent } from './progress/progress.component';
import { InterviewComponent } from './interview/interview.component';
import { SupportComponent } from './support/support.component';
import { EventsComponent } from './events/events.component';
import { PersonalComponent } from './personal/personal.component';
import { AssetsComponent } from './assets/assets.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    LocComponent,
    ProgressComponent,
    InterviewComponent,
    SupportComponent,
    EventsComponent,
    PersonalComponent,
    AssetsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
