import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  readonly api_url = "http://localhost:50522/api";

  _booking: Booking = {
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
  };

  constructor(private http : HttpClient, private form_builder : FormBuilder) { }

  formModel = this.form_builder.group({
    Student_Email: ['', Validators.required],
    Module_Name: ['', Validators.required],
    Tutor_Email: ['', Validators.required],
    Start_Date: ['', Validators.required],
    Start_Time: ['', Validators.required],
    End_Time: ['', Validators.required]
  });

  book() {
    var body = {
      Student_Email: this.formModel.value.Student_Email,
      Module_Name: this.formModel.value.Module_Name,
      Tutor_Email: this.formModel.value.Tutor_Email,
      Start_Date: this.formModel.value.Start_Date,
      Start_Time: this.formModel.value.Start_Time,
      End_Time: this.formModel.value.End_Time
    };

    return this.http.post(this.api_url + '/Booking', body);
  }

  getAllTutorEmails(): Observable<any[]> {
    return this.http.get<any[]>(this.api_url + '/Tutor/GetAllTutorEmails');
  }

  getAllStudentEmails(): Observable<any[]> {
    return this.http.get<any[]>(this.api_url + '/Student/GetAllStudentEmails');
  }

  getAllModuleNames(): Observable<any[]> {
    return this.http.get<any[]>(this.api_url + '/Module/GetAllModulesByName');
  }
}
