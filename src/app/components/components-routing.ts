import { NgModule }             from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginSignupComponent } from './login-signup/login-signup.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { InitialPageComponent } from './initial-page/initial-page.component'
import { ProfileInfoComponent } from './profile-info/profile-info.component'
import { ChatPageComponent }    from './chat-page/chat-page.component'


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
                          },
                          {
                            path      : 'ProfileInfo',
                            component : ProfileInfoComponent
                          },
                          {
                            path      : 'ChatPage',
                            component : ChatPageComponent
                          }
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class AppComponentRouting { }
