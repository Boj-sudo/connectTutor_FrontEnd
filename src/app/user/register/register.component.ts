import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user_selected !: string;
  success_message !: boolean;
  error_message !: string;

  constructor(public user_service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user_service.formModel.reset();
  }

  onSubmit(){
    this.user_service.register().subscribe(
      res =>{
        this.success_message = true;
        setTimeout(() => this.success_message = false, 3000);
        this.user_service.formModel.reset();
		    this.router.navigate(['login']);
      },
    );
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

  onUserSelected(value: any){
    this.user_selected = value;
  }
}
