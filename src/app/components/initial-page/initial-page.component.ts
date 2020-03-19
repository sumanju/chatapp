import {  Component, 
          OnInit 
        }                 from '@angular/core';
import {  Router 
        }                 from '@angular/router';

@Component({
  selector    : 'app-initial-page',
  templateUrl : './initial-page.component.html',
  styleUrls   : ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  constructor(private router : Router) { }

  async ngOnInit() {
    await this.isHttpsUrl()
    await this.networkStatus()
  }

  isHttpsUrl() {
    if (document.documentURI.slice(0, 5) !== 'https')
      window.location.replace('https://chatapp212.herokuapp.com')
  }

  networkStatus() {
    setTimeout(()=> {
      this.router.navigate(['./LoginSignupPage'])
    }, 1000)
  }
}
