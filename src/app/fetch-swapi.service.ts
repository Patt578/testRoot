import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchSwapiService {

  constructor(private http: HttpClient) { }

  getData(group: string, search: string): Observable<any> {
    return this.http.get(`https://swapi.co/api/${group}/${search}/`)
  }

}
