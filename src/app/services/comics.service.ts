import { environment as env } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import ComicsDTO from '../model/comics-dto';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private LIMIT_DEFAULT = '20';
  private OFFSET_DEFAULT = '0';
  private QUERY_DEFAULT = '';

  constructor(private httpClient: HttpClient) { }

  listComics(limit = this.LIMIT_DEFAULT, offset = this.OFFSET_DEFAULT): Observable<ComicsDTO> {
    return this.getComics(this.QUERY_DEFAULT, offset, limit);
  }

  findComics(query = this.QUERY_DEFAULT, limit = this.LIMIT_DEFAULT, offset = this.OFFSET_DEFAULT): Observable<ComicsDTO> {
    return this.getComics(query, offset, limit);
  }

  findComicById(comicId: string): Observable<ComicsDTO> {
    return this.httpClient.get(`${env.marvelApi.baseUrl}/comics/${comicId}`, {
      params: {
        apikey: env.marvelApi.apiKey,
      }
    }).pipe(map((response: any) => {
      const { data } = response;
      return data as ComicsDTO;
    }));
  }




  private getComics(query: string, offset: string, limit: string): Observable<ComicsDTO> {
    let params;

    if (query) {
      params = {
        apikey: env.marvelApi.apiKey,
        titleStartsWith: query,
        limit,
        offset,
      };
    } else {
      params = {
        apikey: env.marvelApi.apiKey,
        limit,
        offset,
      };
    }

    return this.httpClient.get(`${env.marvelApi.baseUrl}/comics`, {
      params
    }).pipe(map((response: any) => {
      const { data } = response;
      return data as ComicsDTO;
    }));
  }
}
