import { Component, OnInit,Input } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
// import { UserApplFormComponent } from '../user-appl-form/user-appl-form.component';


@Component({
  selector: 'app-user-passport-details',
  templateUrl: './user-passport-details.component.html',
  styleUrls: ['./user-passport-details.component.scss'],
  
})
export class UserPassportDetailsComponent implements OnInit {
  passportForm: FormGroup;
  submitted = false;
 
  constructor(private formBuilder: FormBuilder, private userservice:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this. passportForm = this.formBuilder.group({
     
      passport_number : ['', Validators.required],
      passport_issue_place :  ['', Validators.required],
      passport_expiry_date: ['', Validators.required]
     
  });
  }
 
  get f() { return this. passportForm.controls; }
  onSubmit(){
   
     this.submitted=true
     this.contactDetails();
    if(this. passportForm .invalid){
      return
    }
  }
  
  contactDetails(){
    
      this.router.navigate(['user-contact-details'])	  
   
  }
 



}
