import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/CartItem';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number;
  totalQuantity: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartItemDetails();
  }

  updateCartItemDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe((data) => {
      this.totalPrice = data;
    });

    this.cartService.totalQuantity.subscribe((data) => {
      this.totalQuantity = data;
    });

    this.cartService.computeCartTotals();
  }

  incrementCartItem(tempCartItem: CartItem) {
    this.cartService.addToCartItem(tempCartItem);
  }
  decrementCartItem(cartItem: CartItem) {
    this.cartService.decrementCartItem(cartItem);
  }
  removeFromCartItem(cartItem: CartItem) {
    this.cartService.removeFromCartItem(cartItem);
  }
  deflateCartItem() {
    this.cartService.deflateCartItem();
  }
  checkout() {
    
  }
}
