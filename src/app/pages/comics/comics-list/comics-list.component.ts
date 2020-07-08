import { ComicsService } from './../../../services/comics.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import Comic from 'src/app/model/comic';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: [ './comics-list.component.css' ]
})
export class ComicsListComponent implements OnInit, OnDestroy {

  limit: string;
  offset: string;

  total: number;

  comics: Comic[];

  query: string;

  subscriptions: any = {};

  constructor(private comicsService: ComicsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions.comics = this.route.queryParams.pipe(
      mergeMap(res => {
        console.log(res);
        if (res.query) {
          this.query = res.query;
        }

        return this.loadComics();
      })
    ).subscribe(comicsDTO => {
      console.log(comicsDTO);
      this.comics = comicsDTO.results;
      this.total = comicsDTO.total;
    });
  }

  loadComics() {
    if (this.query) {
      return this.comicsService.findComics(this.query);
    } else {
      if (this.limit && this.offset) {
        return this.comicsService.listComics(this.limit, this.offset);
      }
      return this.comicsService.listComics();
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptions.comics) {
      this.subscriptions.comics.unsubscribe();
    }
  }

}
