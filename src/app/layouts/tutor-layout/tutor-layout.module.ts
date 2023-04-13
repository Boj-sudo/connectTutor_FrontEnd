import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TutorLayoutComponent } from './tutor-layout.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SharedService } from 'src/app/shared.service';

import { AssignmentComponent } from 'src/app/tutor-dash/assignment/assignment.component';
import { ModuleComponent } from 'src/app/tutor-dash/module/module.component';
import { MarksComponent } from 'src/app/tutor-dash/marks/marks.component';
import { NotificationsComponent } from 'src/app/tutor-dash/notifications/notifications.component';
import { ProfileComponent } from 'src/app/tutor-dash/profile/profile.component';
import { TutorialComponent } from 'src/app/tutor-dash/tutorial/tutorial.component';
import { TutorSessionComponent } from 'src/app/tutor-dash/tutor-session/tutor-session.component';
import { EditProfileComponent } from 'src/app/tutor-dash/profile/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    TutorLayoutComponent,
    AssignmentComponent,
    ModuleComponent,
    MarksComponent,
    NotificationsComponent,
    ProfileComponent,
    TutorialComponent,
    TutorSessionComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    SharedModule
  ],
  exports: [
    TutorLayoutComponent
  ],
  providers: [
    SharedService
  ]
})
export class TutorLayoutModule { }
