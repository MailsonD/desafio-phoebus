import Comic from 'src/app/model/comic';
import { ComicsService } from './../../services/comics.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-initial-comics [comics]='comics'></app-initial-comics>
  <app-highlights></app-highlights>
  `
})
export class HomeComponent implements OnInit, OnDestroy {

  COMICS_SPOTLIGHT_LIMIT = '4';

  subscriptions: any = {};
  comics: Comic[];

  constructor(private comicService: ComicsService) { }

  ngOnInit(): void {
    this.subscriptions.comics = this.comicService.listComics(this.COMICS_SPOTLIGHT_LIMIT)
      .subscribe(response => {
        this.comics = response.results;
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.comics) {
      this.subscriptions.comics.unsubscribe();
    }
  }

}
