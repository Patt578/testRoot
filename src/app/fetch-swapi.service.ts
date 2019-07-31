import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchSwapiService {

  constructor(private http: HttpClient) { }

  data:any

  getData(group: string, search: any): Observable<any> {
    if (isNaN(search)) { // if search term is not a number
      return this.http.get[(`https://swapi.co/api/${group}/?search=${search}`)]
    } else { // if search term is a number
      return this.http.get(`https://swapi.co/api/${group}/${search}/`)
    }
  }

  holdData(data:any) {
    console.log(`holding ${data}`)
    this.data = data
  }

  grabData() {
    console.log(`grabbing ${this.data}`)
    return this.data
  }

}