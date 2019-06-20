import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDetails:any;
  data:any;
  data1:any
  constructor(private router : Router,private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit() {
    
    var test = this.route.snapshot.queryParamMap.get('obj');
    console.log("dat test",test)
    this.userService.getUserProfile(test).subscribe(
      res => {
       this.data1 = res;
        this.data=this.data1.message[0];
        this.userDetails=JSON.parse(JSON.stringify(this.data))
        console.log("data of details",this.userDetails)

      },
      err => { 
        console.log(err);
        
      }
    );
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
currentDesignation(){

		this.router.navigate(['user-current-designation'])	  
}
s2(){

  this.router.navigate(['view-user-s2'])	  
}
home(){
  this.router.navigate(['user-dashboard'])
}
doc(){
  this.router.navigate(['user-mandatory-documents'])	  
}
profile(){
  this.router.navigate(['user-profile'])	  
}

}
