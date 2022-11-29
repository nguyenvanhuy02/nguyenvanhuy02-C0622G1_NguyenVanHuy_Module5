import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/category";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient: HttpClient) { }

  private _category: Category[] = []

  findAll(): Observable<Category[]>{
    return this._httpClient.get<Category[]>(
      environment.api_url_category
    )
  }
}
