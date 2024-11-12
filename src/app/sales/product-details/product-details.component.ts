import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../model/CartItem';
import { product } from '../model/product.model';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  hasId: boolean;
  notFound: boolean = false;
  productId: number = 0;
  product: product = new product();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.findProductById();
  }

  findProductById() {
    this.hasId = this._activatedRoute.snapshot.paramMap.has('id');
    this.productId = +this._activatedRoute.snapshot.paramMap.get('id');

    if (this.hasId) {
      this.productService.findProductById(this.productId).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          this.notFound = true;
        }
      );
    }
  }

  addTocart(product: product) {
    let theCartItem: CartItem = new CartItem(product);
    this.cartService.addToCartItem(theCartItem);
  }
}
