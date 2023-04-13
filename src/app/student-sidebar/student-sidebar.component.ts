import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css']
})
export class StudentSidebarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  actionFunction() {
    alert("You have logged out.");
    this.router.navigate(['home']);
  }
}
