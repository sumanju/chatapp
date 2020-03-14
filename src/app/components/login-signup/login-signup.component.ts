import {  Component, 
          OnInit 
        }                   from '@angular/core';
import {  FormBuilder, 
          Validators 
        }                   from '@angular/forms';
import { Router 
        }                   from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector    : 'app-login-signup',
  templateUrl : './login-signup.component.html',
  styleUrls   : ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  apiState      : boolean = false

  toggle        : boolean = true
  signupStatus  : boolean = false

  loginFormGroup = this.fb.group({
    userId    : ['', Validators.required],
    password  : ['', Validators.required]
  })

  signupFormFroup = this.fb.group({
    name      : ['', Validators.required],
    userId    : ['', Validators.required],
    password  : ['', Validators.required],
    phoneNo   : ['', Validators.required],

  })

  constructor(private fb          : FormBuilder,
              private router      : Router,
              private dataService : AppServiceService) {
  }

  ngOnInit() {
  }

////////////////////////////////////////////////////////////////////////////////
//                          API
////////////////////////////////////////////////////////////////////////////////

  logIn() {
    this.dataService.logIn(this.loginFormGroup.value).subscribe(res=>{
      console.log(res)      
    },error=>{
      console.log(error)      
    })
    // this.router.navigate(['/LandingPage'])
  }

  signUp() {
    this.apiState = true
    this.dataService.signUp(this.signupFormFroup.value).subscribe(res => {
      this.apiState = false
      if (res.status) {
        this.signupStatus = true
        setTimeout(() => {
          this.signupStatus = false
        }, 3000)
      }
      console.log(res)
    },error=>{
      console.log(error)      
    })
  }
  
////////////////////////////////////////////////////////////////////////////////
//                          API
////////////////////////////////////////////////////////////////////////////////

  logInForm(event) {
    this.toggle = true
  }
  
  signupForm(event) {
    this.toggle = false
  }  

}
