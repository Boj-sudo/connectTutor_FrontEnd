import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-first-table',
  templateUrl: './show-first-table.component.html',
  styleUrls: ['./show-first-table.component.css']
})
export class ShowFirstTableComponent {

  constructor(private service : SharedService) { }

  ModalTitle !: string;
  ActivateAddEditVacancyCom: boolean = false;
  vacancy: any;

  vacancyList:any = [];

  ngOnInit(): void {
    this.refreshFirstVacancyList();
  }

  addClick(){
    this.vacancy={
      Appicant_ID: 0,
      Firstname: "",
      Lastname: "",
      Contact_Number: "",
      Applicant_Email: ""
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

  deleteFirstClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteFirstVacancy(item.Applicant_ID).subscribe(data=>{
        alert(data.toString());
        this.refreshFirstVacancyList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditVacancyCom = false;
    this.refreshFirstVacancyList();
  }

  refreshFirstVacancyList(){
    this.service.getFirstVacancyAppList().subscribe(data=>{
        this.vacancyList = data;
    });
  }
}
