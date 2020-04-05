import {  Component, 
          OnInit 
       }                   from '@angular/core';
import { AppServiceService 
       }                    from 'src/app/app-service.service';
import { Router } from '@angular/router';

export enum ActiveStatus {
  HOME,
  CHAT,
  FRIENDS
}

interface ActiveState {
  home    : boolean,
  chat    : boolean,
  friends : boolean
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
  activeHeader    : ActiveState    
  isShowProfile   : boolean             = false  

  constructor(private dataService : AppServiceService,
              private router      : Router) { }

  ngOnInit() {
    if (localStorage.getItem('userInfo') == undefined) {
      this.router.navigate(['/LoginSignupPage'])
    }
    this.activeHeader = {
      home    : true,
      chat    : false,
      friends : false
    }
    this.getUserDetailes()
  }

////////////////////////////////////////////////////////////////////////////////
//                                  PRIVATE 
////////////////////////////////////////////////////////////////////////////////
  private getUserDetailes() {
    this.apiState = true
    console.log('func invoke')
    this.dataService.getUserInfo({userInfo : localStorage.getItem('userInfo')}).subscribe(res => {
      this.apiState = false
      this.userInfo = res.userInfo
      this.msgData  = res.msgInfo
      console.log(this.userInfo, this.msgData)
    }, error => {
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
        friends : false
      }
    } 
    if (state === ActiveStatus.CHAT) {
      this.activeHeader = {
        home    : false,
        chat    : true,
        friends : false
      }
    }
    if (state === ActiveStatus.FRIENDS) {
      this.activeHeader = {
        home    : false,
        chat    : false,
        friends : true
      }
    }
  }

  showProfile() {
    this.isShowProfile = true
    console.log(this.isShowProfile)
  }
  
}
