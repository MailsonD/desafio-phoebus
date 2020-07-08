import { CartItem } from './../model/cart-item';
import Comic from 'src/app/model/comic';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {

  comics: CartItem[];

  $quantity = new Subject<number>();

  constructor() {
    this.comics = [];
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.comics = JSON.parse(storedCart);
    }
  }


  ngOnDestroy(): void {
    localStorage.setItem('cart', JSON.stringify(this.comics));
  }

  addToCart(comic: Comic) {
    if (this.alredyExists(comic)) {
      this.addItem(comic);
    } else {
      this.comics.push(new CartItem(comic, 1));
      this.$quantity.next(this.comics.length);
    }
  }

  removeFromCart(comic: Comic) {
    const index = this.comics.findIndex(c => c.comic.id === comic.id);
    if (index) {
      this.comics.splice(index, 1);
      this.$quantity.next(this.comics.length);
    }
  }

  getAll() {
    return this.comics;
  }


  getQuantity() {
    return this.$quantity.asObservable();
  }


  addItem(comic) {
    const index = this.comics.findIndex(c => c.comic.id === comic.id);
    const newItem = this.comics[ index ];
    newItem.quantity = newItem.quantity + 1;
    this.comics[ index ] = newItem;
  }

  removeItem(comic) {
    const index = this.comics.findIndex(c => c.comic.id === comic.id);
    const removedItem = this.comics[ index ];
    if (removedItem.quantity === 1) {
      this.removeFromCart(comic);
    } else {
      removedItem.quantity = removedItem.quantity - 1;
      this.comics[ index ] = removedItem;
    }
  }

  private alredyExists(comic) {
    return this.comics.findIndex(c => c.comic.id === comic.id) !== - 1;
  }
}
