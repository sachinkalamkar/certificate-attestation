import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-current-designation',
  templateUrl: './user-current-designation.component.html',
  styleUrls: ['./user-current-designation.component.scss']
})
export class UserCurrentDesignationComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  app_form_data:string
  constructor( private formBuilder: FormBuilder, private userservice:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    var test = this.route.snapshot.queryParamMap.get('obj');

    console.log("test", JSON.parse(test));
    const data = JSON.parse(test)
    this.contactForm = this.formBuilder.group ({
      designation : [''],
      name_of_organization : [''],
      
      organization_address : [''],
     
      pan_card_number : [''],
    
      purpose_for_authentication :[''],
    
      course : [''],
     
      name_of_college : [''],
    
      college_address : [''],
  
      test:data
     
    
  });
      
  
  }
  get f() { return this. contactForm.controls; }
  uploadDocument(){
     this.submitted=true
    var data;
    var verifyObject;
    if(this. contactForm.invalid){
      return
    }

  console.log("policy======>",this.contactForm.value);
  data=this.contactForm.value
  verifyObject = { "res": data }

    localStorage.setItem(this.app_form_data, verifyObject.res);

    var response = localStorage.getItem(this.app_form_data)
    this.router.navigate(['user-upload-documents'], { queryParams: { "obj": JSON.stringify(verifyObject.res), si: true } })
   
}
guarantordetail(){
    this.router.navigate(['user-guarantor-details'])
  }
  home(){

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
