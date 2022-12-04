import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DanhSachVeXeComponent } from './danh-sach-ve-xe/danh-sach-ve-xe.component';
import { ThemMoiVeXeComponent } from './them-moi-ve-xe/them-moi-ve-xe.component';

@NgModule({
  declarations: [
    AppComponent,
    DanhSachVeXeComponent,
    ThemMoiVeXeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
