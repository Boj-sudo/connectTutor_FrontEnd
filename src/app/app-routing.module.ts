import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TutorLayoutComponent } from './layouts/tutor-layout/tutor-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';

import { HomeComponent } from './home/home.component';
import { StudentTableComponent } from './admin-dash/student-table/student-table.component';
import { TutorTableComponent } from './admin-dash/tutor-table/tutor-table.component';
import { BookingTableComponent } from './admin-dash/booking-table/booking-table.component';
import { ModuleTableComponent } from './admin-dash/module-table/module-table.component';
import { BecomeTutorTableComponent } from './admin-dash/become-tutor-table/become-tutor-table.component';
import { DashboardComponent } from './admin-dash/dashboard/dashboard.component';
import { AdminProfileComponent } from './admin-dash/admin-profile/admin-profile.component';
import { AdminSessionsComponent } from './admin-dash/admin-sessions/admin-sessions.component';
import { ModuleComponent } from './tutor-dash/module/module.component';
import { MarksComponent } from './tutor-dash/marks/marks.component';
import { NotificationsComponent } from './tutor-dash/notifications/notifications.component';
import { ProfileComponent } from './tutor-dash/profile/profile.component';
import { TutorialComponent } from './tutor-dash/tutorial/tutorial.component';
import { TutorSessionComponent } from './tutor-dash/tutor-session/tutor-session.component';
import { AssignmentComponent } from './tutor-dash/assignment/assignment.component';
import { CourseComponent } from './student-dash/course/course.component';
import { NotificationComponent } from './student-dash/notification/notification.component';
import { ProfilesComponent } from './student-dash/profiles/profiles.component';
import { StudentSessionComponent } from './student-dash/student-session/student-session.component';
import { MarkComponent } from './student-dash/mark/mark.component';
import { AssignmentsComponent } from './student-dash/assignments/assignments.component';
import { TutorialsComponent } from './student-dash/tutorials/tutorials.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { ModulesComponent } from './modules/modules.component';
import { FirstPageComponent } from './become-tutor/first-page/first-page.component';
import { SecondPageComponent } from './become-tutor/second-page/second-page.component';
import { ThirdPageComponent } from './become-tutor/third-page/third-page.component';
import { BookingsComponent } from './bookings/bookings.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  {path: 'modules', component:ModulesComponent},
  {path: 'first-page', component:FirstPageComponent},
  {path: 'second-page', component:SecondPageComponent},
  {path: 'third-page', component:ThirdPageComponent},
  {path: 'booking', component:BookingsComponent},
  {path: 'payment', component:PaymentComponent},
  {
    path: 'admin-layout', component:AdminLayoutComponent,
    children: [
      {path: 'student-table', component:StudentTableComponent},
      {path: 'tutor-table', component:TutorTableComponent},
      {path: 'booking-table', component:BookingTableComponent},
      {path: 'module-table', component:ModuleTableComponent},
      {path: 'become-tutor-table', component:BecomeTutorTableComponent},
      {path: '', component:DashboardComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path: 'admin-profile', component:AdminProfileComponent},
      {path: 'admin-session', component:AdminSessionsComponent}
    ]
  },
  {
    path: 'tutor-layout', component:TutorLayoutComponent,
    children: [
      {path: 'assignment', component:AssignmentComponent},
      {path: '', component:ModuleComponent},
      {path: 'module', component:ModuleComponent},
      {path: 'marks', component:MarksComponent},
      {path: 'notifications', component:NotificationsComponent},
      {path: 'profile', component:ProfileComponent},
      {path: 'tutorial', component:TutorialComponent},
      {path: 'tutor-session', component:TutorSessionComponent}
    ]
  },
  {
    path: 'student-layout', component:StudentLayoutComponent,
    children: [
      {path: '', component:CourseComponent},
      {path: 'course', component:CourseComponent},
      {path: 'notification', component:NotificationComponent},
      {path: 'profiles', component:ProfilesComponent},
      {path: 'student-session', component:StudentSessionComponent},
      {path: 'mark', component:MarkComponent},
      {path: 'assignments', component:AssignmentsComponent},
      {path: 'tutorials', component:TutorialsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
