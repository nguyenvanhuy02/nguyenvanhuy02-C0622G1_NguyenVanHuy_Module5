import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility-delete',
  templateUrl: './facility-delete.component.html',
  styleUrls: ['./facility-delete.component.css']
})
export class FacilityDeleteComponent implements OnInit {
  facilityId: number | undefined;
  facility: Facility | undefined;

  constructor(private _activatedRoute: ActivatedRoute,
              private _facilityService: FacilityService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) =>{
      this.facilityId = params.id;
    })
  }

  deleteFacility() {
    this._facilityService.remove(this.facilityId).subscribe(() =>{
      this._facilityService.setMess('Delete success !')
      this._router.navigateByUrl('/facility')
    })
  }
}
