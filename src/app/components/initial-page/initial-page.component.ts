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
    if (screen.width < 800 && screen.height < 1000) {
      await this.networkStatus()      
      await this.clearLocalStorage()
    } else {
      alert('Not for WebView')
    }
  }
  
  networkStatus() {
    setTimeout(()=> {
      this.router.navigate(['./LoginSignupPage'])
    }, 1000)
  }

  clearLocalStorage() {
    localStorage.removeItem('userInfo')
  }
}
