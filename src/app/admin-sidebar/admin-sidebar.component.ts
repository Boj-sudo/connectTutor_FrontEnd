import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {

  }

  actionFunction() {
    alert("You have logged out.");
    this.router.navigate(['home']);
  }
}
