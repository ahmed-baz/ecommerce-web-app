import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category.model';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  categoryList: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.findCategoryList()
  }

  findCategoryList() {
    this.categoryService.findCategoryList().subscribe((data) => {
      this.categoryList = data;
    });
  }
}
