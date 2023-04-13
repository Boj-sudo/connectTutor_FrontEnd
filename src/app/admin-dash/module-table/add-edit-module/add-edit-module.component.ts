import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-module',
  templateUrl: './add-edit-module.component.html',
  styleUrls: ['./add-edit-module.component.css']
})
export class AddEditModuleComponent implements OnInit {

  constructor(private service : SharedService) { }

  @Input() mod:any;
  Module_ID !: string;
  Module_Name !: string;
  Module_Description !: string;
  Module_Image !: string;
  PhotoFileName !: string;
  PhotoFilePath !: string;

  ModulesList !: any[];

  ngOnInit(): void {
    this.loadModuleList();
  }

  loadModuleList(){
    this.service.getAllStudentNames().subscribe((data:any)=>{
    this.ModulesList = data;

      this.Module_ID = this.mod.Module_ID;
      this.Module_Name = this.mod.Module_Name; 
      this.Module_Description = this.mod.Module_Description;
      this.Module_Image = this.mod.Module_Image;
    });
  }

  addModule(){
    var val = {
      Module_ID:this.Module_ID,
      Module_Name:this.Module_Name,
      Module_Description:this.Module_Description,
      Module_Image:this.Module_Image
    };

    this.service.addModule(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadModuleImage(formData).subscribe((data:any)=>{
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.photo_url + this.PhotoFileName;
    });
  }
}
