import { Component, OnInit, TemplateRef } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-show-tutor',
  templateUrl: './show-tutor.component.html',
  styleUrls: ['./show-tutor.component.css']
})
export class ShowTutorComponent implements OnInit {

  modalRef !: BsModalRef;

  constructor(private service : SharedService, private modalService : BsModalService) { }

  TutorList:any = [];

  ModalTitle !: string;
  ActivateAddEditTurCom: boolean = false;
  tur: any;

  ngOnInit(): void {
    this.refreshTutorList();
  }

  addClick(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    this.tur={
      Tutor_ID: 0,
      Tutor_Name: "",
      Tutor_Surname: "",
      Tutor_Contact: "",
      Tutor_Email: "",
      Tutor_Password: "",
      Module_Name: "",
      PhotoFileName: "anonymous.jpg"
    }

    this.ModalTitle = "Add Tutor";
    this.ActivateAddEditTurCom = true;
  }

  editClick(template: TemplateRef<any>, item: any){
    this.modalRef = this.modalService.show(template);
    console.log(item);
    this.tur = item;
    this.ModalTitle = "Edit Tutor";
    this.ActivateAddEditTurCom = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteTutor(item.Tutor_ID).subscribe(data=>{
        alert(data.toString());
        this.refreshTutorList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTurCom = false;
    this.refreshTutorList();
  }

  refreshTutorList(){
    this.service.getTutorList().subscribe(data=>{
        this.TutorList = data;
    });
  }

  searchText : string = '';

  onSearchTextEntered(searchVal : string){
    this.searchText = searchVal;
  }

  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
}
