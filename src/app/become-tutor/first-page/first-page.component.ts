import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BecomeTutorFirstPageService } from 'src/app/become-tutor-first-page.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  vacancy_selected !: string;
  success_message !: boolean;
  error_message !: string;

  constructor(public vacancy_service : BecomeTutorFirstPageService, private router: Router) { }

  ngOnInit(): void {
    this.vacancy_service.formModel.reset();
  }

  onSubmit(){
    this.vacancy_service.becomeFirst().subscribe(
      res =>{
        this.success_message = true;
        setTimeout(() => this.success_message = false, 3000);
        this.vacancy_service.formModel.reset();
		    this.router.navigate(['second-page']);
      },
    );
  }

  resetForm(form: NgForm){
    this.vacancy_service._vacancy = {
      Firstname: '',
      Lastname: '',
      Contact_Number: '',
      Applicant_Email: ''
    }

    form.resetForm();
    this.error_message = '';
  }

  onUserSelected(value: any) {
    this.vacancy_selected = value;
  }
}
