import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Admin } from './admin';
import { Tutor } from './tutor';
import { User } from './user';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly api_url = "http://localhost:50522/api";

  constructor(private http : HttpClient, private router : Router, private form_builder : FormBuilder) { }

  UserEmail !: string;
  logged !: boolean;

  studentUser:Student ={
    Student_Name: '',
    Student_Surname: '',
    Student_Contact: '',
    Student_Email: '',
    Student_Password: ''
  };

  formModel = this.form_builder.group({
    Student_Name: ['', Validators.required],
    Student_Surname: ['', Validators.required],
    Student_Contact: ['', Validators.required],
    Student_Email: ['', Validators.email],
    Passwords: this.form_builder.group({
      Student_Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, {validator: this.comparePasswords}
    )
  });

  comparePasswords(form_builder: FormGroup){
    let confirmPswrdCtrl = form_builder.get('ConfirmPassword');
    if(confirmPswrdCtrl?.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors){
      if(form_builder.get('Student_Password')?.value != confirmPswrdCtrl?.value){
        confirmPswrdCtrl?.setErrors({passwordMismatch: true});
      } else{
        confirmPswrdCtrl?.setErrors(null);
      }
    }
  }

  register() {
    var body = {
      Student_Name: this.formModel.value.Student_Name,
      Student_Surname: this.formModel.value.Student_Surname,
      Student_Contact: this.formModel.value.Student_Contact,
      Student_Email: this.formModel.value.Student_Email,
      Student_Password: this.formModel.value.Passwords.Student_Password
    };

    return this.http.post(this.api_url + '/Student', body);
  }

  tutorUser:Tutor = {
    Tutor_Name: '',
    Tutor_Surname: '',
    Tutor_Contact: '',
    Tutor_Email: '',
    Tutor_Password: '',
    Module_Name: ''
  };

  adminUser:Admin = {
    Admin_Name: '',
    Admin_Surname: '',
    Admin_Contact: '',
    Admin_Email: '',
    Admin_Password: ''
  }  

  user:User = {
    User_Name: '',
    User_Surname: '',
    User_Contact: '',
    User_Email: '',
    User_Password: ''
  };

  logStudent(student_user: Student)
  {
    return this.http.post(this.api_url + '/student/loguser', student_user);
  }

  logAdmin(admin_user: Admin)
  {
    return this.http.post(this.api_url + "/admin/loguser", admin_user);
  }
  logTutor(tutor_user: Tutor)
  {
    return this.http.post(this.api_url + '/tutor/loguser', tutor_user);
  }
  postStudent(student_user: Student){
    return this.http.post(this.api_url + '/Student', student_user)
  }

  loginStudent(student_user: Student){
    return this.http.post(this.api_url + '/Student/Login', student_user);
  }
  sendTutEmail(theEmail: String)
  {
    return this.http.post(this.api_url + '/booking/checkemail', theEmail);
  }

  postTutor(tutor_user: Tutor){
    return this.http.post(this.api_url + '/Tutor', tutor_user)
  }

  loginTutor(tutor_user: Tutor){
    return this.http.post(this.api_url + '/Tutor/Login', tutor_user);
  }

  postAdmin(admin_user: Admin){
    return this.http.post(this.api_url + '/Admin', admin_user)
  }

  loginAdmin(admin_user: Admin){
    return this.http.post(this.api_url + '/Admin/Login', admin_user);
  }
}
