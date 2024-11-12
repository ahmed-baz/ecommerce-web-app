import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../model/CartItem';
import { product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  constructor() {}

  addToCartItem(theCartItem: CartItem) {
    //check if we already have the item in the cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItems.length > 0) {
      //find the item in the cart based on item id

      /*
      for (let tempCartItem of this.cartItems) {
        if (tempCartItem.id === theCartItem.id) {
          existingCartItem = tempCartItem;
          break;
        }
      }
      */

      existingCartItem = this.cartItems.find(
        (tempCartItem) => tempCartItem.id === theCartItem.id
      );

      //check if we found it
      alreadyExistsInCart = existingCartItem != undefined;
    }

    if (alreadyExistsInCart) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();
  }
  removeFromCartItem(theCartItem: CartItem) {
    const itemIndex = this.cartItems.findIndex(
      (tempCartItem) => tempCartItem.id == theCartItem.id
    );

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }
  decrementCartItem(theCartItem: CartItem) {
    //check if we already have the item in the cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItems.length > 0) {
      existingCartItem = this.cartItems.find(
        (tempCartItem) => tempCartItem.id === theCartItem.id
      );

      //check if we found it
      alreadyExistsInCart = existingCartItem != undefined;
    }

    if (alreadyExistsInCart) {
      existingCartItem.quantity--;
      if (existingCartItem.quantity === 0) {
        this.removeFromCartItem(existingCartItem);
      } else {
        this.computeCartTotals();
      }
    }

    this.computeCartTotals();
  }

  deflateCartItem() {
    this.cartItems.splice(0, this.cartItems.length);
    this.computeCartTotals();
  }

  alreadyExistsInCart(id: number): boolean {
    let existingCartItem: CartItem = undefined;
    existingCartItem = this.cartItems.find(
      (tempCartItem) => tempCartItem.id === id
    );
    return existingCartItem != undefined;
  }

  computeCartTotals() {
    let theTotalPriceValue: number = 0;
    let theTotalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      theTotalPriceValue +=
        currentCartItem.quantity * currentCartItem.unitPrice;
      theTotalQuantityValue += currentCartItem.quantity;
    }

    //publish the new value ... all subscribers will receive the new data
    this.totalPrice.next(theTotalPriceValue);
    this.totalQuantity.next(theTotalQuantityValue);

    this.logCartData(theTotalPriceValue, theTotalQuantityValue);
  }
  logCartData(totalPrice: number, totalQuantity: number) {
    console.log('Content of Cart Item');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(
        `name = ${tempCartItem.name}, quantity = ${tempCartItem.quantity}, price = ${tempCartItem.unitPrice}, subTotalPrice = ${subTotalPrice} `
      );

      console.log(
        `totalPrice = ${totalPrice.toFixed(
          2
        )}, totalQuantity = ${totalQuantity}`
      );

      console.log('---------');
    }
  }
}
