import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../app/user'

import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  badgeCount: number;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }


  login(data) {
    return this.http.post('https://document-attestation-backend.herokuapp.com/studentlogin',data);
  }

  registration(user) {
    console.log(user);

    return this.http.post('https://document-attestation-backend.herokuapp.com/registration',user);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  forgotpass(user) {
    return this.http.post('https://document-attestation-backend.herokuapp.com/forgotPassword', user);
  }
  resetpass(password) {
    return this.http.post('https://document-attestation-backend.herokuapp.com/resetPassword', password);
  }
  emailotp(email_otp) {
    return this.http.post('https://document-attestation-backend.herokuapp.com/emailOtp', email_otp);
  }
  sendotp(contact)
  
    {
      return this.http.post('https://document-attestation-backend.herokuapp.com/sendOtp', {'contact':contact});
    }
    newappli(data){
      return this.http.post('https://document-attestation-backend.herokuapp.com/newApplication',data);
    }
    verifyotp(otp,request){
      return this.http.post('https://document-attestation-backend.herokuapp.com/verifyOtp',{'otp':otp,'request':request});
    }
    
    uploaddoc(data){
      return this.http.post('https://document-attestation-backend.herokuapp.com/verifyOtp',data)
    }
    userdashboard(data){
      return this.http.post('https://document-attestation-backend.herokuapp.com/verifyOtp',data)
    }
    personal(data){
      return this.http.post('https://document-attestation-backend.herokuapp.com/verifyOtp',data)
    }
    apiscountry(){
      return this.http.get('https://document-attestation-backend.herokuapp.com/countries')
    }
}
