import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] | undefined;

  constructor(private _productService: ProductService,
              private _router: Router) {
    this._productService.findAll().subscribe(
      data => {
        this.productList = data;
      }, error => {
        console.log("lay danh sach that bai")
      }, () =>{
        console.log("ket thuc lay danh sach")
      }
    )
  }

  ngOnInit(): void {
  }

}
