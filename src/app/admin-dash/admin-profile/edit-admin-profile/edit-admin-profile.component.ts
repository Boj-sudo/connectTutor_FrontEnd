import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-admin-profile',
  templateUrl: './edit-admin-profile.component.html',
  styleUrls: ['./edit-admin-profile.component.css']
})
export class EditAdminProfileComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() admn: any;
  Admin_ID !: string;
  Admin_Name !: string;
  Admin_Surname !: string;
  Admin_Contact !: string;
  Admin_Email !: string;
  Admin_Password !: string;
  PhotoFileName !: string;
  PhotoFilePath !: string;

  ngOnInit(): void {
    this.Admin_ID = this.admn.Admin_ID;
    this.Admin_Name = this.admn.Admin_Name;
    this.Admin_Surname = this.admn.Admin_Surname;
    this.Admin_Contact = this.admn.Admin_Contact;
    this.Admin_Email = this.admn.Admin_Email;
    this.Admin_Password = this.admn.Admin_Password;
    this.PhotoFileName = this.admn.PhotoFileName;
    this.PhotoFilePath = this.service.photo_url + this.PhotoFileName;
  }

  updateAdmin(){
    var val = {
      Admin_ID: this.Admin_ID,
      Admin_Name: this.Admin_Name,
      Admin_Surname: this.Admin_Surname,
      Admin_Contact: this.Admin_Contact,
      Admin_Email: this.Admin_Email,
      Admin_Password: this.Admin_Password,
      PhotoFileName: this.PhotoFileName
    };

    this.service.updateAdmin(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadAdminPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.photo_url + this.PhotoFileName;
    });
  }
}
