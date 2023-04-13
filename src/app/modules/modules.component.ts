import { Component, Inject, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  constructor(public service : SharedService, private router : Router) { }

  ModuleList: any = [];
  TutorList: any = [];
  Module : any;
  M_Name : string ="";

  ModuleObj !: string;

  Mathematics !:  string;
  Physical_Science !:  string;
  Chemistry !:  string;
  Life_Science !:  string;
  Accounting !:  string;
  Computer_Science !:  string;
  Informatics !:  string;
  Statistics !:  string;

  Maths_Image : string = "http://localhost:50522/Photos/Mathematics.jpg";
  Physics_Image : string = "http://localhost:50522/Photos/Physical_Science.jpg";
  Chem_Image : string = "http://localhost:50522/Photos/Chemistry.jpg";
  Life_Image : string = "http://localhost:50522/Photos/Life_Science.jpg";
  Accounting_Image : string = "http://localhost:50522/Photos/Accounting.jpg";
  Com_Image : string = "http://localhost:50522/Photos/Computer_Science.jpg";
  Info_Image : string = "http://localhost:50522/Photos/Informatics.jpg";
  Stats_Image : string = "http://localhost:50522/Photos/Statistics.jpg";

  ngOnInit(): void {
    this.loadModuleList();
    this.getTheModuleName(this.Maths_Image,this.Mathematics);
    this.getTheModuleName(this.Physics_Image,this.Physical_Science);
    this.getTheModuleName(this.Chem_Image,this.Chemistry);
    this.getTheModuleName(this.Life_Image,this.Life_Science);
    this.getTheModuleName(this.Accounting_Image,this.Accounting);
    this.getTheModuleName(this.Com_Image,this.Computer_Science);
    this.getTheModuleName(this.Info_Image,this.Informatics);
    this.getTheModuleName(this.Stats_Image,this.Statistics);
  }

  loadModuleList(){
    this.service.getModuleList().subscribe((data:any)=>{
    this.ModuleList = data;
    });
    this.service.getTutorList().subscribe((tdata:any)=>{
      this.TutorList = tdata;
    });
  }
  getTheModuleName(strUrl : string,val : string)
  {
    this.service.getModuleNames(strUrl).subscribe((data:any)=>{
      val = data;
    });
  }
  getIndex(index: number, obj: any): any
  {
    return index;
  }

  OnSelect(){
    this.M_Name = this.Module.Module_Name;
    if(this.M_Name != ""){
      this.service.sendModuleName(this.M_Name);
      this.router.navigate(['physics-tutors']);
    }
  }
}
