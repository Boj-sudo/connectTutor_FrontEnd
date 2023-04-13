import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  
  booking_selected !: string;
  success_message !: boolean;
  error_message !: string;

  currentDate : any = new Date();

  @Input() tur: any;
  @Input() stu: any;
  @Input() mod: any;

  Student_ID !: string;
  Student_Name !: string;
  Student_Surname !: string;
  Student_Contact !: string;
  Student_Email !: string;
  Student_Password !: string;

  Tutor_ID !: string;
  Tutor_Name !: string;
  Tutor_Surname !: string;
  Tutor_Contact !: string;
  Tutor_Email !: string;
  Tutor_Password !: string;

  Module_ID !: string;
  Module_Name !: string;
  Module_Description !: string;
  Module_Image !: string;

  StudentsEmailList !: any[];
  TutorEmailList !: any[];
  ModuleNameList !: any[];

  constructor(public book_service : BookingService, private router : Router) { }

  ngOnInit(): void {
    this.book_service.formModel.reset();
    this.loadModuleNames();
    this.loadStudentEmails();
    this.loadTutorList();
  }

  loadStudentEmails(){
    this.book_service.getAllStudentEmails().subscribe((data:any)=>{
    this.StudentsEmailList = data;

      this.Student_ID = this.stu.Student_ID;
      this.Student_Name = this.stu.Student_Name; 
      this.Student_Surname = this.stu.Student_Surname;
      this.Student_Contact = this.stu.Student_Contact;
      this.Student_Email = this.stu.Student_Email;
      this.Student_Password = this.stu.Student_Password;
    });
  }

  loadTutorList(){
    this.book_service.getAllTutorEmails().subscribe((data:any)=>{
    this.TutorEmailList = data;

      this.Tutor_ID = this.tur.Tutor_ID;
      this.Tutor_Name = this.tur.Tutor_Name; 
      this.Tutor_Surname = this.tur.Tutor_Surname;
      this.Tutor_Contact = this.tur.Tutor_Contact;
      this.Tutor_Email = this.tur.Tutor_Email;
      this.Tutor_Password = this.tur.Tutor_Password;
    });
  }

  loadModuleNames(){
    this.book_service.getAllModuleNames().subscribe((data:any)=>{
    this.ModuleNameList = data;

      this.Module_ID = this.mod.Module_ID;
      this.Module_Name = this.mod.Module_Name; 
      this.Module_Description = this.mod.Module_Description;
      this.Module_Image = this.mod.Module_Image;
    });
  }

  onSubmit(){
    this.book_service.book().subscribe(
      res =>{
        this.success_message = true;
        setTimeout(() => this.success_message = false, 3000);
        this.book_service.formModel.reset();
		    this.router.navigate(['payment']);
      },
    );
  }

  resetForm(form: NgForm){
    this.book_service._booking ={
      Student_Email: '',
      Module_Name: '',
      Tutor_Email: '',
      Start_Date: new Date(),
      Start_Time: {
        hours: 0,
        minutes: 0
      },
      End_Time: {
        hours: 0,
        minutes: 0
      }
    }

    form.resetForm();
    this.error_message = '';
  }

  onUserSelected(value: any){
    this.booking_selected = value;
  }
}
