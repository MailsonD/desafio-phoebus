import { environment as env } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'desafio-phoebus';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(`${env.marvelApi.baseUrl}/comics`, {
      params: {
        apikey: env.marvelApi.apiKey,
      }
    }).subscribe(res => {
      console.log('foi');
      console.log(res);
    });
  }

}
