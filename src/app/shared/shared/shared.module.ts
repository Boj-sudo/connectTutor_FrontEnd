import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AdminSidebarComponent } from 'src/app/admin-sidebar/admin-sidebar.component';
import { TutorSidebarComponent } from 'src/app/tutor-sidebar/tutor-sidebar.component';
import { StudentSidebarComponent } from 'src/app/student-sidebar/student-sidebar.component';

import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';

@NgModule({
  declarations: [
    AdminSidebarComponent,
    TutorSidebarComponent,
    StudentSidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    AdminSidebarComponent,
    TutorSidebarComponent,
    StudentSidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
