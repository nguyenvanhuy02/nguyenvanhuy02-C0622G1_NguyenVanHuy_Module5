import {Component, OnInit} from '@angular/core';
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categoryList: Category[] | undefined;

  constructor(private _categoryService: CategoryService) {

  }
  ngOnInit(): void {
    this._categoryService.findAll().subscribe(
      data => {
        this.categoryList = data;
      }, error => {
        console.log("lay danh sach that bai")
      }, () => {
        console.log("ket thuc ")
      }
    )
  }

}
