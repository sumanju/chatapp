import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { ImageProcessing } from 'src/utility/utility-image';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  @Input('profileData') profileInfo
  @Input('userProfileImage') userProfileImage
  @Input('timeLineImages')  timeLineImages

  apiState        : boolean             = false

  constructor(private router      : Router,
              private userService : AppServiceService) { 

  }

  ngOnInit() {
  }

////////////////////////////////////////////////////////////////////////////////
//                            PRIVATE
////////////////////////////////////////////////////////////////////////////////

  async setProfileImage(image : string) {
    this.userService.saveUserProfileImage({
      userInfo : this.profileInfo.user_id,
      base64   : image,
      status   : this.userProfileImage == undefined ? true : false
    }).subscribe(res => {
      if (res.status) {
        this.getUserProfileImage()
      }
    })
  }

  private getUserProfileImage() {
    this.apiState = true
    this.userService.getUserProfileImage({userId : localStorage.getItem('userInfo')}).subscribe(res => {
      this.apiState = false
      if (res.status) {
        this.userProfileImage = res.image.image
      }
    }, error => {
      this.apiState = false
    })
  }



////////////////////////////////////////////////////////////////////////////////
//                            HTML
////////////////////////////////////////////////////////////////////////////////

  async onUpload(event) {
    const imageBase64 = await ImageProcessing.getCompressedImage(event.target.files[0]) as string
    console.log('image-bro', imageBase64.length)
    this.setProfileImage(imageBase64)
  }

  logout() {
    localStorage.removeItem('userInfo')
    this.router.navigate(['/LoginSignupPage'])
  }

}
