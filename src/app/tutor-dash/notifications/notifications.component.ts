import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  bookingDetails !: any[];
  CurrentEmail : string='';

  constructor(public service : SharedService) { }

  ngOnInit(): void {
    this.CurrentEmail = this.service.getTutorEmail();///Get current tutor email logged in
    this.getBookingByTutEmail(this.CurrentEmail);
  }
  
  getBookingByTutEmail(val : string){
    this.service.getCurrentBooking(val).subscribe(data=>{
      this.bookingDetails = data;
    });
  }
}
