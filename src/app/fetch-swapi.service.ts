import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchSwapiService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message || 'custError: unable to complete request')
  }

  getData(group: string, search: string): Observable<any> {
    return this.http.get(`https://swapi.co/api/${group}/${search}/`)
  }

}
