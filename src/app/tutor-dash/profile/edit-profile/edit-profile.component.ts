import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private service : SharedService) {}

  @Input() tur:any;
  Tutor_ID !: string;
  Tutor_Name !: string;
  Tutor_Surname !: string;
  Tutor_Contact !: string;
  Tutor_Email !: string;
  Tutor_Password !: string;
  Module_Name !: string;
  PhotoFileName !: string;
  Photo_Path !: string;

  ngOnInit(): void {
   this.Tutor_ID = this.tur.Tutor_ID;
   this.Tutor_Name = this.tur.Tutor_Name;
   this.Tutor_Surname = this.tur.Tutor_Surname;
   this.Tutor_Contact = this.tur.Tutor_Contact;
   this.Tutor_Email = this.tur.Tutor_Email;
   this.Tutor_Password = this.tur.Tutor_Password;
   this.Module_Name = this.tur.Module_Name;
   this.PhotoFileName = this.tur.PhotoFileName;
   this.Photo_Path = this.service.photo_url + this.PhotoFileName;
  }

  updateTutor(){
    var val = {
      Tutor_ID:this.Tutor_ID,
      Tutor_Name:this.Tutor_Name,
      Tutor_Surname:this.Tutor_Surname,
      Tutor_Contact:this.Tutor_Contact,
      Tutor_Email:this.Tutor_Email,
      Tutor_Password:this.Tutor_Password,
      Module_Name:this.Module_Name,
      PhotoFileName:this.PhotoFileName
    };
      

    this.service.updateTutor(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadTutorPhoto(event: any){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadTutorPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName = data.toString();
      this.Photo_Path = this.service.photo_url + this.PhotoFileName;
    })
  }
}
