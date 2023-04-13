import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-student-profile',
  templateUrl: './edit-student-profile.component.html',
  styleUrls: ['./edit-student-profile.component.css']
})
export class EditStudentProfileComponent implements OnInit{

  constructor(private service: SharedService) { }

  @Input() stu: any;
  Student_ID !: string;
  Student_Name !: string;
  Student_Surname !: string;
  Student_Contact !: string;
  Student_Email !: string;
  Student_Password !: string;
  PhotoFileName !: string;
  PhotoFilePath !: string;

  ngOnInit(): void {
    this.Student_ID = this.stu.Student_ID;
    this.Student_Name = this.stu.Student_Name;
    this.Student_Surname = this.stu.Student_Surname;
    this.Student_Contact = this.stu.Student_Contact;
    this.Student_Email = this.stu.Student_Email;
    this.Student_Password = this.stu.Student_Password;
    this.PhotoFileName = this.stu.PhotoFileName;
    this.PhotoFilePath = this.service.photo_url + this.PhotoFileName;
  }

  updateStudent(){
    var val = {
      Student_ID: this.Student_ID,
      Student_Name: this.Student_Name,
      Student_Surname: this.Student_Surname,
      Student_Contact: this.Student_Contact,
      Student_Email: this.Student_Email,
      Student_Password: this.Student_Password,
      PhotoFileName: this.PhotoFileName
    };

    this.service.updateStudent(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadStudentPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.photo_url + this.PhotoFileName;
    });
  }
}
