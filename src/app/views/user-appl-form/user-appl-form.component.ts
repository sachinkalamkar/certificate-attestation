
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-appl-form',
  templateUrl: './user-appl-form.component.html',
  styleUrls: ['./user-appl-form.component.scss']
})
export class UserApplFormComponent implements OnInit {
contactForm:FormGroup
submitted = false;
  constructor(private formBuilder: FormBuilder, private userservice:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group ({
      applicant_type : ['',Validators.required],
        full_name : ['',Validators.required],
        sex : ['',Validators.required],
     
        nationality : ['',Validators.required],
      
        date_of_birth :['',Validators.required],
       
        father_name : ['',Validators.required],
      
        mother_name : ['',Validators.required]
     
    
  });
      
  
}
get f() { return this.contactForm.controls; }
passportDetails(){
   this.submitted=true
   
  if(this.contactForm.invalid){
    return
  }
  console.log("getCallApi====>");
  console.log("policy======>",this.contactForm.value);
  
   
		this.router.navigate(['user-passport-details'])	
}
}
