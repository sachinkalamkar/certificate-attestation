import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
  email_choice=true;
  contact_status=false;
  verifyStatus:string = 'fail';
  resetForm:FormGroup
  submitted = false;
  marked=true;
  marked1:any
  userdetail:any=[];
api:any=[]
api1:any=[]
splitted:{}
  private recaptchaSiteKey = '6LeeBakUAAAAALfD2VSJzb7GvsM4EYPA8bKtbS5N';
  private onCaptchaComplete(response: any) {
  console.log('reCAPTCHA response recieved:');
  console.log(response.success);
  console.log(response.token);
  }
  constructor(public router : Router,public userservice:UserService ,public formbuilder: FormBuilder,private route:ActivatedRoute) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
  ngOnInit() {
    $(document).ready(function() {
      $('#comment_form').submit(function() {
        $(this).ajaxSubmit({
          error: function(xhr) {
            //status('Error: ' + xhr.status);
          },
         success: function(response) {
          console.log(response);
         }
        });
        //Very important line, it disable the page refresh.
        return false;
      });
    });
  this.resetForm= this.formbuilder.group({
      first_name:[''],
      last_name:[''],
      middle_name:[''],
      nationality:[''],
      contact:['',[Validators.required,Validators.minLength(12)]],
      email_id:['',[Validators.required, Validators.email]],
      gender:[''],
      password:['',[Validators.required, Validators.minLength(6)]],
     dob:[''],
     otp:[''],
     email_choice:[''],
     contact_status:[''],confirm_password:['']
    } 
  ,{validator: this.checkIfMatchingPasswords('password','confirm_password')});
  
   this.resetForm.controls['email_choice'].setValue(this.email_choice);
   this.resetForm.controls['contact_status'].setValue(this.verifyStatus === 'success'?true:false);

   this.userservice.apiscountry().subscribe(data=>{
     
    this.api=data
   
  console.log("data of some country coc", this.api)
  })
  this.userservice.apiscountrycode().subscribe(data=>{
     
    this.api1=data
   
    this.splitted = this.api1.JSON.stringify.trim().split("-"); 
  
  console.log("data of some country coc", this.api1)
  })
}

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }
    
  
get f() { return this.resetForm.controls}
startpage() {
 
  this.submitted=true
   
  if(this.resetForm.invalid)
  {
    return 
  }
  if (this.email_choice){
    this.userservice.registration(this.resetForm.value).subscribe(res=> {
      console.log("datatatt",JSON.stringify(this.resetForm.value))
   console.log("response-------",res)
   var response=JSON.parse(JSON.stringify(res)).message;
   console.log("response---",JSON.parse(JSON.stringify(response)));

  if(response === "Your contact or email id is already registered with us."){
    alert(response)
     }
      else{
        this.router.navigate(['email-otp'])
      }
    })
  }

  else
  {
    if(localStorage.getItem(this.verifyStatus).trim().toString()==='success')
    {
      this.userservice.registration(this.resetForm.value).subscribe(res=> {
        console.log("datatatt",JSON.stringify(this.resetForm.value))
     console.log("response-------",res)
     var response=JSON.parse(JSON.stringify(res)).message;
   console.log("response---",JSON.parse(JSON.stringify(response)));

     alert(response)
        this.router.navigate(['dashboard'])
      })
    }
    else
    {
      alert('OTP verification failed');
    }
  }
  
  
} 
  


sendotp(){
  console.log("contct number",this.resetForm.value.contact);
  var response;
   var res=this.userservice.sendotp(this.resetForm.value.contact).subscribe(data=>{
    console.log("contct number idss",this.resetForm.value.contact);
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
     this.verifyStatus = verifyObject.res.message;
     console.log("78945",this.verifyStatus);
     localStorage.setItem(this.verifyStatus,verifyObject.res.message);
     this.resetForm.controls['contact_status'].setValue(this.verifyStatus === 'success'?true:false);
   
   })

 }

 toggle(e){
  console.log(e)
  if(e==='email'){
    this.marked=true
    this.email_choice = true;

  }
  else{
    this.marked=false;    

  }
   if(e==='phone'){
    this.marked1=true;
    this.email_choice = false;
  }
  else{
    this.marked1=false
  }
  

  this.resetForm.controls['email_choice'].setValue(this.email_choice);
  
   }

 db(){
  this.router.navigate(['dashboard'])
}



}