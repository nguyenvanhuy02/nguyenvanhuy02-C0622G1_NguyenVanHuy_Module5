import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] | undefined;
  categoryList: Category[] | undefined;
  title = 'Angular Pagination Tutorial';

  p: number = 1;
  count: number = 5;

  rfProduct: FormGroup;

  constructor(private _productService: ProductService,
              private _categoryService: CategoryService,
              private _router: Router,
              private _formBuilder: FormBuilder) {
    this._productService.findAll().subscribe(
      data => {
        console.log(data);
        this.productList = data;
        console.log(this.productList[0].category.name);
      }, error => {
        console.log('lay danh sach that bai');
      }, () => {
        console.log('ket thuc lay danh sach');
      }
    );
  }

  ngOnInit(): void {
    this._categoryService.findAll().subscribe(
      data => {
        this.categoryList = data;
      }
    );
    this.searchForm();
  }

  searchForm() {
    this.rfProduct = this._formBuilder.group({
      searchName: [''],
      category: ['']
    });
  }

  onSearch() {
      this._productService.searchProduct(this.rfProduct.value).subscribe(
        data =>{
          this.productList = data;
        }
      )
  }
}
