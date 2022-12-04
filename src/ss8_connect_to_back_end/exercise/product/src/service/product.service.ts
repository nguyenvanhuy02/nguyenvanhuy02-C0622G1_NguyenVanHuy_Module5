import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) {
  }

  private _product: Product[] = []

  findAll(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(environment.api_url)
  }


  searchProduct(rfSearch: any): Observable<Product[]> {
    if (!(rfSearch.searchName.length) && !(rfSearch.category)) {
      return this._httpClient.get<Product[]>(
        environment.api_url
      );
    }
    return this._httpClient.get<Product[]>(
      environment.api_url +
      '?name_like=' + rfSearch.searchName +
      '&category.id_like=' + rfSearch.category);
  }

  save(product: Product): Observable<Product> {
    return this._httpClient.post<Product>(environment.api_url, product);
  }

  findProductEdit(id: number): Observable<Product> {
    return this._httpClient.get<Product>(environment.api_url + '/' + id);
  }

  delete(productId: number): Observable<void> {
    return this._httpClient.delete<void>(environment.api_url + '/' + productId);
  }

  editProduct(productEdit: Product): Observable<Product> {
    return this._httpClient.put<Product>(environment.api_url + '/' + productEdit.id, productEdit);
  }


}
