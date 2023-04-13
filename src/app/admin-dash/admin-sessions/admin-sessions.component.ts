import { Component, OnInit, TemplateRef } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-sessions',
  templateUrl: './admin-sessions.component.html',
  styleUrls: ['./admin-sessions.component.css']
})
export class AdminSessionsComponent implements OnInit {

  modalRef !: BsModalRef;

  constructor(private service : SharedService, private modalService : BsModalService) { }

  sessionList:any = [];
  _session: any;

  ModalTitle !: string;
  ActivateAddSessionCom: boolean = false;

  ngOnInit(): void {
    this.refreshSessionList();
  }

  addClick(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    this._session={
      Session_ID: 0,
      Module_Name: "",
      Tutor_Email: "",
      Student_Email: "",
      Session_Date: "",
      Start_Time: "",
      End_Time: "",
      Session_Status: ""
    }

    this.ModalTitle = "Create Session";
    this.ActivateAddSessionCom = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteSession(item.Session_ID).subscribe(data=>{
        alert(data.toString());
        this.refreshSessionList();
      })
    }
  }

  refreshSessionList(){
    this.service.getSessionList().subscribe(data=>{
        this.sessionList = data;
    });
  }
}
