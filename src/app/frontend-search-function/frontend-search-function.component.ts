import { Component, OnInit } from '@angular/core';
import { FetchSwapiService } from '../fetch-swapi.service';
import { isSyntaxError } from '@angular/compiler';
import { isString } from 'util';


@Component({
  selector: 'app-frontend-search-function',
  templateUrl: './frontend-search-function.component.html',
  styleUrls: ['./frontend-search-function.component.css']
})
export class FrontendSearchFunctionComponent implements OnInit {
  url = {
    group: '',
    search: '',
  }
  data = {};

  constructor(
    private fetchService: FetchSwapiService,
  ) { }

  onSubmit() {
    if (!this.url.group || !this.url.search) {
      return console.log('error')
    } else {
      this.url.group = this.url.group
      this.fetchService.getData(this.url.group, this.url.search).subscribe((val:any) => {
        if (isString(this.url.search)) {
          this.data = val.results[0]
          console.log(this.data.results[0])
        } else {
          this.data = val;
          console.log(this.data)
        }
        // console.log(this.data[0])
        })
    }
  }

  ngOnInit() {
  }

}
