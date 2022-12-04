import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Facility} from '../model/facility';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {FacilityType} from '../model/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private _mess: string;

  constructor(private _httpClient: HttpClient) {
  }

  // private _facility: Facility[] = [];

  findAll(): Observable<Facility[]> {
    return this._httpClient.get<Facility[]>(
      environment.api_url
    );
  }

  findAllFacilityType(): Observable<FacilityType[]> {
    return this._httpClient.get<FacilityType[]>(
      environment.api_url_facilityType
    );
  }

  search(rfSearch: any): Observable<Facility[]> {
    if (!(rfSearch.searchName.length) && !(rfSearch.facilityType)) {
      return this._httpClient.get<Facility[]>(
        environment.api_url
      );
    }
    return this._httpClient.get<Facility[]>(
      environment.api_url +
      '?name_like=' + rfSearch.searchName +
      '&facilityType.id_like=' + rfSearch.facilityType);
  }


  getMess(): string {
    return this._mess;
  }

  setMess(mess: string) {
    this._mess = mess;
  }

  save(facility: Facility): Observable<Facility> {
    return this._httpClient.post<Facility>(environment.api_url, facility);
  }

  remove(facilityId: number): Observable<void> {
    return this._httpClient.delete<void>(environment.api_url + '/' + facilityId)
  }

  findFacilityEdit(id : number): Observable<Facility>{
    return this._httpClient.get<Facility>(environment.api_url + '/' + id);
  }

  editFacility(facilityEdit: Facility): Observable<Facility>{
    return this._httpClient.put<Facility>(environment.api_url + '/' + facilityEdit.id,facilityEdit)
  }

}
