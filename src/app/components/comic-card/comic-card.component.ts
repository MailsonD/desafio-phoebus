import Comic from 'src/app/model/comic';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: [ './comic-card.component.css' ]
})
export class ComicCardComponent implements OnInit {

  @Input() comic: Comic;

  constructor() { }

  getPrice() {
    if (this.comic.prices && this.comic.prices.length > 0) {
      return this.comic.prices[ 0 ].price;
    }
    return '0,00';
  }

  getCoverPath() {

    return `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`;

  }

  ngOnInit(): void {
  }

}
