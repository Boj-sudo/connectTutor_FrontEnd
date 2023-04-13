import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-second-table',
  templateUrl: './show-second-table.component.html',
  styleUrls: ['./show-second-table.component.css']
})
export class ShowSecondTableComponent implements OnInit {

  constructor(private service : SharedService) { }

  ModalTitle !: string;
  ActivateAddEditVacancyCom: boolean = false;
  vacancy: any;

  vacancyList:any = [];

  ngOnInit(): void {
    this.refreshSecondVacancyList();
  }

  addClick(){
    this.vacancy={
      Appicant_ID: 0,
      Undergraduate_College: "", 
      Undergraduate_Majors: "", 
      Undergraduate_Degree_Type: "", 
      Degree_Completion_Year: "", 
      Teaching_Certificate: ""
    }

    this.ModalTitle = "Add Application";
    this.ActivateAddEditVacancyCom = true;
  }

  editClick(item: any){
    console.log(item);
    this.vacancy = item;
    this.ModalTitle = "Edit Application";
    this.ActivateAddEditVacancyCom = true;
  }

  deleteSecondClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteSecondVacancy(item.Applicant_ID).subscribe(data=>{
        alert(data.toString());
        this.refreshSecondVacancyList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditVacancyCom = false;
    this.refreshSecondVacancyList();
  }

  refreshSecondVacancyList(){
    this.service.getSecondVacancyAppList().subscribe(data=>{
      this.vacancyList = data;
    });
  }

}
