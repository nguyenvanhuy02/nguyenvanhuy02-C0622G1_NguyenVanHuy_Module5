import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  rfProduct: FormGroup;
  categoryList: Category[] | undefined;

  constructor(private _formBuilder: FormBuilder,
              private _productService: ProductService,
              private _categoryService: CategoryService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this.rfProduct = this._formBuilder.group({
      id: [''],
      name: [''],
      price: [''],
      description: [''],
      category: []
    });
    this._categoryService.findAll().subscribe(
      data => {
        this.categoryList = data;
      }
    );
  }


  onSubmit() {
    if (this.rfProduct.valid) {
      this._productService.save(this.rfProduct.value).subscribe(
        date => {
          this._router.navigateByUrl('/product');
        }
      );
    }
  }
}
