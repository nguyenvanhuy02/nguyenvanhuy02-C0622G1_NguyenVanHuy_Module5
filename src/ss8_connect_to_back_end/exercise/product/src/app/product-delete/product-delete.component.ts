import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../../../angular-angular/src/service/product.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productId: number | undefined;
  product: Product | undefined;

  constructor(private _activatedRoute: ActivatedRoute,
              private _productService: ProductService,
              private _router: Router) {
  }

  ngOnInit(): void {

  }

}
