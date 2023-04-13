import { Component, OnInit, TemplateRef } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-show-bookings',
  templateUrl: './show-bookings.component.html',
  styleUrls: ['./show-bookings.component.css']
})
export class ShowBookingsComponent implements OnInit {

  modalRef !: BsModalRef;

  constructor(private service : SharedService, private modalService : BsModalService) { }

  ModalTitle !: string;
  ActivateAddEditBookCom: boolean = false;
  book: any;

  BookingList:any = [];

  ngOnInit(): void {
    this.refreshBookingList();
  }

  addClick(){
    this.book={
      Booking_ID: 0,
      Student_Email: "",
      Module_Name: "",
      Tutor_Email: "",
      Start_Date: "",
      Start_Time: "",
      End_Time: ""
    }

    this.ModalTitle = "Add Module";
    this.ActivateAddEditBookCom = true;
  }

  editClick(template: TemplateRef<any>, item: any){
    this.modalRef = this.modalService.show(template);
    console.log(item);
    this.book = item;
    this.ModalTitle = "Edit Module";
    this.ActivateAddEditBookCom = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteBooking(item.Booking_ID).subscribe(data=>{
        alert(data.toString());
        this.refreshBookingList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditBookCom = false;
    this.refreshBookingList();
  }

  refreshBookingList(){
    this.service.getBookingList().subscribe(data=>{
        this.BookingList = data;
    });
  }

  searchText : string = '';

  onSearchTextEntered(searchVal : string){
    this.searchText = searchVal;
  }
}
