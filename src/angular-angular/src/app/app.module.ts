import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateApplicationHackernewsComponent } from './ss4_angular_component_template/practice/create-application-hackernews/create-application-hackernews.component';
import {FormsModule} from "@angular/forms";
import { LikeComponent } from './ss4_angular_component_template/practice/like/like.component';
import { NavbarComponent } from './ss4_angular_component_template/practice/navbar/navbar.component';
import { FooterComponent } from './ss4_angular_component_template/practice/footer/footer.component';
import { AppNameCardComponent } from './ss5_components_interaction/practice/app-name-card/app-name-card.component';
import { RatingBarComponent } from './ss5_components_interaction/exercise/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './ss5_components_interaction/exercise/countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateApplicationHackernewsComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    AppNameCardComponent,
    RatingBarComponent,
    CountdownTimerComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
