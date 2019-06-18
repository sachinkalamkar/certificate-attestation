import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-user-passport-details',
  templateUrl: './user-passport-details.component.html',
  styleUrls: ['./user-passport-details.component.scss'],

})
export class UserPassportDetailsComponent implements OnInit {

  app_form_data: string;

  passportForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userservice: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var test = this.route.snapshot.queryParamMap.get('obj');

    console.log("test", JSON.parse(test));
    const data = JSON.parse(test)
    this.passportForm = this.formBuilder.group({

      passport_number: ['', Validators.required],
      passport_issue_place: ['', Validators.required],
      passport_expiry_date: ['', Validators.required],
      test: data

    });
  }

  get f() { return this.passportForm.controls; }
  onSubmit() {
    var data;
    var verifyObject
    this.submitted = true

    if (this.passportForm.invalid) {
      return
    }

    console.log("policy======>", this.passportForm.value);
    data = this.passportForm.value
    verifyObject = { "res": data }

    localStorage.setItem(this.app_form_data, verifyObject.res);

    var response = localStorage.getItem(this.app_form_data)

    this.router.navigate(['user-contact-details'], { queryParams: { "obj": JSON.stringify(verifyObject.res), si: true } });



  }

  userappli() {

    this.router.navigate(['user-appl-form'])
  }
  home(){

    this.router.navigate(['user-dashboard'])	  
  }

  ua1() {
    this.router.navigate(['user-appl-form'])
  }
  ua2() {
    this.router.navigate(['user-passport-details'])
  }
  ua3() {
    this.router.navigate(['user-contact-details'])
  }
  ua4() {
    this.router.navigate(['user-guarantor-details'])
  }
  ua5() {
    this.router.navigate(['user-current-designation'])
  }
  ua6() {
    this.router.navigate(['user-upload-documents'])
  }

}
