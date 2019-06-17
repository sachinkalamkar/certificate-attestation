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


  login(authCredentials) {
    return this.http.post('http://document-attestation-backend.herokuapp.com/studentlogin', authCredentials, this.noAuthHeader);
  }

  registration(user) {
    console.log(user);

    return this.http.post('http://127.0.0.1:3000/registration',{'user':user});
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
    return this.http.post('http://127.0.0.1:3000/forgotPassword', user);
  }
  resetpass(password) {
    return this.http.post('http://127.0.0.1:3000/resetPassword', password);
  }
  sendotp(contact)
  
    {
      return this.http.post('http://127.0.0.1:3000/sendOtp', {'contact':contact});
    }
    verifyotp(otp,request){
      return this.http.post('http://127.0.0.1:3000/verifyOtp',{'otp':otp,'request':request});
    }
    
    uploaddoc(data){
      return this.http.post('http://127.0.0.1:3000/verifyOtp',data)
    }
    userdashboard(data){
      return this.http.post('http://127.0.0.1:3000/verifyOtp',data)
    }
    personal(data){
      return this.http.post('http://127.0.0.1:3000/verifyOtp',data)
    }
}
