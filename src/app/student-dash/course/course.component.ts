import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service : SharedService) { }

  CurrentEmail : string ='';
  moduleDetails !: any[]; 

  ngOnInit(): void {
    this.CurrentEmail = this.service.getStudentEmail();
    this.getBookedModules(this.CurrentEmail);
  }

  getBookedModules(val :string){
    this.service.getBookedModules(val).subscribe(data=>{
      this.moduleDetails = data;
    });
  }
}
