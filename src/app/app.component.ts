import { ComicsService } from './services/comics.service';
import { environment as env } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div class="main">
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'desafio-phoebus';

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.comicsService.listComics().subscribe(res => {
      console.log('foi');
      console.log(res.results);
    });
  }

}
