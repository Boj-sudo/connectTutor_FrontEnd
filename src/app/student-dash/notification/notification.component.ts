import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  bookingDetails !: any[];
  CurrentEmail : string='';

  constructor(public service : SharedService) { }

  ngOnInit(): void {
    this.CurrentEmail = this.service.getStudentEmail();
    this.getBookingByStudentEmail(this.CurrentEmail);
  }

  getBookingByStudentEmail(val : string){
    this.service.getStudentCurrentBooking(val).subscribe(data=>{
      this.bookingDetails = data;
    });
  }

}
