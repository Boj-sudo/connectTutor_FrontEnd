import { Component, OnInit, TemplateRef } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service : SharedService, private modalService : BsModalService) { }

  ModalTitle !: string;
  ActivateEditTurCom : boolean = false;
  tur : any;
  modalRef !: BsModalRef;

  CurrentEmail : string='';
  profileDetails !: any[];

  ngOnInit(): void {
    this.CurrentEmail = this.service.getTutorEmail();
    this.updateTutor(this.CurrentEmail);
  }

  updateTutor(val : string){
    this.service.getTutorProfile(val).subscribe(data=>{
      this.profileDetails = data;
    });
  }

  editClick(template : TemplateRef<any>, item : any){
    this.modalRef = this.modalService.show(template);
    this.tur = item;
    this.ModalTitle = "Edit Information";
    this.ActivateEditTurCom = true;
  }
}
