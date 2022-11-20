import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //defined base url first for the service
  baseUrl = "http://localhost:8083"
  // calling the service from the backend
  // we need http module

  //first inject the httpclinet in constructor and this service we will call in login component okk

  constructor(private http:HttpClient) { }

  //creating oner function
  generateToken(credentials:any){
    //this is the method (doLogin) used for getting toaken from backend service
    return this.http.post(`${this.baseUrl}/genToken`,credentials);
  }

  //for login
  loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }
  //check if user already logged in or not?
  isLoggedIn(){
  let token=localStorage.getItem("token");
    if(token==undefined||token===""||token==null){
      return false;
    }
    else{
      return true;
    } 
  }
  //for logout
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  //for getting the token
  getToken(){
    return localStorage.getItem("token");

  }
}
