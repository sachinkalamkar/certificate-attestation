import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  passportForm: FormGroup;
  submitted=false
  constructor(private formBuilder: FormBuilder, private userservice: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var test = this.route.snapshot.queryParamMap.get('_id');
    console.log("test", test);
    // const data = JSON.parse(test)
    this.passportForm = this.formBuilder.group({

    _id:test

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
s1(){

		this.router.navigate(['view-user-s1'])	  
}
appli(){
    this.userservice.newappli(this.passportForm.value).subscribe(res=>{
      console.log("response-----",this.passportForm.value)
    console.log("response",res)
this.router.navigate(['user-appl-form'])
    })
    
}
// home(){
//   this.router.navigate(['user-dashboard'])	  
// }
doc(){
  this.router.navigate(['user-mandatory-documents'])	  
}
profile(){
  this.router.navigate(['user-profile'])	  
}
}
