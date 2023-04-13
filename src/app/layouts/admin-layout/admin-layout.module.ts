import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AdminLayoutComponent } from './admin-layout.component';

import { SharedService } from 'src/app/shared.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';

import { StudentTableComponent } from 'src/app/admin-dash/student-table/student-table.component';
import { TutorTableComponent } from 'src/app/admin-dash/tutor-table/tutor-table.component';
import { AdminProfileComponent } from 'src/app/admin-dash/admin-profile/admin-profile.component';
import { AddEditStudentComponent } from 'src/app/admin-dash/student-table/add-edit-student/add-edit-student.component';
import { ShowStudentComponent } from 'src/app/admin-dash/student-table/show-student/show-student.component';
import { AddEditTutorComponent } from 'src/app/admin-dash/tutor-table/add-edit-tutor/add-edit-tutor.component';
import { ShowTutorComponent } from 'src/app/admin-dash/tutor-table/show-tutor/show-tutor.component';
import { ModuleTableComponent } from 'src/app/admin-dash/module-table/module-table.component';
import { AddEditModuleComponent } from 'src/app/admin-dash/module-table/add-edit-module/add-edit-module.component';
import { ShowModulesComponent } from 'src/app/admin-dash/module-table/show-modules/show-modules.component';
import { AdminSessionsComponent } from 'src/app/admin-dash/admin-sessions/admin-sessions.component';
import { AddSessionComponent } from 'src/app/admin-dash/admin-sessions/add-session/add-session.component';
import { BookingTableComponent } from 'src/app/admin-dash/booking-table/booking-table.component';
import { AddEditBookingComponent } from 'src/app/admin-dash/booking-table/add-edit-booking/add-edit-booking.component';
import { ShowBookingsComponent } from 'src/app/admin-dash/booking-table/show-bookings/show-bookings.component';
import { DashboardComponent } from 'src/app/admin-dash/dashboard/dashboard.component';
import { BecomeTutorTableComponent } from 'src/app/admin-dash/become-tutor-table/become-tutor-table.component';
import { SearchBarComponent } from 'src/app/search-bar/search-bar.component';
import { AddEditFirstTableComponent } from 'src/app/admin-dash/become-tutor-table/add-edit-first-table/add-edit-first-table.component';
import { AddEditSecondTableComponent } from 'src/app/admin-dash/become-tutor-table/add-edit-second-table/add-edit-second-table.component';
import { AddEditThirdTableComponent } from 'src/app/admin-dash/become-tutor-table/add-edit-third-table/add-edit-third-table.component';
import { ShowFirstTableComponent } from 'src/app/admin-dash/become-tutor-table/show-first-table/show-first-table.component';
import { ShowSecondTableComponent } from 'src/app/admin-dash/become-tutor-table/show-second-table/show-second-table.component';
import { ShowThirdTableComponent } from 'src/app/admin-dash/become-tutor-table/show-third-table/show-third-table.component';
import { EditAdminProfileComponent } from 'src/app/admin-dash/admin-profile/edit-admin-profile/edit-admin-profile.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    StudentTableComponent,
    TutorTableComponent,
    AdminProfileComponent,
    AddEditStudentComponent,
    ShowStudentComponent,
    AddEditTutorComponent,
    ShowTutorComponent,
    ModuleTableComponent,
    AddEditModuleComponent,
    ShowModulesComponent,
    AdminSessionsComponent,
    AddSessionComponent,
    BookingTableComponent,
    AddEditBookingComponent,
    ShowBookingsComponent,
    DashboardComponent,
    BecomeTutorTableComponent,
    SearchBarComponent,
    AddEditFirstTableComponent,
    AddEditSecondTableComponent,
    AddEditThirdTableComponent,
    ShowFirstTableComponent,
    ShowSecondTableComponent,
    ShowThirdTableComponent,
    EditAdminProfileComponent
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
    AdminLayoutComponent, 
    StudentTableComponent
  ],
  providers: [
    SharedService
  ]
})
export class AdminLayoutModule { }
