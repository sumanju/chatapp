import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  @Input('profileData') profileInfo

  constructor(private router    : Router) { }

  ngOnInit() {
    
  }


////////////////////////////////////////////////////////////////////////////////
//                            HTML
////////////////////////////////////////////////////////////////////////////////

  onUpload() {

  }

  logout() {
    localStorage.removeItem('userInfo')
    this.router.navigate(['/LoginSignupPage'])
  }

}
