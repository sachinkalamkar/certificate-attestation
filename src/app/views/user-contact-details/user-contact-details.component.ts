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
  app_form_data:string
  marked=false;
  api1:{};
  cities:{};
  states:{};
  constructor(private formBuilder: FormBuilder, private userservice:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.userservice.apiscountry().subscribe(data=>{
     
      this.api1=data
     
    console.log("data of some country coc", this.api1)
    })
   
  var test = this.route.snapshot.queryParamMap.get('obj');

    console.log("test", JSON.parse(test));
    const data = JSON.parse(test)


    this. contactForm = this.formBuilder.group({
     present_country : ['', Validators.required],
    present_state : ['', Validators.required],
     present_city :['', Validators.required],
    present_house_no : ['', Validators.required],
    present_street_no :['', Validators.required],
    present_pincode : ['', Validators.required],
    present_mobile : ['', Validators.required],
      email_id : ['', Validators.required],
      permanent_country:['', Validators.required],
      permanent_state : ['', Validators.required],
      permanent_city :['', Validators.required],
      permanent_house_no : ['', Validators.required],
      permanent_street_no :['', Validators.required],
      permanent_pincode : ['', Validators.required],
      permanent_mobile : ['', Validators.required],
      alternate_email_id:['', Validators.required],
      application_no:data
  });
}

onChangeCountry(country_id: number) {
  console.log('cntyid',country_id);
  if (country_id) {
    this.userservice.apistate(country_id).subscribe(
      data => {
        this.states =data;
        console.log("statse",this.states)
        this.cities = null;
      }
    );
  } else {
    this.states = null;
    this.cities = null;
  }
}

onChangeState(state_id: number) {
  if (state_id) {
    this.userservice.apicity(state_id).subscribe(
      data => this.cities = data
    );
  } else {
    this.cities = null;
  }
}
  get f() { return this.contactForm.controls; }
  contactDetail(){
     this.submitted=true
    var data;
    var verifyObject;
    if(this. contactForm.invalid){
      return
    }

  console.log("policy======>",this.contactForm.value);
  this.userservice.contactdetails(this.contactForm.value).subscribe(data=>{
  
    verifyObject = { "res": data }
  
      localStorage.setItem(this.app_form_data, verifyObject.res);
  
      var response = localStorage.getItem(this.app_form_data)
    this.router.navigate(['user-guarantor-details'], { queryParams: { "obj": JSON.stringify(verifyObject.res), si: true } })
     
  })
  
}

  
toggleVisibility(e){
  this.marked=e.target.checked;
  console.log(this.marked)
  }

passdetail(){
  this.router.navigate(['user-passport-details'])
}
home(){

  this.router.navigate(['user-dashboard'])	  
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
