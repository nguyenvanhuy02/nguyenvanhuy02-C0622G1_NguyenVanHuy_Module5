import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LikeComponent } from './ss4_angular_component_template/practice/like/like.component';
import { NavbarComponent } from './ss4_angular_component_template/practice/navbar/navbar.component';
import { FooterComponent } from './ss4_angular_component_template/practice/footer/footer.component';
import { AppNameCardComponent } from './ss5_components_interaction/practice/app-name-card/app-name-card.component';
import { RatingBarComponent } from './ss5_components_interaction/exercise/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './ss5_components_interaction/exercise/countdown-timer/countdown-timer.component';
import { Demoss6Component } from './ss5_components_interaction/demo/demoss6/demoss6.component';
import { Demos6Component } from './ss6_angular_form/demo/demos6/demos6.component';
import { FormRegisterComponent } from './ss6_angular_form/exercise/form-register/form-register.component';
import { FormLoginComponent } from './ss6_angular_form/exercise/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    AppNameCardComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    Demoss6Component,
    Demos6Component,
    FormRegisterComponent,
    FormLoginComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
