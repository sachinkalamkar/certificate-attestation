import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 data:any
//  _id:string;
 app_form_data:string;
 app_form_data1:string;
 model = {
  email_id: '',
  password: ''
};
  constructor(public userservice:UserService, public router: Router, public route: ActivatedRoute) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  
  ngOnInit() {}
onSubmit(form: NgForm){
console.log("hdsbcnmxmclsmdkldsmkl")
console.log('--------------->',form.value);
  if (this.model.email_id === 'deskoffice@mahait.com' && this.model.password === '123456') {
    this.userservice.login(form.value).subscribe(
      res => {
        console.log('--------------->', form.value)
        this.userservice.setToken(res['token']);
        this.router.navigate(['user-appl-form']);
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
  else if (this.model.email_id === 'admin@mahait.com' && this.model.password === '123456') {
    this.userservice.login(form.value).subscribe(
      res => {
        console.log('--------------->', form.value)
        this.userservice.setToken(res['token']);
        this.router.navigate(['email-otp']);
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
  else if (this.model.email_id === 'deskoffice@mahait.com'&& this.model.password === '123456') {
    this.userservice.login(form.value).subscribe(
      res => {
        console.log('--------------->', form.value)
        this.userservice.setToken(res['token']);
        this.router.navigate(['']);
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  } else {
    this.userservice.login(form.value).subscribe(
      res => {
        console.log('--------------->',form.value);
        var response=JSON.parse(JSON.stringify(res)).message;
     console.log("response---",JSON.parse(JSON.stringify(response)));
       if(response === "Given email id is not registered with us." || response == "Incorrect password" ||response === "Admin Given email id is not registered with us."){
      alert(response)
       }else{
    
     var _id = JSON.parse(JSON.stringify(res))._id;
      var registration_status=JSON.parse(JSON.stringify(res)).registration_status;
     console.log("response---",JSON.parse(JSON.stringify(res)));
        // this.router.navigate(['user-dashboard']);


        localStorage.setItem(this.app_form_data, _id);
        localStorage.setItem(this.app_form_data1,registration_status );
        var response1=localStorage.getItem(this.app_form_data)
        var response2=localStorage.getItem(this.app_form_data1)

    if(registration_status===true){
      this.router.navigate(['user-dashboard'],{ queryParams :{_id,registration_status,si:true}});
    }
	  else if(registration_status===false){
      this.router.navigate(['email-otp']);
     }
    }
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
  
  }
  
  

forgotpass(){
  this.router.navigate(['forgot-pass'])
  // this.router.navigate(['email-otp']);

} 
// onAdmin(){
//   this.router.navigate(['date-picker'])
// }
registerhere(){
  this.router.navigate(['register-here'])
} 
// registerhere22(){
//   this.router.navigate(['user-dashboard'])
// } 
// onSubmit(){

       
//   this.router.navigate(['user-dashboard']);

 
// }

}