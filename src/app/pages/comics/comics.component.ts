import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  template: `
  <router-outlet></router-outlet>
  `
})
export class ComicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
