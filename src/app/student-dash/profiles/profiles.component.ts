import { Component, TemplateRef, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(private service : SharedService, private modalService : BsModalService) { }

  ModalTitle !: string;
  ActivateEditStuCom : boolean = false;
  stu : any;
  modalRef !: BsModalRef;

  CurrentEmail : string='';
  profileDetails !: any[];

  ngOnInit(): void {
    this.CurrentEmail = this.service.getStudentEmail();
    this.updateStudent(this.CurrentEmail);
  }

  updateStudent(val : string){
    this.service.getStudentProfile(val).subscribe(data=>{
      this.profileDetails = data;
    });
  }

  editClick(template : TemplateRef<any>, item : any){
    this.modalRef = this.modalService.show(template);
    this.stu = item;
    this.ModalTitle = "Edit Information";
    this.ActivateEditStuCom = true;
  }
}
