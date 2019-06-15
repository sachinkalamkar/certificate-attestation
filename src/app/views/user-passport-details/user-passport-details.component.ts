import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-passport-details',
  templateUrl: './user-passport-details.component.html',
  styleUrls: ['./user-passport-details.component.scss']
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
    console.log("getCallApi====>");
    console.log("policy======>",this.passportForm.value);
    this.userservice.passport(this.passportForm.value).subscribe(data=>{
      console.log("====================>",this.passportForm.value)
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.passportForm.value))
      this.router.navigate(['user-contact-details'])	  
    })
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
