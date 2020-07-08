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

  subscriptions: any = {};

  constructor(private comicsService: ComicsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions.comics = this.route.params.pipe(
      mergeMap((res, index) => {
        console.log(res);
        return this.comicsService.listComics();
      })
    ).subscribe(comicsDTO => {
      console.log(comicsDTO);
      this.comics = comicsDTO.results;
      this.total = comicsDTO.total;
    });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.comics) {
      this.subscriptions.comics.unsubscribe();
    }
  }

}
