import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BecomeTutorSecondPageService } from 'src/app/become-tutor-second-page.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  vacancy_selected !: string;
  success_message !: boolean;
  error_message !: string;

  constructor(public vacancy_service : BecomeTutorSecondPageService, private router: Router) { }

  ngOnInit(): void {
    this.vacancy_service.formModel.reset();
  }

  onSubmit(){
    this.vacancy_service.becomeSecond().subscribe(
      res =>{
        this.success_message = true;
        setTimeout(() => this.success_message = false, 3000);
        this.vacancy_service.formModel.reset();
		    this.router.navigate(['third-page']);
      },
    );
  }

  resetForm(form: NgForm){
    this.vacancy_service._vacancy ={
      Undergraduate_College: '',
      Undergraduate_Majors: '',
      Undergraduate_Degree_Type: '',
      Degree_Completion_Year: '',
      Teaching_Certificate: ''
    }

    form.resetForm();
    this.error_message = '';
  }

  onUserSelected(value: any){
    this.vacancy_selected = value;
  }
}
