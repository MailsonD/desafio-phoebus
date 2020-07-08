import { CartService } from './../../services/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  query = '';
  cartQuantity = 0;

  subscriptions: any = {};

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.subscriptions.cart = this.cartService.getQuantity().subscribe(quantity => {
      this.cartQuantity = quantity;
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.cart) {
      this.subscriptions.cart.unsubscribe();
    }
  }


  goToHome() {
    this.router.navigate([ 'home' ]);
  }

  goToCart() {
    this.router.navigate([ 'cart' ]);
  }

  handleSubmitSearch() {
    this.router.navigate([ 'comics' ], {
      queryParams: {
        query: this.query
      }
    });
  }

}
