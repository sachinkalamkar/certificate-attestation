import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  passportForm: FormGroup;
  submitted = false
  app_message: string

  constructor(private formBuilder: FormBuilder, private userservice: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var test = this.route.snapshot.queryParamMap.get('_id');
    console.log("test", test);
    // const data = JSON.parse(test)
    this.passportForm = this.formBuilder.group({

      _id: test

    });
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
  s1() {

    this.router.navigate(['view-user-s1'])
  }
  appli() {
    this.userservice.newappli(this.passportForm.value).subscribe(res => {
      console.log("response-----", this.passportForm.value)
      console.log("response of message", res)
      var response=JSON.parse(JSON.stringify(res)).message;
      console.log("response of the message id",response)
      localStorage.setItem(this.app_message, response);
      var response1 = localStorage.getItem(this.app_message)
      this.router.navigate(['user-appl-form'],{queryParams:{"obj":response,si:true}})
    })

  }
  // home(){
  //   this.router.navigate(['user-dashboard'])	  
  // }
  doc() {
    this.router.navigate(['user-mandatory-documents'])
  }
  profile() {
    this.userservice.getUserProfile(this.passportForm.value).subscribe(res => {
      console.log("response----- of id", this.passportForm.value)
      console.log("response of id ",res)
      var data=this.passportForm.value
     var data1= data._id
     console.log("data of id",data1)
     
      localStorage.setItem(this.app_message, data1);
     
      var response = localStorage.getItem(this.app_message)
      this.router.navigate(['user-profile'],{ queryParams:{"obj":data1,si: true } })
    })
  }
}
