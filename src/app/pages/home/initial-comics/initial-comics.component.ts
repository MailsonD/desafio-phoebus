import { Component, OnInit, Input } from '@angular/core';
import Comic from 'src/app/model/comic';

@Component({
  selector: 'app-initial-comics',
  templateUrl: './initial-comics.component.html',
  styleUrls: [ './initial-comics.component.css' ]
})
export class InitialComicsComponent implements OnInit {

  @Input() comics: Comic[];

  constructor() { }

  ngOnInit(): void {
  }

}
