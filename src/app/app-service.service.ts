import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  // private baseUrl = 'http://localhost:5000/';
  private baseUrl = 'https://chatapp212.herokuapp.com/';


  constructor(private httpClient : HttpClient) { }

  logIn(logInValues) : Observable<any> {    
    return this.httpClient.post<any>(`${this.baseUrl}login`, logInValues)
  }

  signUp(signUpvales) : Observable<any>  {
    return this.httpClient.post<any>(`${this.baseUrl}signup`, signUpvales)
  }

  getUserInfo(userinfo) : Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}getuserinfo`, userinfo)
  }

}
