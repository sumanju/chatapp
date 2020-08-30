import { Component, 
         OnInit, 
         HostListener,
       }                  from '@angular/core'

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'ChatApp'
  innerWidth: any

  ngOnInit() {
      this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth
  }
}
