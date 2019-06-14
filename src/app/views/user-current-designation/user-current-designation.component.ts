import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-current-designation',
  templateUrl: './user-current-designation.component.html',
  styleUrls: ['./user-current-designation.component.scss']
})
export class UserCurrentDesignationComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  uploadDocument(){
  this.router.navigate(['user-upload-documents'])
}
}
