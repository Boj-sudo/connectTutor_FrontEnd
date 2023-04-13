import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private service : SharedService) { }

  CurrentEmail : string = '';

  ngOnInit(): void {
    this.CurrentEmail = this.service.getAdminEmail();
  }
}
