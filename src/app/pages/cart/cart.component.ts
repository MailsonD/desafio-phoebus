import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <app-cart-items></app-cart-items>
  `
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
