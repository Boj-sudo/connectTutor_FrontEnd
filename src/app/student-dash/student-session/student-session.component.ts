import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-student-session',
  templateUrl: './student-session.component.html',
  styleUrls: ['./student-session.component.css']
})
export class StudentSessionComponent {

  sessionDetails !: any[];
  CurrentEmail : string='';

  constructor(private service : SharedService) { }

  ngOnInit(): void {
    this.CurrentEmail = this.service.getStudentEmail();
    this.getStudentSessionByEmail(this.CurrentEmail);
  }

  getStudentSessionByEmail(val : string){
    this.service.getStudentSession(val).subscribe(data=>{
      this.sessionDetails = data;
    });
  }
}
