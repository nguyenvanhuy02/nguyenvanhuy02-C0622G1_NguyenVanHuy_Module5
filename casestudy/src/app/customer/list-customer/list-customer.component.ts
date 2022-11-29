import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: ICustomer[] | undefined;

  constructor(private _customerService: CustomerService,
              private _router: Router) {
    this._customerService.findAll().subscribe(
      data => {
        this.customerList = data;
      }, error => {
        console.log('lay danh sach that bai');
      }, () => {
        console.log('ket thuc');
      }
    );
  }

  ngOnInit(): void {
  }

}
