import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';
import { NgForm } from '@angular/forms';
//import { lstat } from 'fs';

@Component({
  selector: 'app-register-here',
  templateUrl: './register-here.component.html',
  styleUrls: ['./register-here.component.scss'],
})

  
export class RegisterHereComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  req_id:string;
  otpResponse:string;
  verifyStatus:string;
  resetForm:FormGroup
  submitted = false;
  marked=true;
  marked1:any
 
  private recaptchaSiteKey = '6LeeBakUAAAAALfD2VSJzb7GvsM4EYPA8bKtbS5N';
  private onCaptchaComplete(response: any) {
  console.log('reCAPTCHA response recieved:');
  console.log(response.success);
  console.log(response.token);
  }
  constructor(public router : Router,public userservice:UserService ,public formbuilder: FormBuilder ) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  ngOnInit() {
    
    this.resetForm= this.formbuilder.group({
      first_name:[''],
      last_name:[''],
      middle_name:[''],
      nationality:[''],
      contact:[''],
      email_id:[''],
      gender:[''],
      password:[''],
      confirm_password:[''],otp:[''],
      dob:[''],contact_status:true
   });
  
    
    //  document.getElementById('signUpForm').addEventListener('startpage',signupsForm);
    
    //  function signupsForm(e){
    //     e.preventDefault();
    //     const first_name = document.querySelector('#first_name');
    //     const email = document.querySelector('#email');
    //     const middle_name = document.querySelector('#middle_name');
    //     const last_name = document.querySelector('#last_name');
    //     const dob = document.querySelector('#dob');
    //     const gender = document.querySelector('#gender');
    //     const  nationality = document.querySelector('#nationality');
    //     const contact = document.querySelector('#contact');


    //     const captcha = document.querySelector('#g-recaptcha');
    //     return this.http.post('/http//127.0.0.1:3000/subscribe',{
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-type':'application/json'
    //         },
    //         body:JSON.stringify({first_name,email,middle_name,last_name,dob,gender,nationality,contact,captcha:captcha})
    //     })
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data,"neeli==========>")

    //     });
        
    // }
    // var onloadCallback = function() {
    //   alert("grecaptcha is ready!");
    // }; 
    




}
get f() { return this.resetForm.controls; }
startpage() {
  this.submitted=true
   
  if(this.resetForm.invalid){
    return
  }
   if(localStorage.getItem(this.verifyStatus)==='successs'){ 
this.userservice.registration(this.resetForm.value).subscribe(res => {
 
  this.resetForm = this.formbuilder.group({
      first_name:[''],
      last_name:[''],
      middle_name:[''],
      nationality:[''],
      contact:[''],
      email_id:[''],
      gender:[''],
      password:[''],
      confirm_password:[''],
      otp:[''],
      dob:[''],contact_status:true
        });
    
  })
  this.router.navigate(['dashboard'])
} 
  else
  return false
}

sendotp(){
  console.log("contct number",this.resetForm.value.contact);
  var response;
   var res=this.userservice.sendotp(this.resetForm.value.contact).subscribe(data=>{
     console.log("contct numberfgfdgfd",JSON.stringify(data));
     var jsonParse=JSON.parse(JSON.stringify(data));
    
     response={"res":data};
     console.log("contact",response.res.request_id);
     localStorage.setItem(this.req_id, response.res.request_id);

     this.processVal(response.res.request_id);
     
     
   });
   
}
processVal(res){
  console.log("response----",res);
 
}
 verifyotp(){
   var verifyObject;
   console.log("otp of the number ",this.resetForm.value.otp,localStorage.getItem(this.req_id))
   this.otpResponse=localStorage.getItem(this.req_id);
   console.log("this.otpResponse",this.otpResponse);
   this.userservice.verifyotp(this.resetForm.value.otp,this.otpResponse).subscribe(data=>{
     console.log("otp of the numbersss ",data)
      verifyObject={"res":data}
     console.log("contact",verifyObject.res.message);
     localStorage.setItem(this.verifyStatus,verifyObject.res.message);
   })
 }

 toggle(e){
  console.log(e)
  if(e==='email'){
    this.marked=true
  }
  else{
    this.marked=false;
  }
   if(e==='phone'){
    this.marked1=true;
  }
  else{
    this.marked1=false
  }
  

 }



}