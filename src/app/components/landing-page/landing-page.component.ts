import {  Component, 
          OnInit 
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
    this.getUserDetailes()
    this.getUserProfileImage()
    this.getPeopleInfo()
    this.getTimeLineImage()
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
      if (res.status && res.image) {
        this.userProfileImage = res.image.image
      }
      this.apiState = false
    }, error => {
      this.apiState = false
    })
  }

  private getPeopleInfo() {
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

  private getTimeLineImage() {
    this.apiState = true
    this.dataService.getTimeLineImage({userId : localStorage.getItem('userInfo')}).subscribe(res => {
      if (res.status) {
        this.timeLine = res.data
      }
      this.apiState = false
    })
  }

  private setTimeLineImage(imageBase64) {
    this.apiState = true
    this.dataService.setTimeLineImage({userId : localStorage.getItem('userInfo'),
                                       image  : imageBase64,
                                       name   : this.userInfo['name']}).subscribe(res => {
      if (res.status) {
        alert('successfully upload')
        this.apiState = false
      }
      this.apiState = false
    })
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
