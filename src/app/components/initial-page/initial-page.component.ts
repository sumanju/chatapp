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

  ngOnInit() {
    this.networkStatus()
  }

  networkStatus() {
    setTimeout(()=> {
      this.router.navigate(['./LoginSignupPage'])
    }, 1000)
  }
}
