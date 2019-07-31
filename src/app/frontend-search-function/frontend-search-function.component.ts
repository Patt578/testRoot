import { Component, OnInit } from '@angular/core';
import { FetchSwapiService } from '../fetch-swapi.service';


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
        // this.data = {};
        this.data = val;
        console.log(val)
        // console.log(this.data)
      })
    }
  }

  ngOnInit() {
  }

}
