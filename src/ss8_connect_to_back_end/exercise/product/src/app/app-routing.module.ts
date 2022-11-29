import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductDeleteComponent} from "./product-delete/product-delete.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";


const routes: Routes = [
  {path: 'product',component: ProductListComponent},
  {path: 'product/create',component: ProductCreateComponent},
  {path: 'product/delete/:id',component: ProductDeleteComponent},
  {path: 'product/edit/:id',component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
