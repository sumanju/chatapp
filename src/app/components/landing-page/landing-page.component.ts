import {  Component, 
          OnInit 
       }                   from '@angular/core';
import { AppServiceService 
       }                    from 'src/app/app-service.service';
import { Router }           from '@angular/router';
import { ImageProcessing }  from 'src/utility/utility-image';
import { promise } from 'protractor';

export enum ActiveStatus {
  HOME,
  CHAT,
  PEOPLE
}

interface ActiveState {
  home    : boolean,
  chat    : boolean,
  people  : boolean
}

interface ChatData {
  userId    : string,
  image     : string,
  name      : string
}

@Component({
  selector    : 'app-landing-page',
  templateUrl : './landing-page.component.html',
  styleUrls   : ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit { 

  activeStatus    : typeof ActiveStatus = ActiveStatus

  apiState        : boolean             = false
  userInfo        : Object                
  msgData         : any[]               = []
  userProfileImage: string
  activeHeader    : ActiveState    
  isShowProfile   : boolean             = false
  peopleInfo      : object[]            = []  
  chatData        : ChatData   
  timeLine        : Object[]            = [] 
  chatHistory     : object[]            = [] 
  timeLineImages  : object[]            = []

  constructor(private dataService : AppServiceService,
              private router      : Router) { }

  ngOnInit() {
    localStorage.removeItem('chatinfo')
    if (localStorage.getItem('userInfo') == undefined) {
      this.router.navigate(['/LoginSignupPage'])
    }
    this.activeHeader = {
      home    : true,
      chat    : false,
      people  : false
    }
    this.getAllUserDetails()
  }

////////////////////////////////////////////////////////////////////////////////
//                                  PRIVATE 
////////////////////////////////////////////////////////////////////////////////

  private async getAllUserDetails() {
    this.apiState = true

    const [userInfo, userProfileImage,  peopleInfo,  timeLine, chatHistory, timeLineImage ] = await Promise.all([ 
                                    this.dataService.getUserInfo({userInfo : localStorage.getItem('userInfo')}),
                                    this.dataService.getUserProfileImage({userId : localStorage.getItem('userInfo')}),
                                    this.dataService.getPeopleInfo({userId : localStorage.getItem('userInfo')}),  
                                    this.dataService.getTimeLineImage({userId : localStorage.getItem('userInfo')}),
                                    this.dataService.getChatHistory({userId : localStorage.getItem('userInfo')}),
                                    this.dataService.getProfileTimelineImage({userId  : localStorage.getItem('userInfo')})
                                  ])
    this.userInfo           = userInfo.userInfo
    this.userProfileImage   = userProfileImage.image.image
    this.peopleInfo         = peopleInfo.usersData
    this.timeLine           = timeLine.data
    this.chatHistory        = chatHistory.data
    this.timeLineImages     =timeLineImage.data

    this.apiState = false
  }

  private async setTimeLineImage(imageBase64) {
    this.apiState = true
    const resp =  await this.dataService.setTimeLineImage({userId : localStorage.getItem('userInfo'),
                                                           image  : imageBase64,
                                                           name   : this.userInfo['name']})
    if (resp.status) {
      alert('successfully upload')
    }
    this.apiState = false
  }

////////////////////////////////////////////////////////////////////////////////
//                                  HTML
////////////////////////////////////////////////////////////////////////////////

  selectPeople(index) {
    localStorage.setItem('chatinfo',JSON.stringify({
      userId : this.peopleInfo[index]['user_id'],
      name   : this.peopleInfo[index]['name'],
      image  :  this.peopleInfo[index]['image']
    }))
    this.router.navigate(['/ChatPage'])
  }

  selectChatHistory(index) {
    localStorage.setItem('chatinfo',JSON.stringify({
      userId : this.chatHistory[index]['userId'],
      name   : this.chatHistory[index]['name'],
      image  :  this.chatHistory[index]['image']
    }))
    this.router.navigate(['/ChatPage'])
  }

  activeNav(state) {
    if (state === ActiveStatus.HOME) {
      this.activeHeader = {
        home    : true,
        chat    : false,
        people  : false
      }
    } 
    if (state === ActiveStatus.CHAT) {
      this.activeHeader = {
        home    : false,
        chat    : true,
        people  : false
      }
    }
    if (state === ActiveStatus.PEOPLE) {
      this.activeHeader = {
        home    : false,
        chat    : false,
        people  : true
      }
    }
  }

  showProfile() {
    this.isShowProfile = true
  }

  async onUpload(event) {
    const imageBase64 = await ImageProcessing.getCompressedImage(event.target.files[0]) as string
    this.setTimeLineImage(imageBase64)
  }
}
