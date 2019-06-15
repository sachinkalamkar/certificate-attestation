import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-guarantor-details',
  templateUrl: './user-guarantor-details.component.html',
  styleUrls: ['./user-guarantor-details.component.scss']
})
export class UserGuarantorDetailsComponent implements OnInit {
 gurantorForm:FormGroup
 submitted=true
  constructor(private formBuilder: FormBuilder, private userservice:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.gurantorForm= this.formBuilder.group({
     
      guarantor_name : [''],
    
      guarantor_country : [''],
     
      guarantor_state : [''],
     
      guarantor_city : [''],
     
      guarantor_house_no : [''],
     
      guarantor_street_no : [''],
      
      guarantor_contact : [''],
      
      guarantor_pincode : ['']
    
 
   
});

}
get f() { return this. gurantorForm.controls; }
  onSubmit(){
     this.submitted=true
     this.  currentDesignation();
    if(this.gurantorForm .invalid){
      return
    }
  }
  currentDesignation(){
    console.log("getCallApi====>");
    console.log("policy======>",this.gurantorForm.value);
    
      
		this.router.navigate(['user-current-designation'])	  
 
  }

contactdetail(){

  this.router.navigate(['user-contact-details'])	  
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
