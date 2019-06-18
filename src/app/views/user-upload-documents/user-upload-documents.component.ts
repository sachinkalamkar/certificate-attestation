import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-upload-documents',
  templateUrl: './user-upload-documents.component.html',
  styleUrls: ['./user-upload-documents.component.scss']
})
export class UserUploadDocumentsComponent implements OnInit {

  app_form_data: string;

  uploadForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private userservice: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var test = this.route.snapshot.queryParamMap.get('obj');

  console.log("test", JSON.parse(test));
  const data = JSON.parse(test)
  this.uploadForm = this.formBuilder.group({
    certificate_no : [''],
   
    name_of_exam : [''],
  
    year :[''],
   
    name_of_institute :[''],
    
    
    test: data

  });
}
get f() { return this.uploadForm.controls; }

  onSubmit() {
    this.userservice.uploaddoc(this.uploadForm.value).subscribe(data => {
      console.log("forgot password", this.uploadForm.value)
      this.uploadForm = this.formBuilder.group({
        certificate_no: [''],
        name_of_exam: [''],
        year: [''],
        name_of_institute: [''],
        test: data


      });

    })
  }
currentdesignation(){

  this.router.navigate(['user-current-designation'])	  
}
home(){

  this.router.navigate(['user-dashboard'])	  
}
contactDetails(){

		this.router.navigate(['user-dashboard'])	  
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
