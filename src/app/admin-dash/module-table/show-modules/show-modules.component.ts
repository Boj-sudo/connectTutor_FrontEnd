import { Component, OnInit, TemplateRef } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-show-modules',
  templateUrl: './show-modules.component.html',
  styleUrls: ['./show-modules.component.css']
})
export class ShowModulesComponent implements OnInit {
  modalRef !: BsModalRef;
  
  constructor(private service : SharedService, private modalService : BsModalService) { }

  ModuleList:any = [];

  ModalTitle !: string;
  ActivateAddEditModCom: boolean = false;
  mod: any;

  ngOnInit(): void {
    this.refreshModuleList();
  }

  addClick(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    this.mod= {
      Module_ID: 0,
      Module_Name: "",
      Module_Description: "",
      Module_Image: ""
    };

    this.ModalTitle = "Add Module";
    this.ActivateAddEditModCom = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteModule(item.Module_ID).subscribe(data=>{
        alert(data.toString());
        this.refreshModuleList();
      })
    }
  }

  refreshModuleList(){
    this.service.getModuleList().subscribe(data=>{
        this.ModuleList = data;
    });
  }

  searchText : string = '';

  onSearchTextEntered(searchVal : string){
    this.searchText = searchVal;
  }
}
