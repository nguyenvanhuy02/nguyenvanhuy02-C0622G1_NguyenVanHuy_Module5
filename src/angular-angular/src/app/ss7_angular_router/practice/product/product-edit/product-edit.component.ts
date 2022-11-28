import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product } from 'src/model/product';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  rfProduct: FormGroup;
  productId: number | undefined;
  product: Product | undefined;

  constructor(private _formBuilder: FormBuilder,
              private _activatedRoute: ActivatedRoute,
              private _productService: ProductService,
              private _router: Router) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param: Params) => {
      this.productId = param['id'];
      this.product = this._productService.findById(this.productId);
      this.rfProduct = this._formBuilder.group({
        id:[this.product.id],
        name: [this.product.name],
        price: [this.product.price],
        description: [this.product.description]
      });
    })
  }

  onEdit() {
    if (this.rfProduct.valid) {
      this._productService.updateProduct(this.rfProduct.value);
      this._router.navigateByUrl('/product');
    }
  }
}
