import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../../app-service.service';
import { ImageProcessing } from '../../../utility/utility-image';

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
    this.apiState = true
    const resp =  await this.userService.saveUserProfileImage({
                    userInfo : this.profileInfo.user_id,
                    base64   : image,
                    status   : this.userProfileImage == undefined ? true : false
                  })
    if  (resp.status) {
      this.getUserProfileImage()
    }
    this.apiState = false
  }

  private async getUserProfileImage() {
    this.apiState = true
    const resp  = await this.userService.getUserProfileImage({userId : localStorage.getItem('userInfo')})
    this.apiState = false
    if (resp.status)  {
      this.userProfileImage = resp.image.image
    }
  }



////////////////////////////////////////////////////////////////////////////////
//                            HTML
////////////////////////////////////////////////////////////////////////////////

  async onUpload(event) {
    const imageBase64 = await ImageProcessing.getCompressedImage(event.target.files[0]) as string
    this.setProfileImage(imageBase64)
  }

  logout() {
    localStorage.removeItem('userInfo')
    this.router.navigate(['/LoginSignupPage'])
  }

}
