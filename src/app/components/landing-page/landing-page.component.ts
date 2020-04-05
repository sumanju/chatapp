import {  Component, 
          OnInit 
       }                   from '@angular/core';
import { AppServiceService 
       }                    from 'src/app/app-service.service';

@Component({
  selector    : 'app-landing-page',
  templateUrl : './landing-page.component.html',
  styleUrls   : ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  apiState : boolean  = false
  userInfo : Object     
  msgData  : any[]    = []

  constructor(private dataService : AppServiceService) { }

  ngOnInit() {
    this.getUserDetailes()
  }

////////////////////////////////////////////////////////////////////////////////
//                                  API
////////////////////////////////////////////////////////////////////////////////
private getUserDetailes() {
  this.apiState = true
  this.dataService.getUserInfo({userInfo : localStorage.getItem('userInfo')}).subscribe(res => {
    this.apiState = false
    this.userInfo = res.userInfo
    this.msgData  = res.msgInfo
  }, error => {
    this.apiState = false
    console.log(error)
  })
}




////////////////////////////////////////////////////////////////////////////////
//                                  HTML
////////////////////////////////////////////////////////////////////////////////


}
