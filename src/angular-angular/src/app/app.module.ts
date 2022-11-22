import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateApplicationHackernewsComponent } from './ss4_angular_component_template/practice/create-application-hackernews/create-application-hackernews.component';
import {FormsModule} from "@angular/forms";
import { LikeComponent } from './ss4_angular_component_template/practice/like/like.component';
import { NavbarComponent } from './ss4_angular_component_template/practice/navbar/navbar.component';
import { FooterComponent } from './ss4_angular_component_template/practice/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateApplicationHackernewsComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
