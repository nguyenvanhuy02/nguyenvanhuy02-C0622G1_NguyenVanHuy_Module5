import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListFacilityComponent} from './facility/list/list-facility.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'facility', component: ListFacilityComponent},
  {path: 'customer', component: ListCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
