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

  async logInAPI() {
    this.apiState = true
    const resp  = await this.dataService.logIn(this.loginFormGroup.value)
    this.apiState = false

    if (resp.status)  {
      localStorage.setItem('userInfo', resp.data)
      this.router.navigate(['/LandingPage'])
    } else if (resp.error == 'INVALID_LOGIN') {
      this.invLogIn = true
      setTimeout(()=> {
        this.invLogIn = false
      }, 2000)
    }
  }

  private async signUpAPI() {

    this.apiState = true
    const resp =  await this.dataService.signUp(this.signupFormFroup.value)
    this.apiState = false

    if (resp.status)  {
      this.signupStatus = true
        this.signupFormFroup.setValue({
          name      : null,
          userId    : null,
          password  : null        
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

  logIn() {
    this.logInAPI()
  }

  signUp()  {
    this.signUpAPI()
  }
}
