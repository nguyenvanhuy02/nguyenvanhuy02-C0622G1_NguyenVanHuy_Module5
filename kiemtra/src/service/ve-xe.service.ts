import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VeXe} from '../model/ve-xe';
import {environment} from '../environments/environment';
import {NhaXe} from '../model/nha-xe';

@Injectable({
  providedIn: 'root'
})
export class VeXeService {

  constructor(private _httpClient: HttpClient) {
  }

  findAll(): Observable<VeXe[]> {
    return this._httpClient.get<VeXe[]>(environment.api_url);
  }

  findAllNhaXe(): Observable<NhaXe[]> {
    return this._httpClient.get<NhaXe[]>(environment.api_url_nha_xe);
  }

  save(veXe: VeXe): Observable<VeXe> {
    return this._httpClient.post<VeXe>(environment.api_url, veXe);
  }

  searchDiemDen(rfSearch: any): Observable<VeXe[]> {
    if (!(rfSearch.searchDD.length) && !(rfSearch.searchDDi.length)) {
      return this._httpClient.get<VeXe[]>(environment.api_url);
    }
    return this._httpClient.get<VeXe[]>(environment.api_url +
      '?diemDen_like=' + rfSearch.searchDD +
      '&diemDi_like=' + rfSearch.searchDDi);
  }
}
