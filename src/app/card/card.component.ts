import { Component, OnInit, Input } from '@angular/core';

import { FrontendSearchFunctionComponent } from '../frontend-search-function/frontend-search-function.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name:string = '';
  height:number = 0;
  mass:number = 0;
  hair_color:string = '';
  skin_color:string = '';
  eye_color:string ='';
  birth_year:string ='';
  gender:string ='';

  title:string = '';
  episode_id:number = 0;
  opening_crawl:string = '';
  director:string = '';
  producer:string ='';
  release_date:string ='';

  ship_name:string = '';
  model:string = '';
  cost_in_credits:number = 0;
  length:number = 0;
  max_atmospheric_speed:number = 0;
  crew:number = 0;
  passengers:number = 0;
  cargo_capacity:number = 0;
  consumables:string = '';
  hyperdrive_rating:number = 0;
  mglt:string ='';

  

  
  constructor(private frontendSearch: FrontendSearchFunctionComponent ) { }

  ngOnInit() {
  }

  getShip(): void {
    this.frontendSearch
  }

}
