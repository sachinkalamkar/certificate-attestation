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
  onSubmit(){
     this.submitted=true
     this.callApi();
    if(this. contactForm.invalid){
      return
    }
    
}
callApi(){
  console.log("getCallApi====>");
  console.log("policy======>",this.contactForm.value);
  this.userservice.contact(this.contactForm.value).subscribe(data=>{
    console.log("====================>",this.contactForm.value)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value))
   
  })
}
passportDetail(){
  this.router.navigate(['user-guarantor-details'])
}
}
