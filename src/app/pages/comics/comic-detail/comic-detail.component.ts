import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import Comic from 'src/app/model/comic';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: [ './comic-detail.component.css' ]
})
export class ComicDetailComponent implements OnInit, OnDestroy {

  DEFAULT_IMG_PATH = '../../../../assets/img/not-found.png';

  comicId: number;

  comic: Comic;

  subscriptions: any = {};

  constructor(private comicsService: ComicsService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.subscriptions.comic = this.route.params.pipe(mergeMap(res => {
      this.comicId = res.id;
      return this.comicsService.findComicById(String(this.comicId));
    })
    ).subscribe(comicDTO => {
      if (!comicDTO.results || comicDTO.results.length === 0) {
        this.router.navigate([ 'home' ]);
      }
      this.comic = comicDTO.results[ 0 ];
    });
  }

  getCoverImg() {
    if (this.comic.images && this.comic.images.length > 0) {
      const img = this.comic.images[ 0 ];
      return `${img.path}.${img.extension}`;
    }
    return this.DEFAULT_IMG_PATH;

  }

  getPrice() {
    if (this.comic.prices && this.comic.prices.length > 0) {
      return this.comic.prices[ 0 ].price;
    }
    return '0,00';
  }

  ngOnDestroy(): void {
    if (this.subscriptions.comic) {
      this.subscriptions.comic.unsubscribe();
    }
  }

}
