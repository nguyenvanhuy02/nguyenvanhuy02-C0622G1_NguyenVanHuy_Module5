import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {ListFacilityComponent} from './facility/list/list-facility.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {CreateHouseComponent} from './facility/create-house/create-house.component';
import {CreateRoomComponent} from './facility/create-room/create-room.component';
import {CreateVillaComponent} from './facility/create-villa/create-villa.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import {HttpClientModule} from '@angular/common/http';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    CreateHouseComponent,
    CreateRoomComponent,
    CreateVillaComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    CreateContractComponent,
    ListContractComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
