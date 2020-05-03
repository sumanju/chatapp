import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as io        from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private baseUrl = 'http://localhost:5000/';
  // private baseUrl = 'https://chatapp212.herokuapp.com/';
  private socket  : any

  constructor(private httpClient : HttpClient) { 
    this.socket = io.connect(this.baseUrl)
  }

  //socket

  listen(eventName : string) : Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data)
      })
    })
  }

  emit(eventName : string, data : any) {
    this.socket.emit(eventName, data)
  }
  
  //https

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

  getChatHistory(userId) : Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}getchathistory`, userId)
  }
}
