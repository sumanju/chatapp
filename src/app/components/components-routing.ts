import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InitialPageComponent } from './initial-page/initial-page.component';


const routes: Routes = [  
                          {
                            path      : '',
                            component : InitialPageComponent
                          },
                          { path      : 'LoginSignupPage', 
                            component : LoginSignupComponent
                          },
                          {
                            path      : 'LandingPage',
                            component : LandingPageComponent 
                          }
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class AppComponentRouting { }
