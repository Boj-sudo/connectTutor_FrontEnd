import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.css']
})
export class StudentLayoutComponent implements OnInit {

  constructor(private service : SharedService) { }

  CurrentEmail : string = '';

  ngOnInit(): void {
    this.CurrentEmail = this.service.getStudentEmail();
  }
}
