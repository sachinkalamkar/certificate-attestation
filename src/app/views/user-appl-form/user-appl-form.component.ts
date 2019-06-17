
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
public message: string;
 public serverData:any;
 verifyStatus: string;

preview(files) {
  if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/.(png|jpeg)$/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]);
  reader.onload = (_event) => {
    this.imgURL = reader.result;
  }
}
  constructor(private formBuilder: FormBuilder, private userservice:UserService,private router:Router,private route:ActivatedRoute, private http: HttpClient) { }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile)
  }
  
  onUpload() {

const fd = new FormData();
  
  fd.append('image', this.selectedFile, this.selectedFile.name);
    

this.http.post('http://127.0.0.1:3000/forgotPassword',fd).subscribe(
  data=>{

  }
);
      

}
  ngOnInit() {
    this.contactForm = this.formBuilder.group ({
      applicant_type : ['',Validators.required],
        full_name : ['',Validators.required],
        sex : ['',Validators.required],
     
        nationality : ['',Validators.required],
      
        date_of_birth :['',Validators.required],
       
        father_name : ['',Validators.required],
      
        mother_name : ['',Validators.required]
     
    
  });
      
  
}
get f() { return this.contactForm.controls; }
passportDetails(){
var data;
  var verifyObject
   this.submitted=true
   
  if(this.contactForm.invalid){
    return
  }
  
  console.log("policy======>",this.contactForm.value);
  
  data= this.contactForm.value
  console.log("cnjnxmk",data)
  verifyObject = { "res": data }
  
  localStorage.setItem(this.app_form_data,verifyObject.res);

 var response=localStorage.getItem(this.app_form_data)

		this.router.navigate(['user-passport-details'],{ queryParams :{"obj":JSON.stringify(verifyObject.res),si:true}});
}
userdash(){

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
