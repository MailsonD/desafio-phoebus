import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import Comic from 'src/app/model/comic';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: [ './cart-items.component.css' ]
})
export class CartItemsComponent implements OnInit {


  @Input() items: CartItem[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

  getImgCover(item: Comic) {
    return `${item.thumbnail.path}.${item.thumbnail.extension}`;
  }

  getPrice(item: Comic) {
    if (item.prices && item.prices.length > 0) {
      return item.prices[ 0 ].price;
    }
    return '0,00';
  }

}
