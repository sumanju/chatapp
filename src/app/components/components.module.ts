import { NgModule 
        }                          from '@angular/core';
import { CommonModule 
        }                          from '@angular/common';
import { LoginSignupComponent 
        }                          from './login-signup/login-signup.component';
import { AppComponentRouting 
        }                          from './components-routing';
import { ReactiveFormsModule 
        }                          from '@angular/forms';
import { MatCardModule, 
				 MatFormFieldModule, 
				 MatInputModule,
				 MatDividerModule
				}                          	from '@angular/material';
import { LandingPageComponent 
				} 												 	from './landing-page/landing-page.component';
import { InitialPageComponent 
				} 												 	from './initial-page/initial-page.component';
import { ProfileInfoComponent } 		from './profile-info/profile-info.component';
import { ChatPageComponent } 				from './chat-page/chat-page.component';
import { DateFormatPipe } 					from '../pipes/date-format.pipe';

@NgModule({
	declarations: [	LoginSignupComponent, 
									LandingPageComponent, 
									InitialPageComponent, 
									ProfileInfoComponent, 
									ChatPageComponent,
									DateFormatPipe
								],
  imports			: [
    							CommonModule,
									MatCardModule,
									MatInputModule,
									MatDividerModule,
									MatFormFieldModule,
    							AppComponentRouting,
    							ReactiveFormsModule
  							]
})

export class ComponentsModule { }
