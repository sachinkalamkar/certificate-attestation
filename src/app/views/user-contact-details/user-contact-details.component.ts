import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-contact-details',
  templateUrl: './user-contact-details.component.html',
  styleUrls: ['./user-contact-details.component.scss']
})
export class UserContactDetailsComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private userservice:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this. contactForm = this.formBuilder.group({
     
      present_country : ['', Validators.required],
      present_state : ['', Validators.required],
     present_city :['', Validators.required],
    present_house_no : ['', Validators.required],
    present_street_no :['', Validators.required],
    present_pincode : ['', Validators.required],
    present_mobile : ['', Validators.required],

    permanent_country : ['', Validators.required],

      permanent_state : ['', Validators.required],
      permanent_city :['', Validators.required],
      permanent_house_no : ['', Validators.required],
      permanent_street_no :['', Validators.required],
      permanent_pincode : ['', Validators.required],
      permanent_mobile : ['', Validators.required],
      email_id:['', Validators.required]
  });
  }
  get f() { return this. contactForm.controls; }
  contactDetail(){
     this.submitted=true
     this.callApi();
    if(this. contactForm.invalid){
      return
    }
    
}
callApi(){
  console.log("getCallApi====>");
  console.log("policy======>",this.contactForm.value);
  
   
  }

passdetail(){
  this.router.navigate(['user-passport-details'])
}
guarantorDetail(){
  this.router.navigate(['user-guarantor-details'])
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
