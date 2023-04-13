import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BecomeTutorThirdPageService } from 'src/app/become-tutor-third-page.service';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  vacancy_selected !: string;
  success_message !: boolean;
  error_message !: string;

  constructor(public vacancy_service : BecomeTutorThirdPageService, private router: Router) { }

  Doc_Name !: string;
  Doc_Path !: string;

  ngOnInit(): void {
    this.vacancy_service.formModel.reset();
  }

  onSubmit(){
    this.vacancy_service.becomeThird().subscribe(
      res =>{
        this.success_message = true;
        setTimeout(() => this.success_message = false, 3000);
        this.vacancy_service.formModel.reset();
		    this.success_message;
      },
    );
  }

  resetForm(form: NgForm){
    this.vacancy_service._vacancy ={
      CV: '',
      Matric_Certificate: '',
      ID_Copy: '',
      Other_Document_1: '',
      Other_Document_2: '',
      Other_Document_3: ''
    }

    form.resetForm();
    this.error_message = '';
  }

  uploadVacancyDocs(event: any){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.vacancy_service.uploadVacancyDocs(formData).subscribe((data:any)=>{
      this.Doc_Name = data.toString();
      this.Doc_Path = this.vacancy_service.DocUrl + this.Doc_Name;
    })
  }

  onUserSelected(value: any){
    this.vacancy_selected = value;
  }
}
