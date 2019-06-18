import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { NgForm } from '@angular/forms';

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
  verifyStatus:string = 'fail';
  resetForm:FormGroup
  submitted = false;
  private recaptchaSiteKey = '6LeeBakUAAAAALfD2VSJzb7GvsM4EYPA8bKtbS5N';
  private onCaptchaComplete(response: any) {
  console.log('reCAPTCHA response recieved:');
  console.log(response.success);
  console.log(response.token);
  }
  constructor(public router : Router,public userservice:UserService ,public formbuilder: FormBuilder ) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

  
  ngOnInit() {

  
   }

  resetData()
  {
    let finalStatus = (this.verifyStatus.trim().toString()==='success'?true:false); 
    this.resetForm= this.formbuilder.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      middle_name:['',Validators.required],
      nationality:['',Validators.required],
      contact:['',Validators.required],
      email_id:['',Validators.required],
      gender:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],otp:[''],
      dob:['',Validators.required],
      contact_status:finalStatus 
   });
  }
  
get f() { return this.resetForm.controls; }
startpage() {
 
  this.submitted=true
   
 if(this.resetForm.invalid){
    console.log("dfucbjdfnj")
    return 
  }
  
  this.userservice.registration(this.resetForm.value).subscribe(res=> {
    console.log("datatatt",JSON.stringify(this.resetForm.value))
 console.log("response-------",res)
 alert('please fill all the details');
    this.router.navigate(['email-otp'])
  })
  
  
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
     this.verifyStatus = verifyObject.res.message;
     console.log("78945",this.verifyStatus);
     localStorage.setItem(this.verifyStatus,verifyObject.res.message);

   
   })
 }


}