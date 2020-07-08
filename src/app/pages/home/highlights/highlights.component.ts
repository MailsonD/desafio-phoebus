import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: [ './highlights.component.css' ]
})
export class HighlightsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSearchWith(query) {
    this.router.navigate([ 'comics' ], {
      queryParams: {
        query
      }
    });
  }

  teste() {
    console.log('epa');
  }

}
