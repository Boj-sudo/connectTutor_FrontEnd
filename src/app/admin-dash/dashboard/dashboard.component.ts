import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  NumStudents : number = 0;
  NumTutors : number = 0;
  NumSessions : number = 0;
  NumBookings : number = 0;
  
  constructor(private service : SharedService) { }

  ngOnInit() {
    this.populateList();
  }

  populateList() {
    this.service.getNumStudents().subscribe(data=> {
      this.NumStudents = data;
    });

    this.service.getNumTuts().subscribe(tdata=> {
      this.NumTutors = tdata;
    });

    this.service.getNumSessions().subscribe(sdata=> {
      this.NumSessions = sdata;
    });

    this.service.getNumBooking().subscribe(bdata=> {
      this.NumBookings = bdata;
    });
  }
}
