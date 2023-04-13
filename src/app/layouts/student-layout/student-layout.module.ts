import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { StudentLayoutComponent } from './student-layout.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SharedService } from 'src/app/shared.service';

import { CourseComponent } from 'src/app/student-dash/course/course.component';
import { NotificationComponent } from 'src/app/student-dash/notification/notification.component';
import { ProfilesComponent } from 'src/app/student-dash/profiles/profiles.component';
import { StudentSessionComponent } from 'src/app/student-dash/student-session/student-session.component';
import { AssignmentsComponent } from 'src/app/student-dash/assignments/assignments.component';
import { TutorialsComponent } from 'src/app/student-dash/tutorials/tutorials.component';
import { MarkComponent } from 'src/app/student-dash/mark/mark.component';
import { EditStudentProfileComponent } from 'src/app/student-dash/profiles/edit-student-profile/edit-student-profile.component';

@NgModule({
  declarations: [
    StudentLayoutComponent,
    CourseComponent,
    NotificationComponent,
    ProfilesComponent,
    StudentSessionComponent,
    AssignmentsComponent,
    MarkComponent,
    TutorialsComponent,
    EditStudentProfileComponent
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
    StudentLayoutComponent
  ],
  providers: [
    SharedService
  ]
})
export class StudentLayoutModule { }
