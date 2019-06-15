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
guarantordetail(){
    this.router.navigate(['user-guarantor-details'])
  }

  uploadDocument(){
  this.router.navigate(['user-upload-documents'])
}
ua1(){
  this.router.navigate(['user-appl-form'])	  
}
ua2(){
  this.router.navigate(['user-passport-details'])	  
}
ua3(){
  this.router.navigate(['user-contact-details'])	  
}
ua4(){
  this.router.navigate(['user-guarantor-details'])	  
}
ua5(){
  this.router.navigate(['user-current-designation'])	  
}
ua6(){
  this.router.navigate(['user-upload-documents'])	  
}
}
