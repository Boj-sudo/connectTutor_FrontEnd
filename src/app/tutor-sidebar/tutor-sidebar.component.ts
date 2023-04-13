import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-sidebar',
  templateUrl: './tutor-sidebar.component.html',
  styleUrls: ['./tutor-sidebar.component.css']
})
export class TutorSidebarComponent implements OnInit {
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  actionFunction() {
    alert("You have logged out.");
    this.router.navigate(['home']);
  }
}
