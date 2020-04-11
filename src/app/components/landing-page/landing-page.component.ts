import {  Component, 
          OnInit 
       }                   from '@angular/core';
import { AppServiceService 
       }                    from 'src/app/app-service.service';
import { Router } from '@angular/router';
import { ImageProcessing } from 'src/utility/utility-image';

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

  constructor(private dataService : AppServiceService,
              private router      : Router) { }

  ngOnInit() {
    if (localStorage.getItem('userInfo') == undefined) {
      this.router.navigate(['/LoginSignupPage'])
    }
    this.activeHeader = {
      home    : true,
      chat    : false,
      people  : false
    }
    this.getUserDetailes()
    this.getUserProfileImage()
    this.getPeopleInfo()
  }

////////////////////////////////////////////////////////////////////////////////
//                                  PRIVATE 
////////////////////////////////////////////////////////////////////////////////
  private getUserDetailes() {
    this.apiState = true
    this.dataService.getUserInfo({userInfo : localStorage.getItem('userInfo')}).subscribe(res => {
      this.userInfo = res.userInfo
      this.apiState = false
    }, error => {
      this.apiState = false
    })
  }

  private getUserProfileImage() {
    this.apiState = true
    this.dataService.getUserProfileImage({userId : localStorage.getItem('userInfo')}).subscribe(res => {
      if (res.status) {
        this.userProfileImage = res.image.image
      }
      this.apiState = false
    }, error => {
      this.apiState = false
    })
  }

  getPeopleInfo() {
    this.apiState  = true
    this.dataService.getPeopleInfo({userId : localStorage.getItem('userInfo')}).subscribe(res => {
      if (res.status) {
        this.peopleInfo = res.usersData
      }
      console.log(this.peopleInfo)
    }, err => {
      this.apiState = false
    })
  }

////////////////////////////////////////////////////////////////////////////////
//                                  HTML
////////////////////////////////////////////////////////////////////////////////

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
  
}
