import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavbarComponent} from './ss4_angular_component_template/practice/navbar/navbar.component';
import {FooterComponent} from './ss4_angular_component_template/practice/footer/footer.component';
import {DictionaryComponent} from './ss7_angular_router/exercise/dictionary/dictionary.component';
import {DictionaryDetailComponent} from './ss7_angular_router/exercise/dictionary-detail/dictionary-detail.component';
import {ProductListComponent} from './ss7_angular_router/practice/product/product-list/product-list.component';
import {ProductCreateComponent} from './ss7_angular_router/practice/product/product-create/product-create.component';
import {ProductDeleteComponent} from './ss7_angular_router/practice/product/product-delete/product-delete.component';
import {ProductEditComponent} from './ss7_angular_router/practice/product/product-edit/product-edit.component';


const routes: Routes = [
  {path: 'product', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
