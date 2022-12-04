import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../../model/facility-type';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rfFacility: FormGroup;
  facilityTypeList: FacilityType[] | undefined;
  facility: Facility;

  constructor(private _facilityBuilder: FormBuilder,
              private _facilityService: FacilityService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.rfFacility = this._facilityBuilder.group({
      id: [''],
      name: ['',[Validators.required]],
      area: [''],
      facilityType: ['']
    });
    this._facilityService.findAllFacilityType().subscribe(
      data =>{
        this.facilityTypeList = data;
      }
    )
  }

  onSubmit() {
    if (this.rfFacility.valid){
      this._facilityService.save(this.rfFacility.value).subscribe(
        data =>{
          this._facilityService.setMess('add new success!')
          this._router.navigateByUrl('/facility')
        }
      )
    }
  }
}
