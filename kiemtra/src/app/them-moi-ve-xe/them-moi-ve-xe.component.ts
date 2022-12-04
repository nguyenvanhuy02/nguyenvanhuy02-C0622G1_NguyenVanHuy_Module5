import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VeXe} from '../../model/ve-xe';
import {NhaXe} from '../../model/nha-xe';
import {VeXeService} from '../../service/ve-xe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-them-moi-ve-xe',
  templateUrl: './them-moi-ve-xe.component.html',
  styleUrls: ['./them-moi-ve-xe.component.css']
})
export class ThemMoiVeXeComponent implements OnInit {
  rfVeXe: FormGroup;
  danhSachNhaXe: NhaXe[] | undefined;
  veXe: VeXe;

  constructor(private _veXeBuilder: FormBuilder,
              private _veXeService: VeXeService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.rfVeXe = this._veXeBuilder.group({
      id: [''],
      diemDi: ['',[Validators.required]],
      diemDen: ['',[Validators.required]],
      ngayKhoiHanh: ['',[Validators.required]],
      gioKhoiHanh: ['',[Validators.required]],
      giaVe: ['',[Validators.required]],
      soLuong: ['',[Validators.required]],
      nhaXe: ['']
    });
    this._veXeService.findAllNhaXe().subscribe(
      data => {
        this.danhSachNhaXe = data;
      }
    );
  }

  onSubmit() {
    if (this.rfVeXe.valid) {
      this._veXeService.save(this.rfVeXe.value).subscribe(
        data => {
          this._router.navigateByUrl('');
        }
      );
    }
  }
}
