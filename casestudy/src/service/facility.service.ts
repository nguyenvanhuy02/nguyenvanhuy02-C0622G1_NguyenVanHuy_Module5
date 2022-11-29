import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IFacility} from '../model/facility';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpCline: HttpClient) {
  }

  // tslint:disable-next-line:variable-name
  private _facility: IFacility[] = [];

  findAll(): Observable<IFacility[]> {
    return this._httpCline.get<IFacility[]>(environment.api_url);
  }
}
