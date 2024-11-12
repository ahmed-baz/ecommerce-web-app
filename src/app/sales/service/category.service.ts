import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../../services/common.service';
import { Category } from '../model/Category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private commonService: CommonService<Category>
    ) {}

  findCategoryById(id: number) {
    return this.commonService.findById(
      `${environment.product_api_url}/findCategoryById/${id}`
    );
  }

  findCategoryList() {
    return this.commonService.findList(
      `${environment.product_api_url}/findCategoryList`
    );
  }

  addCategory(category: Category) {
    return this.commonService.add(
      category,
      `${environment.product_api_url}/addCategory`
    );
  }

  updateCategory(category: Category) {
    return this.commonService.update(
      category,
      `${environment.product_api_url}/updateCategory`
    );
  }

  deleteCategory(id: number) {
    return this.commonService.delete(
      `${environment.product_api_url}/removeCategory/${id}`
    );
  }
}
