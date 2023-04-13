import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit{

  constructor(private service : SharedService) { }

  @Input() _session : any;
  @Input() tur: any;
  @Input() stu: any;

  Session_ID !: string;
  Session_Date !: string;
  Start_Time !: string;
  End_Time !: string;
  Session_Status !: string;

  Student_ID !: string;
  Student_Name !: string;
  Student_Surname !: string;
  Student_Contact !: string;
  Student_Email !: string;
  Student_Password !: string;

  Tutor_ID !: string;
  Tutor_Name !: string;
  Tutor_Surname !: string;
  Tutor_Contact !: string;
  Tutor_Email !: string;
  Tutor_Password !: string;

  currentDate : any = new Date();

  sessionList !: any[];
  StudentsEmailList !: any[];
  TutorEmailList !: any[];

  ngOnInit(): void {
    this.loadStudentEmails();
    this.loadTutorList();
  }

  loadStudentEmails(){
    this.service.getAllStudentEmails().subscribe((data:any)=>{
    this.StudentsEmailList = data;

      this.Student_ID = this.stu.Student_ID;
      this.Student_Name = this.stu.Student_Name; 
      this.Student_Surname = this.stu.Student_Surname;
      this.Student_Contact = this.stu.Student_Contact;
      this.Student_Email = this.stu.Student_Email;
      this.Student_Password = this.stu.Student_Password;
    });
  }

  loadTutorList(){
    this.service.getAllTutorEmails().subscribe((data:any)=>{
    this.TutorEmailList = data;

      this.Tutor_ID = this.tur.Tutor_ID;
      this.Tutor_Name = this.tur.Tutor_Name; 
      this.Tutor_Surname = this.tur.Tutor_Surname;
      this.Tutor_Contact = this.tur.Tutor_Contact;
      this.Tutor_Email = this.tur.Tutor_Email;
      this.Tutor_Password = this.tur.Tutor_Password;
    });
  }

  addSession(){
    var val = {
      Session_Id:this.Session_ID,
      Tutor_Email:this.Tutor_Email,
      Student_Email:this.Student_Email,
      Session_Date:this.Session_Date,
      Start_Time:this.Start_Time,
      End_Time:this.End_Time,
      Session_Status:this.Session_Status
    };

    this.service.addSession(val).subscribe(res=>{
      alert(res.toString());
    });
  }
}
