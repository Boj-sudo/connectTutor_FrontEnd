import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-second-table',
  templateUrl: './add-edit-second-table.component.html',
  styleUrls: ['./add-edit-second-table.component.css']
})
export class AddEditSecondTableComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() vacancy:any;

  Applicant_ID !: string;
  Undergraduate_College !: string;
  Undergraduate_Majors !: string;
  Undergraduate_Degree_Type !: string;
  Degree_Completion_Year !: string;
  Teaching_Certificate !: string;

  vacanciesList !: any[];

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
