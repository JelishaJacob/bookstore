import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  baseurl:any="http://localhost:5000"

  constructor(private http:HttpClient) { }

  // api calls

  // adminlogin api
  adminLoginApi(name:any,psw:any){
    const body={name,psw}
    return this.http.post(`${this.baseurl}/admin-login`,body)
  }

  // userlogin
  userLoginApi(email:any,psw:any){
    const body={email,psw}
    return this.http.post(`${this.baseurl}/user-login`,body)
  }

  userRegApi(email:any,psw:any){
    const body={email,psw}
    return this.http.post(`${this.baseurl}/user-registration`,body)
  }
}
