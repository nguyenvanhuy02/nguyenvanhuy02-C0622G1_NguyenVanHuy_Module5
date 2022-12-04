import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FacilityCreateComponent } from './facility-create/facility-create.component';
import { FacilityDeleteComponent } from './facility-delete/facility-delete.component';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityDeleteComponent,
    FacilityEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
