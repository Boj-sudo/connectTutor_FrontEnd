import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-tutor-layout',
  templateUrl: './tutor-layout.component.html',
  styleUrls: ['./tutor-layout.component.css']
})
export class TutorLayoutComponent implements OnInit {

  constructor(private service : SharedService) { }

  CurrentEmail : string = '';

  ngOnInit(): void {
    this.CurrentEmail = this.service.getTutorEmail();
  }
}
