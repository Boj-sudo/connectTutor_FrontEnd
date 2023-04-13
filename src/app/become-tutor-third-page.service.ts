import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BecomeTutorThirdPage } from './become-tutor-third-page';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BecomeTutorThirdPageService {

  readonly APIUrl = "http://localhost:50522/api";
  readonly DocUrl = "http://localhost:50522/Uploaded_Docs/";

  _vacancy: BecomeTutorThirdPage ={
    CV: '',
    Matric_Certificate: '',
    ID_Copy: '',
    Other_Document_1: '',
    Other_Document_2: '',
    Other_Document_3: ''
  };

  constructor(private http : HttpClient, private form_builder : FormBuilder) { }

  formModel = this.form_builder.group({
    CV: ['', Validators.required],
    Matric_Certificate: ['', Validators.required],
    ID_Copy: ['', Validators.required],
    Other_Document_1: ['', Validators.required]
  });

  becomeThird() {
    var body = {
      CV: this.formModel.value.CV,
      Matric_Certificate: this.formModel.value.Matric_Certificate,
      ID_Copy: this.formModel.value.ID_Copy,
      Other_Document_1: this.formModel.value.Other_Document_1
    };

    return this.http.post(this.APIUrl + '/ThirdVacancyApp', body);
  }

  uploadVacancyDocs(val:any){
    return this.http.post(this.APIUrl + '/ThirdVacancyApp/saveFile', val);
  }
}
