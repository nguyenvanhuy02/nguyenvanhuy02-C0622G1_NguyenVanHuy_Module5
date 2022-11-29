import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) { }

  private _product: Product[] = []

  findAll(): Observable<Product[]>{
    return this._httpClient.get<Product[]>(
      environment.api_url
    )
  }

  save(product: Product): Observable<Product>{
    return this._httpClient.post<Product>(environment.api_url,product);
  }

  findId(id: number): Observable<Product> {
    return this._httpClient.get<Product>(environment.api_url + '/' + id);
  }

  delete(productId: number): Observable<void>{
    return this._httpClient.delete<void>(environment.api_url + '/' + productId);
  }


}
