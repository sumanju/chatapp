import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as io        from 'socket.io-client'
import { HttpsHandlerService } from 'src/network-utils/https-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private baseUrl = 'http://localhost:5000/';
  // private baseUrl = 'https://chatapp212.herokuapp.com/';
  private socket  : any

  constructor(private httpClient : HttpClient,
              private apiHandler : HttpsHandlerService) { 
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

  logIn(logInValues) : Promise<any> {  
    return this.apiHandler.requestAPI('login', logInValues)
  }

  signUp(signUpvales) : Promise<any>  {
    return this.apiHandler.requestAPI('signup', signUpvales)
  }

  getUserInfo(userinfo) : Promise<any> {
    return  this.apiHandler.requestAPI('getuserinfo', userinfo)
  }

  getUserProfileImage(userinfo) : Promise<any> {
    return  this.apiHandler.requestAPI('getProfileImage', userinfo)
  }

  getPeopleInfo(userId) : Promise<any> {
    return this.apiHandler.requestAPI('getpeoplelist', userId)
  }

  getChatList(userInfo) : Promise<any> {
    return  this.apiHandler.requestAPI('getchatlist', userInfo)
  }

  getTimeLineImage(userId)  : Promise<any> {
    return this.apiHandler.requestAPI('gettimelineimage', userId)
  }

  getChatHistory(userId) : Promise<any> {
    return this.apiHandler.requestAPI('getchathistory', userId)
  }

  getProfileTimelineImage(userId) : Promise<any> {
    return this.apiHandler.requestAPI('getProfileTimelineImage', userId)
  }

  sendMsg(userInfo) : Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}sendmsg`, userInfo)
  }

  setTimeLineImage(userImage) : Promise<any> {
    return this.apiHandler.requestAPI('settimelineimage', userImage)
  } 

  saveUserProfileImage(userImage) : Promise<any> {
    return this.apiHandler.requestAPI('profileImage', userImage)
  }
}
