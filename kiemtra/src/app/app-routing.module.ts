import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DanhSachVeXeComponent} from './danh-sach-ve-xe/danh-sach-ve-xe.component';
import {ThemMoiVeXeComponent} from './them-moi-ve-xe/them-moi-ve-xe.component';


const routes: Routes = [
  {path: '', component: DanhSachVeXeComponent},
  {path: 'themmoi', component: ThemMoiVeXeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
