import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  moduleDetails !: any[];
  CurrentEmail : string='';  

  constructor(public service : SharedService) { }

  ngOnInit(): void {
    this.CurrentEmail = this.service.getTutorEmail();
    this.getRegisteredModules(this.CurrentEmail);
  }

  getRegisteredModules(val : string){
    this.service.getRegisteredModules(val).subscribe(data=>{
      this.moduleDetails = data;
    });
  }
}
