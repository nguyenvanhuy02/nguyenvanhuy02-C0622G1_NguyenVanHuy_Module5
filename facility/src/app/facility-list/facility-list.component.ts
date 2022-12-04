import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {FacilityType} from '../../model/facility-type';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] | undefined;
  facilityTypeList: FacilityType[] | undefined;
  p: number = 1;
  count: number = 3;
  rfSearch: FormGroup;
  mess: string;

  constructor(private _facilityService: FacilityService,
              private _router: Router,
              private _formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this._facilityService.findAll().subscribe(
      data =>{
        this.facilityList = data;
      }
    )

    this._facilityService.findAllFacilityType().subscribe(
      data =>{
        this.facilityTypeList = data;
      }
    )
    this.searchForm();

    this.mess = this._facilityService.getMess();

  }
  searchForm(){
    this.rfSearch= this._formBuilder.group({
      searchName: [''],
      facilityType: ['']
    })
  }

  onSearch() {
     this._facilityService.search(this.rfSearch.value).subscribe(
       data => {
         this.facilityList = data;
       }
     )
  }
}
