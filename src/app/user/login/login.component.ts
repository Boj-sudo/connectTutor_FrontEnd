import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  success_message !: boolean;
  error_message !: string;

  TutorList:any = [];
  AdminList:any = [];
  StudentList:any = [];

  Email : string="";
  Password : string="";

  currentUser : string="";

  constructor(public user_service: UserService, private router : Router,private service : SharedService, private location : Location) { 
  }

  ngOnInit(): void {
    this.populateUserList();
  }

  onSubmit(form: NgForm){
    ///Check the current user
    this.checkIfAdmin(form);
    this.checkIfStudent(form);
    this.checkIfTutor(form)

   if(this.currentUser == "Admin")///Login as Admin
   { 
    this.service.sendAdminEmail(form.value.User_Email);
    this.user_service.loginAdmin(form.value).subscribe(
      res => {
        this.success_message = true;
        setTimeout(() => this.success_message = false, 3000);
        this.resetForm(form);
        this.router.navigate(['admin-layout'])
      },
    );

    if(this.success_message == true)///Implement on when login request is successfull
    {
      this.user_service.logAdmin(form.value).subscribe(
        res => {
          this.success_message = true;
          setTimeout(() => this.success_message = false, 3000);
        },
      );
    }
   }

   if(this.currentUser == "Tutor")///Login as Tutor
   {
    this.service.sendTutorEmail(form.value.User_Email);
    this.user_service.loginTutor(form.value).subscribe(
      res => {
        this.success_message = true;
        setTimeout(() => this.success_message = false, 3000);
        this.resetForm(form);
        this.router.navigate(['tutor-layout'])
      },
    );
    if(this.success_message == true)///Implement on when login request is successfull
    {
      this.user_service.logTutor(form.value).subscribe(
        res => {
          this.success_message = true;
          setTimeout(() => this.success_message = false, 3000);
        },
      );
      
    }
   }

   if(this.currentUser == "Student")///Login as Student
   {
    this.service.sendStudentEmail(form.value.User_Email);
    this.user_service.loginStudent(form.value).subscribe(
      res => {
        this.success_message = true;
        setTimeout(() => this.success_message = false, 3000);
        this.resetForm(form);
        this.router.navigate(['student-layout'])
      },
    );
    if(this.success_message == true)///Implement on when login request is successfull
    {
      this.user_service.logStudent(form.value).subscribe(
        res => {
          this.success_message = true;
          setTimeout(() => this.success_message = false, 3000);
        },
      );
    }
   } 
  }

  resetForm(form: NgForm){
    this.user_service.studentUser ={
      Student_Name: '',
      Student_Surname: '',
      Student_Contact: '',
      Student_Email: '',
      Student_Password: ''
    }
    form.resetForm();
    this.error_message = '';
  }
  
  populateUserList(){
    this.service.getTutorList().subscribe(tdata=>{
        this.TutorList = tdata;
    });
    this.service.getStudentList().subscribe(sdata=>{
        this.StudentList = sdata;
    });
    this.service.getAdminList().subscribe(adata=>{
        this.AdminList = adata;
    });
  }
  checkIfAdmin(form:NgForm)
  {
    for(var admn of this.AdminList)
    {
      if(form.value.User_Email == admn.Admin_Email)
      {
        this.currentUser = "Admin";
      }
    }
  }

  checkIfStudent(form:NgForm)
  {
    for(var std of this.StudentList)
    {
      if(form.value.User_Email == std.Student_Email)
      {
        this.currentUser = "Student";
      }
    }
  }

  checkIfTutor(form:NgForm)
  {
    for(var tut of this.TutorList)
    {
      if(form.value.User_Email == tut.Tutor_Email)
      {
        this.currentUser = "Tutor";
      }
    }
  }

  verifyUser(userEmail : any, userPassword : any) {
    if(userEmail === this.Email && userPassword === this.Password){
      this.user_service.UserEmail = userEmail;
      this.location.back();
      this.user_service.logged = true;
    }
    else{
      this.error_message = 'Invalid credentials';
    }
  }
}
