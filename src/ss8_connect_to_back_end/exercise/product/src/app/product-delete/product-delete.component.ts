import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

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
    this._activatedRoute.params.subscribe((params: Params) => {
      this.productId = params.id;
    })
  }

  deleteProduct(): void {
    this._productService.delete(this.productId).subscribe(()=>{
      this._router.navigateByUrl('/product');
    })
  }
}
