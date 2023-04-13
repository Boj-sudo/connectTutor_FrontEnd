import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-third-table',
  templateUrl: './show-third-table.component.html',
  styleUrls: ['./show-third-table.component.css']
})
export class ShowThirdTableComponent implements OnInit {

  constructor(private service : SharedService) { }

  ModalTitle !: string;
  ActivateAddEditVacancyCom: boolean = false;
  vacancy: any;

  vacancyList:any = [];

  ngOnInit(): void {
    this.refreshThirdVacancyList();
  }

  addClick(){
    this.vacancy={
      Appicant_ID: 0,
      CV: "", 
      Matric_Certificate: "",
      ID_Copy: "", 
      Other_Document_1: "", 
      Other_Document_2: "", 
      Other_Document_3: "" 
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

  deleteThirdClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteThirdVacancy(item.Applicant_ID).subscribe(data=>{
        alert(data.toString());
        this.refreshThirdVacancyList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditVacancyCom = false;
    this.refreshThirdVacancyList();
  }

  refreshThirdVacancyList(){
    this.service.getThirdVacancyAppList().subscribe(data=>{
      this.vacancyList = data;
    });
  }

}
