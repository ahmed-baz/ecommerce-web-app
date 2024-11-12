import { Component, OnInit } from '@angular/core';
import { product, productPageResponse } from '../model/product.model';
import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { data } from 'jquery';
import { CartService } from '../service/cart.service';
import { CartItem } from '../model/CartItem';

@Component({
  selector: 'app-product',
  templateUrl: './product-list-grid.component.html',
  //templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productList: product[] = [];
  _productPageResponse: productPageResponse = new productPageResponse();

  hasCategoryId: boolean;
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;

  hasKeyword: boolean;
  currentKeyword: string;
  previousKeyword: string;

  // properties of product page
  thePageNumber: number = 1;
  thepageSize: number = 8;
  theTotalElements: number = 0;

  alreadyExistsInCart: boolean = false;

  constructor(
    private productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.findProductList();
    });
  }

  findProductList() {
    this.hasCategoryId = this._activatedRoute.snapshot.paramMap.has('id');
    this.hasKeyword = this._activatedRoute.snapshot.paramMap.has('keyword');

    if (this.hasCategoryId) {
      this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get(
        'id'
      );

      if (this.previousCategoryId != this.currentCategoryId) {
        this.thePageNumber = 1;
      }
      this.previousCategoryId = this.currentCategoryId;
      this.productService
        .findProductPageByCategory(
          this.currentCategoryId,
          this.thePageNumber - 1,
          this.thepageSize
        )
        .subscribe((data) => {
          this._productPageResponse = data;
          this.processResult(this._productPageResponse);
        });
    } else if (this.hasKeyword) {
      this.currentKeyword = this._activatedRoute.snapshot.paramMap.get(
        'keyword'
      );
      if (this.previousKeyword != this.currentKeyword) {
        this.thePageNumber = 1;
      }
      this.previousKeyword = this.currentKeyword;
      this.productService
        .findProductPageByKeyword(
          this.currentKeyword,
          this.thePageNumber - 1,
          this.thepageSize
        )
        .subscribe(
          (data) => {
            this._productPageResponse = data;
            this.processResult(this._productPageResponse);
          },
          (error) => {
            console.log('ERROR');
          },
          () => {
            /*
            if (this.productList.length == 0) {
              this.showFlash_warning();
            }
            */
          }
        );
    } else {
      this.productService
        .findProductPage(this.thePageNumber - 1, this.thepageSize)
        .subscribe(
          (data) => {
            this._productPageResponse = data;
            this.processResult(this._productPageResponse);
          },
          (error) => {},
          () => {}
        );
    }
  }

  processResult(pageResponse: productPageResponse) {
    this.productList = pageResponse.content;
    this.thePageNumber = pageResponse.number + 1;
    this.thepageSize = pageResponse.size;
    this.theTotalElements = pageResponse.totalElements;
  }

  updatePageSize(pageSize: number) {
    this.thepageSize = pageSize;
    this.thePageNumber = 1;
    this.findProductList();
  }

  addToCart(product: product) {
    let theCartItem: CartItem = new CartItem(product);
    this.cartService.addToCartItem(theCartItem);
    this.checkIfExistsInCart(product.id);
  }

  removeFromCart(product: product) {
    let theCartItem: CartItem = new CartItem(product);
    this.cartService.decrementCartItem(theCartItem);
  }

  checkIfExistsInCart(id: number) {
    this.alreadyExistsInCart = this.cartService.alreadyExistsInCart(id);
  }

  showFlash_warning() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('No Data Found', {
      cssClass: 'alert-danger',
      timeout: 5000,
    });
  }
}
