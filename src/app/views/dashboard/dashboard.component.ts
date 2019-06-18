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
 model = {
  email_id: '',
  password: ''
};
  constructor(public userservice:UserService, public router: Router, public route: ActivatedRoute) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  
  ngOnInit() {
    
    



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
// onSubmit(form: NgForm){
//   if (this.model.email_id === 'admin@gmail.com' && this.model.password === '123456') {
//     this.userservice.login(form.value).subscribe(
//       res => {
//         console.log('--------------->', form.value)
//         this.userservice.setToken(res['token']);
//         this.router.navigate(['user-appl-form']);
//       },
//       err => {
//         this.serverErrorMessages = err.error.message;
//       }
//     );
//   }
//   else if (this.model.email_id === 'deputy@gmail.com' && this.model.password === '123456') {
//     this.userservice.login(form.value).subscribe(
//       res => {
//         console.log('--------------->', form.value)
//         this.userservice.setToken(res['token']);
//         this.router.navigate(['']);
//       },
//       err => {
//         this.serverErrorMessages = err.error.message;
//       }
//     );
//   }
//   else if (this.model.email_id === 'desk@gmail.com' && this.model.password === '123456') {
//     this.userservice.login(form.value).subscribe(
//       res => {
//         console.log('--------------->', form.value)
//         this.userservice.setToken(res['token']);
//         this.router.navigate(['']);
//       },
//       err => {
//         this.serverErrorMessages = err.error.message;
//       }
//     );
//   }
  
//   }
  
  

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
onSubmit(){

       
  this.router.navigate(['user-dashboard']);

 
}

}