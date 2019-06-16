import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  verifyStatus:string;
  private recaptchaSiteKey = '6LeeBakUAAAAALfD2VSJzb7GvsM4EYPA8bKtbS5N';
  private onCaptchaComplete(response: any) {
  console.log('reCAPTCHA response recieved:');
  console.log(response.success);
  console.log(response.token);
  }
  constructor(public userService: UserService,public router : Router ) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ngOnInit() {
     document.getElementById('signUpForm').addEventListener('startpage',signupsForm);
    
     function signupsForm(e){
        e.preventDefault();
        const first_name = document.querySelector('#first_name');
        const email = document.querySelector('#email');
        const middle_name = document.querySelector('#middle_name');
        const last_name = document.querySelector('#last_name');
        const dob = document.querySelector('#dob');
        const gender = document.querySelector('#gender');
        const  nationality = document.querySelector('#nationality');
        const contact = document.querySelector('#contact');


        const captcha = document.querySelector('#g-recaptcha');
        return this.http.post('/http//127.0.0.1:3000/subscribe',{
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify({"first_name":first_name,email,middle_name,last_name,dob,gender,nationality,contact,captcha:captcha})
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"neeli==========>")

        });
        
    }
    var onloadCallback = function() {
      alert("grecaptcha is ready!");
    }; 
    



// button ripple effect from @ShawnSauce 's pen https://codepen.io/ShawnSauce/full/huLEH
/////

$(document).ready(function() {
  $(function(){
    
    var animationLibrary = 'animate';
    
    $.easing.easeOutQuart = function (x, t, b, c, d) {
      return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
    $('[ripple]:not([disabled],.disabled)')
    .on('mousedown', function( e ){
      
      var button = $(this);
      var touch = $('<touch><touch/>');
      var size = button.outerWidth() * 1.8;
      var complete = false;
      
      $(document)
      .on('mouseup',function(){
        var a = {
          'opacity': '0'
        };
        if( complete === true ){
          size = size * 1.33;
          $.extend(a, {
            'height': size + 'px',
            'width': size + 'px',
            'margin-top': -(size)/2 + 'px',
            'margin-left': -(size)/2 + 'px'
          });
        }
          
        touch
        [animationLibrary](a, {
          duration: 500,
          complete: function(){touch.remove();},
          easing: 'swing'
        });
      });
      
      touch
      .addClass( 'touch' )
      .css({
        'position': 'absolute',
        'top': e.pageY-button.offset().top + 'px',
        'left': e.pageX-button.offset().left + 'px',
        'width': '0',
        'height': '0'
      });
      
      /* IE8 will not appendChild */
      button.get(0).appendChild(touch.get(0));
      
      touch
      [animationLibrary]({
        'height': size + 'px',
        'width': size + 'px',
        'margin-top': -(size)/2 + 'px',
        'margin-left': -(size)/2 + 'px'
      }, {
        queue: false,
        duration: 500,
        'easing': 'easeOutQuart',
        'complete': function(){
          complete = true
        }
      });
    });
  });
  
  var username = $('#username'), 
      password = $('#password'), 
      erroru = $('erroru'), 
      errorp = $('errorp'), 
      submit = $('#submit'),
      udiv = $('#u'),
      pdiv = $('#p');
  
  username.blur(function() {
    if (username.val() == '') {
      udiv.attr('errr','');
    } else {
      udiv.removeAttr('errr');
    }
  });
  
  password.blur(function() {
  if(password.val() == '') {
      pdiv.attr('errr','');
    } else {
      pdiv.removeAttr('errr');
    }
  });
  
  submit.on('click', function(event) {
    event.preventDefault();
    if (username.val() == '') {
      udiv.attr('errr','');
    } else {
      udiv.removeAttr('errr');
    } 
    if(password.val() == '') {
      pdiv.attr('errr','');
    } else {
      pdiv.removeAttr('errr');
    }
  });
  });
 
}
startpage(form) {
  console.log("localStorage.getItem(this.verifyStatus)",form.value,localStorage.getItem(this.verifyStatus))

  this.userService.registration(form.value,localStorage.getItem(this.verifyStatus)).subscribe(
    res => {
     
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);
      this.resetForm(form);
      this.router.navigate(['dashboard']);
      console.log("redirect to the dashboard page..................",res);
    },
    err => {
      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      }
      else
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
    }
    
  );
  if(localStorage.getItem(this.verifyStatus)==='successs'){
    console.log("hfdkvjnv------",localStorage.getItem(this.verifyStatus))
    return true
   }
   else
     return false
   
}

sendotp(form){
  console.log("contct number",form.value.contact);
  var response;
   var res=this.userService.sendotp(form.value.contact).subscribe(data=>{
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
 verifyotp(form){
   var verifyObject;
   console.log("otp of the number ",form.value.otp,localStorage.getItem(this.req_id))
   this.otpResponse=localStorage.getItem(this.req_id);
   console.log("this.otpResponse",this.otpResponse);
   this.userService.verifyotp(form.value.otp,this.otpResponse).subscribe(data=>{
     console.log("otp of the numbersss ",data)
      verifyObject={"res":data}
     console.log("contact",verifyObject.res.message);
     localStorage.setItem(this.verifyStatus,verifyObject.res.message);
   })
 }
resetForm(form: NgForm) {
  this.userService.selectedUser = {
  //  userId:0,
  first_name:'',
  last_name:'',
  middle_name:'',
  nationality:'',
  contact:'',
  email_id:'',
  gender:'',
  dob:'',contact_status:''
  };
  form.resetForm();
  this.serverErrorMessages = '';
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
db(){
  this.router.navigate(['dashboard'])
}

}