import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-here',
  templateUrl: './register-here.component.html',
  styleUrls: ['./register-here.component.scss']
})
export class RegisterHereComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  req_id: string;
  otpResponse: string;
  verifyStatus: string;
  constructor(public userService: UserService, public router: Router) { }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ngOnInit() { }
  startpage(form) {
  

    console.log("localStorage.getItem(this.verifyStatus)", form.value, localStorage.getItem(this.verifyStatus))
    if (localStorage.getItem(this.verifyStatus) === 'successs') {
    this.userService.registration(form.value,true).subscribe(

      res => {

        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
        this.router.navigate(['dashboard']);
        console.log("redirect to the dashboard page..................", res);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }

    );
   
    }
  }
  sendotp(form) {
    console.log("contct number", form.value.contact);
    var response;
    var res = this.userService.sendotp(form.value.contact).subscribe(data => {
      console.log("contct numberfgfdgfd", JSON.stringify(data));
      var jsonParse = JSON.parse(JSON.stringify(data));

      response = { "res": data };
      console.log("contact", response.res.request_id);
      localStorage.setItem(this.req_id, response.res.request_id);

      this.processVal(response.res.request_id);


    });

  }
  processVal(res) {
    console.log("response----", res);

  }
  verifyotp(form) {
    var verifyObject;
    console.log("otp of the number ", form.value.otp, localStorage.getItem(this.req_id))
    this.otpResponse = localStorage.getItem(this.req_id);
    console.log("this.otpResponse", this.otpResponse);
    this.userService.verifyotp(form.value.otp, this.otpResponse).subscribe(data => {
      console.log("otp of the numbersss ", data)
      verifyObject = { "res": data }
      console.log("contact", verifyObject.res.message);
      localStorage.setItem(this.verifyStatus, verifyObject.res.message);
    })
  }
  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      //  userId:0,
      first_name: '',
      last_name: '',
      middle_name: '',
      nationality: '',
      contact: '',
      email_id: '',
      gender: '',
      dob: '', contact_status: ''
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

}