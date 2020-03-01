import {  Component, 
          OnInit 
        }                   from '@angular/core';
import {  FormBuilder, 
          Validators 
        }                   from '@angular/forms';
import { Router 
        }                   from '@angular/router';

@Component({
  selector    : 'app-login-signup',
  templateUrl : './login-signup.component.html',
  styleUrls   : ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  toggle  :  boolean = true

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

  constructor(private fb      : FormBuilder,
              private router  : Router) {
  }

  ngOnInit() {
  }
  

///////////////////////////////// CALL BACKS /////////////////////////////////////////  
  logInForm(event ) {
    this.toggle = true
  }
  
  signupForm(event) {
    this.toggle = false
  }  

  logInCB() {
    console.log(this.loginFormGroup.value, this.loginFormGroup.status)
    this.router.navigate(['/LandingPage'])
  }

  signUpCB() {
    console.log('resp')
  }
}
