import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../app/user'

import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = environment.apiURL

  badgeCount: number;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }


  login(data) {
    return this.http.post(`${this.apiURL}/studentlogin`,data);
  }

  registration(user) {
    console.log(user);

    return this.http.post(`${this.apiURL}/registration`,user);
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
    return this.http.post(`${this.apiURL}/forgotPassword`, user);
  }
  resetpass(password) {
    return this.http.post(`${this.apiURL}/resetPassword`, password);
  }
  emailotp(email_otp) {
    return this.http.post(`${this.apiURL}/emailOtp`, email_otp);
  }
  sendotp(contact)
  
    {
      return this.http.post(`${this.apiURL}/sendOtp`, {'contact':contact});
    }
    newappli(data){
      return this.http.post(`${this.apiURL}/newApplication`,data);
    }
    verifyotp(otp,request){
      return this.http.post(`${this.apiURL}/verifyOtp`,{'otp':otp,'request':request});
    }
    
    uploaddoc(data){
      return this.http.post(`${this.apiURL}/verifyOtp`,data)
    }
    userdashboard(data){
      return this.http.post(`${this.apiURL}/verifyOtp`,data)
    }
    personal(data){
      return this.http.post(`${this.apiURL}/verifyOtp`,data)
    }
    apiscountry(){
      return this.http.get(`${this.apiURL}/countries`)
    }
    apiscountrycode()
{
  return this.http.get(`${this.apiURL}/countryCode`)
}
apistate(country_id){
  let data = {country_id: country_id};
  return this.http.post(`${this.apiURL}/states`,data)
}
apicity(state_id){
  return this.http.post(`${this.apiURL}/cities`,{"state_id":state_id})
}
getUserProfile(_id){
  return this.http.post(`${this.apiURL}/userProfile`,{"_id":_id})
}
viewDetails(application_no){
  return this.http.post(`${this.apiURL}/requestDetail`,{"application_no":application_no});
}

}
