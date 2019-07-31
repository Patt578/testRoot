import { Component, OnInit } from '@angular/core';
import { FetchSwapiService } from '../fetch-swapi.service';

@Component({
  selector: 'app-swapi-search',
  templateUrl: './swapi-search.component.html',
  styleUrls: ['./swapi-search.component.css']
})
export class SwapiSearchComponent implements OnInit {
  group: string;
  search: string;
  data: any;

  constructor(
    private fetchService: FetchSwapiService,
  ) { }

  onSubmit() {
    this.group = "people"
    this.search = "2"
    this.fetchService.getData(this.group, this.search).subscribe((val:any) => {
      this.data = val;
      console.log(val)
    })
  }

  ngOnInit() {
  }

}
