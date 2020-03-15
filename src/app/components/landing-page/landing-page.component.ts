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

  apiState : boolean = false

  constructor(private dataService : AppServiceService) { }

  ngOnInit() {
    this.getUserDetailes()
  }



////////////////////////////////////////////////////////////////////////////////
//                                  API
////////////////////////////////////////////////////////////////////////////////
private getUserDetailes() {
  this.apiState = true
  this.dataService.getUserInfo({cookie : document.cookie}).subscribe(res => {
    this.apiState = false
    console.log(res)
  }, error => {
    this.apiState = false
    console.log(error)
  })
}






////////////////////////////////////////////////////////////////////////////////
//                                  HTML
////////////////////////////////////////////////////////////////////////////////


}
