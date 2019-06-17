import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-view-user-s1',
  templateUrl: './view-user-s1.component.html',
  styleUrls: ['./view-user-s1.component.scss']
})
export class ViewUserS1Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

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
}
