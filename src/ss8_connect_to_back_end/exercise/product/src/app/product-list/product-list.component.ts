import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] | undefined;
  title = 'Angular Pagination Tutorial';

  p: number = 1;
  count: number = 5;

  constructor(private _productService: ProductService,
              private _router: Router) {
    this._productService.findAll().subscribe(
      data => {
        console.log(data)
        this.productList = data;
        console.log(this.productList[0].category.name)
      }, error => {
        console.log("lay danh sach that bai")
      }, () => {
        console.log("ket thuc lay danh sach")
      }
    )
  }

  ngOnInit(): void {
  }

}
