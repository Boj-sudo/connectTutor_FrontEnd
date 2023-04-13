import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BecomeTutorSecondPage } from './become-tutor-second-page';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BecomeTutorSecondPageService {

  readonly APIUrl = "http://localhost:50522/api";

  _vacancy: BecomeTutorSecondPage = {
    Undergraduate_College: '',
    Undergraduate_Majors: '',
    Undergraduate_Degree_Type: '',
    Degree_Completion_Year: '',
    Teaching_Certificate: ''
  };

  constructor(private http : HttpClient, private form_builder : FormBuilder) { }

  formModel = this.form_builder.group({
    Undergraduate_College: ['', Validators.required],
    Undergraduate_Majors: ['', Validators.required],
    Undergraduate_Degree_Type: ['', Validators.required],
    Degree_Completion_Year: ['', Validators.required],
    Teaching_Certificate: ['', Validators.required]
  });

  becomeSecond() {
    var body = {
      Undergraduate_College: this.formModel.value.Undergraduate_College,
    Undergraduate_Majors: this.formModel.value.Undergraduate_Majors,
    Undergraduate_Degree_Type: this.formModel.value.Undergraduate_Degree_Type,
    Degree_Completion_Year: this.formModel.value.Degree_Completion_Year,
    Teaching_Certificate: this.formModel.value.Teaching_Certificate
    };

    return this.http.post(this.APIUrl + '/SecondVacancyApp', body);
  }
}
