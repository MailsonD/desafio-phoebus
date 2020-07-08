import Comic from 'src/app/model/comic';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: [ './comic-card.component.css' ]
})
export class ComicCardComponent {

  @Input() comic: Comic;

  constructor(private router: Router) { }

  getPrice() {
    if (this.comic.prices && this.comic.prices.length > 0) {
      return this.comic.prices[ 0 ].price;
    }
    return '0,00';
  }

  getCoverPath() {

    return `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`;

  }

  goToDeatil() {
    this.router.navigate([ `comics/${this.comic.id}/detail` ]);
  }

}
