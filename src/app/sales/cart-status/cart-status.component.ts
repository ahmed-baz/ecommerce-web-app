import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent implements OnInit {
  theTotalPrice: number = 0;
  theTotalQuantity = 0;
  constructor(private theCartService: CartService) {}

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.theCartService.totalPrice.subscribe((data) => {
      this.theTotalPrice = data;
    });

    this.theCartService.totalQuantity.subscribe((data) => {
      this.theTotalQuantity = data;
    });
  }
}
