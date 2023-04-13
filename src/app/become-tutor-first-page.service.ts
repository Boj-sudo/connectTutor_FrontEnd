import { Injectable } from '@angular/core';
import { BecomeTutorFirstPage } from './become-tutor-first-page';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BecomeTutorFirstPageService {

  readonly APIUrl = "http://localhost:50522/api";

  _vacancy: BecomeTutorFirstPage = {
    Firstname: '',
    Lastname: '',
    Contact_Number: '',
    Applicant_Email: ''
  };

  constructor(private http : HttpClient, private form_builder : FormBuilder) { }

  formModel = this.form_builder.group({
    Firstname: ['', Validators.required],
    Lastname: ['', Validators.required],
    Contact_Number: ['', Validators.required],
    Applicant_Email: ['', Validators.required]
  });

  becomeFirst() {
    var body = {
      Firstname: this.formModel.value.Firstname,
      Lastname: this.formModel.value.Lastname,
      Contact_Number: this.formModel.value.Contact_Number,
      Applicant_Email: this.formModel.value.Applicant_Email
    };

    return this.http.post(this.APIUrl + '/firstVacancyApp', body);
  }
}
