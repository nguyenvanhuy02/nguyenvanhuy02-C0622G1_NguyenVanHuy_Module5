import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

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
      this.productId = param.id;
    })

    this.getEditProduct(this.productId);
  }

  getEditProduct(productId: number) {
    this._productService.findProductEdit(productId).subscribe(product => {
      this.rfProduct = this._formBuilder.group({
        id: [product.id],
        name: [product.name],
        price: [product.price],
        description: [product.description],
      })
    })
  }

  onEdit() {
    const productEdit = this.rfProduct.value;
    this._productService.editProduct(productEdit).subscribe(productEdit => {
      this._router.navigateByUrl('/product');
    });
  }
}
