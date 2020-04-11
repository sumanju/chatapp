import {  Component, 
          OnInit 
        }                   from '@angular/core';
import {  FormBuilder, 
          Validators 
        }                   from '@angular/forms';
import { Router 
        }                   from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

enum Operation {
  HOME,
  LOGIN,
  SIGNUP
}

@Component({
  selector    : 'app-login-signup',
  templateUrl : './login-signup.component.html',
  styleUrls   : ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  STATE        : typeof Operation = Operation

  toggle        : Operation 
  apiState      : boolean   = false
  signupStatus  : boolean   = false
  invLogIn      : boolean   = false
  invSignup     : boolean   = false

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
    this.toggle = this.STATE.HOME
    if (localStorage.getItem('userInfo') != undefined)  {
      this.router.navigate(['/LandingPage'])
    }
  }

////////////////////////////////////////////////////////////////////////////////
//                          API
////////////////////////////////////////////////////////////////////////////////

  logIn() {
    this.apiState = true
    this.dataService.logIn(this.loginFormGroup.value).subscribe(res=>{
      this.apiState = false
      if (res.status) {
        localStorage.setItem('userInfo', res.data)
        this.router.navigate(['/LandingPage'])
      } else if (res.error == 'INVALID_LOGIN') {
        this.invLogIn = true
        setTimeout(()=> {
          this.invLogIn = false
        }, 2000)
      }
    },error=>{
      this.apiState = false
      console.log(error)      
    })
  }

  signUp() {
    this.apiState = true
    this.dataService.signUp(this.signupFormFroup.value).subscribe(res => {
      this.apiState = false
      if (res.status) {
        this.signupStatus = true
        this.signupFormFroup.setValue({
          name      : null,
          userId    : null,
          password  : null,
          phoneNo   : null
        })
        this.toggle = this.STATE.LOGIN
        setTimeout(() => {
          this.signupStatus = false
        }, 2000)
      } else {
        this.invSignup = true
        setTimeout(() => {
          this.invSignup = false
        }, 2000)
      }
    },error=>{
      this.apiState = false      
    })
  }
  
////////////////////////////////////////////////////////////////////////////////
//                          HTML
////////////////////////////////////////////////////////////////////////////////

  logInForm(event) {
    this.toggle = this.STATE.LOGIN
  }
  
  signupForm(event) {
    this.toggle = this.STATE.SIGNUP
  }  

}
