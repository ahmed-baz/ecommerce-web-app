import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../../services/common.service';
import { product, productPageResponse } from '../model/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private commonService: CommonService<product>,
    private _httpClient: HttpClient
  ) {}

  findProductById(id: number) {
    return this.commonService.findById(
      `${environment.product_api_url}/findProductById/${id}`
    );
  }

  findProductList() {
    return this.commonService.findList(
      `${environment.product_api_url}/findProductList`
    );
  }

  findProductListByCategory(id: number) {
    return this.commonService.findList(
      `${environment.product_api_url}/findProductList/category?id=${id}`
    );
  }

  public findProductPage(page: number, size: number) {
    return this._httpClient.get<productPageResponse>(
      `${environment.product_api_url}/findProductPage?page=${page}&size=${size}`
    );
  }

  public findProductPageByKeyword(keyword: string, page: number, size: number) {
    return this._httpClient.get<productPageResponse>(
      `${environment.product_api_url}/findProductPage/search?keyword=${keyword}&page=${page}&size=${size}`
    );
  }

  public findProductPageByCategory(id: number, page: number, size: number) {
    return this._httpClient.get<productPageResponse>(
      `${environment.product_api_url}/findProductPage/category?id=${id}&page=${page}&size=${size}`
    );
  }

  findProductListByKeyword(searchKeyword: string) {
    return this.commonService.findList(
      `${environment.product_api_url}/findProductList/search?keyword=${searchKeyword}`
    );
  }

  addProduct(product: product) {
    return this.commonService.add(
      product,
      `${environment.product_api_url}/addProduct`
    );
  }

  updateProduct(product: product) {
    return this.commonService.update(
      product,
      `${environment.product_api_url}/updateProduct`
    );
  }

  deleteProduct(id: number) {
    return this.commonService.delete(
      `${environment.product_api_url}/removeProduct/${id}`
    );
  }
}
