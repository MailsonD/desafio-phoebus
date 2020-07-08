import Comic from 'src/app/model/comic';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: [ './comic-card.component.css' ]
})
export class ComicCardComponent implements OnInit {

  DEFAULT_COVER_PATH = '../../../assets/img/not-found.png';

  @Input() comic: Comic;

  constructor() { }

  getPrice() {
    if (this.comic.prices && this.comic.prices.length > 0) {
      return this.comic.prices[ 0 ].price;
    }
    return '0,00';
  }

  getCoverPath() {
    if (this.comic.thumbnail && !this.comic.thumbnail.path.search('image_not_available')) {
      return `${this.comic.thumbnail.path}/portrait_incredible.${this.comic.thumbnail.extension}`;
    } else {
      return this.DEFAULT_COVER_PATH;
    }
  }

  ngOnInit(): void {
  }

}
