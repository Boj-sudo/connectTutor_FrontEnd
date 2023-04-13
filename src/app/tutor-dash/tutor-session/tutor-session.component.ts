import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-tutor-session',
  templateUrl: './tutor-session.component.html',
  styleUrls: ['./tutor-session.component.css']
})
export class TutorSessionComponent implements OnInit {

  sessionDetails !: any[];
  CurrentEmail : string='';

  constructor(private service : SharedService) { }

  ngOnInit(): void {
    this.CurrentEmail = this.service.getTutorEmail();
    this.getTutorSessionByEmail(this.CurrentEmail);
  }

  getTutorSessionByEmail(val : string){
    this.service.getTutorSession(val).subscribe(data=>{
      this.sessionDetails = data;
    });
  }
}
