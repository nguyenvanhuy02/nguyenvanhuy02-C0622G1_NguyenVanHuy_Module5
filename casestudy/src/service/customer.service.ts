import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICustomer} from '../model/customer';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _httpClient: HttpClient) { }

  private _customer: ICustomer[] = []

  findAll(): Observable<ICustomer[]>{
    return this._httpClient.get<ICustomer[]>(
      environment.api_url_customer
    )
  }
}
