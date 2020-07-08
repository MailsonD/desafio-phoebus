import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/model/cart-item';

@Component({
  selector: 'app-cart',
  template: `
    <app-cart-items [items]='cart'></app-cart-items>
  `
})
export class CartComponent implements OnInit {

  cart: CartItem[];


  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.cart = this.cartService.getAll();
  }


}
