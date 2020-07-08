import Comic from 'src/app/model/comic';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {

  comics: Comic[];

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
    this.comics.push(comic);
    this.$quantity.next(this.comics.length);
  }

  removeFromCard(comic: Comic) {
    const index = this.comics.findIndex(c => c.id === comic.id);
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
}
