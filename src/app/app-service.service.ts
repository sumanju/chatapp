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

  saveUserProfileImage(userImage) : Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}profileImage`,userImage)
  }

  getUserProfileImage(userinfo) : Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}getProfileImage`,userinfo)
  }

  getPeopleInfo(userId) : Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}getpeoplelist`, userId)
  }

  getChatList(userInfo) : Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}getchatlist`, userInfo)
  }

  sendMsg(userInfo) : Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}sendmsg`, userInfo)
  }

  setTimeLineImage(userImage) : Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}settimelineimage`, userImage)
  } 

  getTimeLineImage(userId)  : Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}gettimelineimage`, userId)
  }
}
