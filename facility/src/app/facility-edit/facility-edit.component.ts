import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Facility} from '../../model/facility';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FacilityService} from '../../service/facility.service';
import {FacilityType} from '../../model/facility-type';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  rfFacility: FormGroup;
  facilityId: number | undefined;
  facility: Facility | undefined;
  facilityTypeList: FacilityType[] | undefined;

  constructor(private _formBuilder: FormBuilder,
              private _activateRoute: ActivatedRoute,
              private _facilityService: FacilityService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._facilityService.findAllFacilityType().subscribe(
      data => {
        this.facilityTypeList = data;
      }
    );
    this._activateRoute.params.subscribe((params: Params) => {
      this.facilityId = params.id;
    });
    this.getEditFacility(this.facilityId);

  }

  getEditFacility(facilityId: number) {
    this._facilityService.findFacilityEdit(facilityId).subscribe(facility => {
      this.facility = facility;
      this.rfFacility = this._formBuilder.group({
        id: [facility.id],
        name: [facility.name],
        area: [facility.area],
        facilityType: [facility.facilityType]
      });
    });
  }

  onEdit() {
    const facilityEdit = this.rfFacility.value;
    this._facilityService.editFacility(facilityEdit).subscribe(facilityEdit => {
      this._router.navigateByUrl('/facility');
    });
  }
}
