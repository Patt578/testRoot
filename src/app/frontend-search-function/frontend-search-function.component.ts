import { Component, OnInit } from '@angular/core';
import { FetchSwapiService } from '../fetch-swapi.service';
import { isString } from 'util';
import { isDefined } from '@angular/compiler/src/util';


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
  data: any;

  constructor(
    private fetchService: FetchSwapiService,
  ) { }

  onSubmit() {
    if (!this.url.group || !this.url.search) {
      return console.log('error')
    } else {
      this.url.group = this.url.group
      this.fetchService.getData(this.url.group, this.url.search).subscribe((val:any) => {
        if (isNaN(this.url.search)) {
          this.data = val.results[0]
          console.log(this.data.results[0])
        } else {
          this.data = val;
          // console.log(this.data)
        }
        // console.log(this.data[0])
        })
    }
  }

  ngOnInit() {
  }

}
