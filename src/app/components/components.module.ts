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
				 MatFormField, 
				 MatFormFieldModule, 
				 MatFormFieldControl,
				 MatInputModule,
				 MatDividerModule
				}                          from '@angular/material';
import { LandingPageComponent 
				} 												 from './landing-page/landing-page.component';
import { InitialPageComponent 
				} 												 from './initial-page/initial-page.component';

@NgModule({
	declarations: [	LoginSignupComponent, 
									LandingPageComponent, InitialPageComponent
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
