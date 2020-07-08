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

  ItemsPerPageLabel = 'Itens por página';

  limit: number;
  offset: number;

  total: number;

  page = 0;

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
      if (this.limit && this.offset) {
        console.log('epa');
        return this.comicsService.findComics(this.query, String(this.limit), String(this.offset));
      }
      return this.comicsService.findComics(this.query);
    } else {
      if (this.limit && this.offset) {
        console.log('epa');
        return this.comicsService.listComics(String(this.limit), String(this.offset));
      }
      return this.comicsService.listComics();
    }
  }

  handleChangePage(event) {
    console.log(event);
    this.comics = undefined;

    this.page = event.pageIndex;

    this.limit = event.pageSize;
    this.offset = (event.pageIndex * event.pageSize) - 1;

    console.log(this.limit, this.offset);

    this.subscriptions.reload = this.loadComics().subscribe(comicsDTO => {
      this.comics = comicsDTO.results;
      // this.total = comicsDTO.total;
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.comics) {
      this.subscriptions.comics.unsubscribe();
    }
  }

}
