import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-booking',
  templateUrl: './add-edit-booking.component.html',
  styleUrls: ['./add-edit-booking.component.css']
})
export class AddEditBookingComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() book:any;

  Booking_ID !: string; 
  Student_Email !: string;
  Module_Name !: string;
  Tutor_Email !: string;
  Start_Date !: Date;
  Start_Time !: any;
  End_Time !: any;

  BookingsList !: any[];

  ngOnInit(): void {
    this.loadBookingList();
  }

  loadBookingList(){
    /*this.service.getAllStudentNames().subscribe((data:any)=>{
    this.BookingsList = data;

      this.Module_ID = this.mod.Module_ID;
      this.Module_Name = this.mod.Module_Name; 
      this.Module_Description = this.mod.Module_Description;
      this.Module_Image = this.mod.Module_Image;
    });*/
  }

  addBooking(){
    var val = {
      /*Module_ID:this.Module_ID,
      Module_Name:this.Module_Name,
      Module_Description:this.Module_Description,
      Module_Image:this.Module_Image*/
    };

    this.service.addBooking(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateBooking(){
   /* var val = {Tutor_ID:this.Tutor_ID,
      Tutor_Name:this.Tutor_Name,
      Tutor_Surname:this.Tutor_Surname,
      Tutor_Address:this.Tutor_Address,
      Tutor_Contact:this.Tutor_Contact,
      Tutor_ID_No:this.Tutor_ID_No,
      Tutor_Email:this.Tutor_Email,
      Tutor_Password:this.Tutor_Password,
      Student_Name:this.Student_Name,
      Photo_Name:this.Photo_Name};

    this.service.updateTutor(val).subscribe(res=>{
    alert(res.toString());
    });*/
  }
}
