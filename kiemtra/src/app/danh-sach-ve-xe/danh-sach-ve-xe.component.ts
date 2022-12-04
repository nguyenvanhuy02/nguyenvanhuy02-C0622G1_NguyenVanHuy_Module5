import {Component, OnInit} from '@angular/core';
import {VeXe} from '../../model/ve-xe';
import {VeXeService} from '../../service/ve-xe.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-danh-sach-ve-xe',
  templateUrl: './danh-sach-ve-xe.component.html',
  styleUrls: ['./danh-sach-ve-xe.component.css']
})
export class DanhSachVeXeComponent implements OnInit {
  danhSachVeXe: VeXe[] | undefined;
  p: number = 1;
  count: number = 3;
  rfSearch: FormGroup;

  constructor(private _veXeService: VeXeService,
              private _router: Router,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this._veXeService.findAll().subscribe(
      data => {
        this.danhSachVeXe = data;
      }
    );
    this.searchDiemDen();
  }

  searchDiemDen() {
    this.rfSearch = this._formBuilder.group({
      searchDD: [''],
      searchDDi: ['']
    });
  }

  onSearch() {
    this._veXeService.searchDiemDen(this.rfSearch.value).subscribe(
      data => {
        this.danhSachVeXe = data;
      }
    );
  }
}
