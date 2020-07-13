import {  Component, 
          OnInit, 
          HostListener
       }                   from '@angular/core';
import { AppServiceService 
       }                    from 'src/app/app-service.service';
import { Router }           from '@angular/router';
import { ImageProcessing }  from 'src/utility/utility-image';

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

  //scroll variable
  isScroll        : boolean             = true
  loadValue       : number              = 5

  //single click
  isClicked       : boolean             = false

  @HostListener("document:scroll")
  scrollEmit()  {
    if (this.activeHeader.home && !this.isShowProfile) {
      let ele = document.getElementById("home-body")
      if (ele.clientHeight - 1300 <= window.scrollY && this.isScroll) {
        this.isScroll = false
        this.loadMoreOnTimeLine()
      }
    }
  }

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
    this.getUserDetails()
  }

////////////////////////////////////////////////////////////////////////////////
//                                  PRIVATE 
////////////////////////////////////////////////////////////////////////////////

  private async getUserDetails() {
    this.apiState = true

    const [userInfo, userProfileImage,  peopleInfo,  timeLine, chatHistory, timeLineImage ] = await Promise.all([ 
                                    this.dataService.getUserInfo({userInfo : localStorage.getItem('userInfo')}),
                                    this.dataService.getUserProfileImage({userId : localStorage.getItem('userInfo')}),
                                    this.dataService.getPeopleInfo({userId : localStorage.getItem('userInfo')}),  
                                    this.dataService.getTimeLineImage({ loadValue :  this.loadValue, userId : localStorage.getItem('userInfo')}),
                                    this.dataService.getChatHistory({userId : localStorage.getItem('userInfo')}),
                                    this.dataService.getProfileTimelineImage({userId  : localStorage.getItem('userInfo')})
                                  ])
    this.userInfo           = userInfo.userInfo
    this.userProfileImage   = userProfileImage.image ? userProfileImage.image.image : undefined
    this.peopleInfo         = peopleInfo.usersData
    this.timeLine           = timeLine.data
    this.chatHistory        = chatHistory.data
    this.timeLineImages     = timeLineImage.data

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
    this.getUserDetails()
  }

  private async loadMoreOnTimeLine()  {
    this.loadValue  += 5
    const resp       = await this.dataService.getTimeLineImage({ loadValue :  this.loadValue,
                                                                 userId    :  localStorage.getItem('userInfo')})
    this.timeLine    = this.timeLine.concat((resp.data as Array<any>).slice(this.loadValue - 5, resp.data.length))  
    this.isScroll    = true
  }

  private async likeStatus(data, index)  {

    if (!this.isClicked)  {
      this.isClicked = true
      this.timeLine[index]['isLike'] = !this.timeLine[index]['isLike']
      await this.dataService.likeTimeLineImage({
        userId      : localStorage.getItem('userInfo'),
        uniqueId    : data['unique_id']
      })
      this.isClicked = false
    }

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
    window.scrollTo({
      top : 0
    })
  }

  showProfile() {
    this.isShowProfile = true
  }

  like(event, index)  {
    this.likeStatus(event, index)
  }

  async onUpload(event) {
    const imageBase64 = await ImageProcessing.getCompressedImage(event.target.files[0]) as string
    this.setTimeLineImage(imageBase64)
  }
}
