import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

import { Router, ActivatedRoute } from '@angular/router';

import {DomSanitizer} from '@angular/platform-browser';

import { HttpClient,HttpEventType } from '@angular/common/http';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../user.service';



@Component({

  selector: 'app-user-guarantor-details',

  templateUrl: './user-guarantor-details.component.html',

  styleUrls: ['./user-guarantor-details.component.scss']

})

export class UserGuarantorDetailsComponent implements OnInit {

 gurantorForm:FormGroup

 submitted=true

 app_form_data:string

  constructor(private formBuilder: FormBuilder, private userservice:UserService,private router:Router,private route:ActivatedRoute) { }



  ngOnInit() {

    var test = this.route.snapshot.queryParamMap.get('obj');



    console.log("test", JSON.parse(test));

    const data = JSON.parse(test)

    this.gurantorForm= this.formBuilder.group({

     

      guarantor_name : ['',Validators.required],

    

      guarantor_country : ['',Validators.required],

     

      guarantor_state : ['',Validators.required],

     

      guarantor_city : ['',Validators.required],

     

      guarantor_house_no : ['',Validators.required],

     

      guarantor_street_no : ['',Validators.required],

      

      guarantor_contact : ['',Validators.required],

      

      guarantor_pincode : ['',Validators.required],

    

 test:data

   

});



}

get f() { return this. gurantorForm.controls; }

  onSubmit(){

     this.submitted=true

  var data;

  var verifyObject;

  

    if(this.gurantorForm.invalid){

      return

    }

  console.log("getCallApi====>");

    console.log("policy======>",this.gurantorForm.value);
    this.userservice.gurantor(this.gurantorForm.value).subscribe(data=>{
    

      verifyObject = { "res": data }
  
    
  
        localStorage.setItem(this.app_form_data, verifyObject.res);
  
    
  
        var response = localStorage.getItem(this.app_form_data)
  
        
  
      this.router.navigate(['user-current-designation'],{ queryParams: { "obj": JSON.stringify(verifyObject.res), si: true } })	  
  
    })

   
  }

  



contactdetail(){



  this.router.navigate(['user-contact-details'])	  

}



ua1(){

  this.router.navigate(['user-appl-form'])	  

}

ua2(){

  this.router.navigate(['user-passport-details'])	  

}

ua3(){

  this.router.navigate(['user-contact-details'])	  

}

ua4(){

  this.router.navigate(['user-guarantor-details'])	  

}

ua5(){

  this.router.navigate(['user-current-designation'])	  

}

ua6(){

  this.router.navigate(['user-upload-documents'])	  

}





}