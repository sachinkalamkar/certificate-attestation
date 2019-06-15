
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
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
      applicant_type : [''],
        full_name : [''],
        sex : [''],
     
        nationality : [''],
      
        date_of_birth :[''],
       
        father_name : [''],
      
        mother_name : ['']
     
    
  });
      
  
}get f() { return this. contactForm.controls; }
passportDetail(){
   this.submitted=true
   this.callApi();
  if(this. contactForm.invalid){
    return
  }
  
}
callApi(){
  console.log("getCallApi====>");
  console.log("policy======>",this.contactForm.value);
  
   
		this.router.navigate(['user-passport-details'])	  
  }




isCollapsed: boolean = false;
iconCollapse: string = 'icon-arrow-up';

collapsed(event: any): void {
  // console.log(event);
}

expanded(event: any): void {
  // console.log(event);
}

toggleCollapse(): void {
  this.isCollapsed = !this.isCollapsed;
  this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
}






}
