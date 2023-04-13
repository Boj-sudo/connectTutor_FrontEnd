import { Component, OnInit, TemplateRef } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  modalRef !: BsModalRef;

  constructor(private service : SharedService, private modalService : BsModalService) { }

  StudentList: any=[];

  ModalTitle !: string;
  ActivateAddEditStuCom: boolean = false;
  stu: any;

  ngOnInit(): void {
    this.refreshStudentList();
  }

  editClick(template: TemplateRef<any>, item: any) {
    this.modalRef = this.modalService.show(template);
    this.stu = item;
    this.ModalTitle = "Edit Student";
    this.ActivateAddEditStuCom = true;
  }

  deleteClick(item: any) {
    if(confirm('Are you sure?')){
      this.service.deleteStudent(item.Student_ID).subscribe(data=>{
        alert(data.toString());
        this.refreshStudentList();
      })
    }
  }

  refreshStudentList() {
    this.service.getStudentList().subscribe(data=>{
        this.StudentList = data;
    });
  }

  searchText : string = '';

  onSearchTextEntered(searchVal : string) {
    this.searchText = searchVal;
  }
}
