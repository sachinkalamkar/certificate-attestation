
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient,HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-user-appl-form',
  templateUrl: './user-appl-form.component.html',
  styleUrls: ['./user-appl-form.component.scss']
})
export class UserApplFormComponent implements OnInit {
contactForm:FormGroup;
app_form_data:string;
submitted = false;
selectedFile: File = null;
public imagePath;
imgURL: any;
api:any=[]
public message: string;
 public serverData:any;
 verifyStatus: string;
 applicant_type: string = '';

  constructor(private formBuilder: FormBuilder, private userservice:UserService,private router:Router,private route:ActivatedRoute, private http: HttpClient) { }
  // onFileSelected(event) {
  //   this.selectedFile = <File>event.target.files[0];
  //   console.log(this.selectedFile)
  // }
  
//   onUpload() {

// const fd = new FormData();
  
//   fd.append('image', this.selectedFile, this.selectedFile.name);
    

// this.http.post('http://127.0.0.1:3000/forgotPassword',fd).subscribe(
//   data=>{

//   }
// );
      

// }
  ngOnInit() {
    var test = this.route.snapshot.queryParamMap.get('obj');

   console.log("message test",test)
   
  $("input[type='image']").click(function() {
      $("input[id='my_file']").click();
  });


    this.contactForm = this.formBuilder.group ({
     
      applicant_type : ['',Validators.required],
        full_name : ['',Validators.required],
        sex : ['',Validators.required],
        relationship_with_applicant:[''],
        nationality : ['',Validators.required],
      
        date_of_birth :['',Validators.required],
       
        father_name : ['',Validators.required],
      
        mother_name : ['',Validators.required],
        personal_photo:[''],
        
        application_no:test
    
  });
  this.userservice.apiscountry().subscribe(data=>{
     
    this.api=data
   
  console.log("data of some country coc", this.api)
  })   
  
}
get f() { return this.contactForm.controls; }
passportDetails(){
  // s
var data;
  var verifyObject
   this.submitted=true
   
  if(this.contactForm.invalid){
    return
  }
  
  console.log("personal details======>",this.contactForm.value);
 this.userservice.personaldetails(this.contactForm.value).subscribe(data=>{
    
console.log("sbcjsdmcd",data)
    // localStorage.setItem(this.app_form_data,verifyObject.res);

    // var response=localStorage.getItem(this.app_form_data)
   
    this.router.navigate(['user-passport-details'])
    
  })
  // data= this.contactForm.value
  // console.log("cnjnxmk",data)
  // verifyObject = { "res": data }
  

}

home(){

  this.router.navigate(['user-dashboard'])	  
}

passDetail(){

  this.router.navigate(['user-passport-details'])	  
}
h1(){

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
