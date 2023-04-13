import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-first-table',
  templateUrl: './add-edit-first-table.component.html',
  styleUrls: ['./add-edit-first-table.component.css']
})
export class AddEditFirstTableComponent implements OnInit {

  constructor(private service : SharedService) { }

    @Input() vacancy:any;

    Applicant_ID !: string;
    Firstname !: string;
    Lastname !: string;
    Contact_Number !: string;
    Applicant_Email !: string;

    vacanciesList !: any[];

    ngOnInit(): void {
      
    }
}
