import { Component, TemplateRef, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{

  constructor(private service : SharedService, private modalService : BsModalService) { }

  ModalTitle !: string;
  ActivateEditAdminCom : boolean = false;
  admn : any;
  modalRef !: BsModalRef;

  CurrentEmail : string='';
  profileDetails !: any[];

  ngOnInit(): void {
    this.CurrentEmail = this.service.getAdminEmail();
    this.updateAdmin(this.CurrentEmail);
  }

  updateAdmin(val : string) {
    this.service.getAdminProfile(val).subscribe(data=> {
      this.profileDetails = data;
    });
  }

  editClick(template : TemplateRef<any>, item : any){
    this.modalRef = this.modalService.show(template);
    console.log(item);
    this.admn = item;
    this.ModalTitle = "Edit Information";
    this.ActivateEditAdminCom = true;
  }
}
