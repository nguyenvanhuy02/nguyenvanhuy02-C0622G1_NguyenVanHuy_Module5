import {Component, OnInit} from '@angular/core';
import {IFacility} from '../../../model/facility';
import {FacilityService} from '../../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: IFacility[] | undefined;

  // tslint:disable-next-line:variable-name
  constructor(private _facilityService: FacilityService,
              // tslint:disable-next-line:variable-name
              private _router: Router) {
    this._facilityService.findAll().subscribe(
      data => {
        this.facilityList = data;
      }, error => {
        console.log('lay danh sach that bai ');
      }, () => {
        console.log('ket thuc danh sach');
      }
    );
  }

  ngOnInit(): void {
  }

}
