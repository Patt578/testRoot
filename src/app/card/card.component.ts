
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FetchSwapiService } from '../fetch-swapi.service'





@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  @Input() data:any

  name:string;
  height:number = 0;
  mass:number = 0;
  hair_color:string = '';
  skin_color:string = '';
  eye_color:string ='';
  birth_year:string ='';
  gender:string ='';
  homeworld = '';

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

  peopleCard = (data) =>{
    this.name = data.name;
    this.height = data.height;
    this.mass = data.mass;
    this.hair_color = data.hair_color;
    this.skin_color = data.skin_color;
    this.eye_color = data.eye_color;
    this.birth_year = data.birth_year;
    this.gender = data.gender;
    this.homeworld = data.homeworld;

 
  }

  filmCard = (data) =>{
    this.title = data.title;
    this.episode_id = data.episode_id;
    this.opening_crawl = data.opening_crawl;
    this.director = data.director;
    this.producer = data.producer;
    this.release_date = data.release_date;

  }

  shipCard=(data)=>{

    this.ship_name = data.name;
    this.model = data.model;
    this.cost_in_credits = data.cost_in_credits;
    this.length = data.length;
    this.max_atmospheric_speed = data.max_atmosphering_speed;
    this.crew = data.crew;
    this.passengers = data.passengers;
    this.cargo_capacity = data.cargo_capacity;
    this.consumables = data.consumables;
    this.hyperdrive_rating = data.hyperdrive_rating;
    this.mglt = data.MGLT;

  }
  
  constructor(
    private fetchService: FetchSwapiService
  ) { }

  grabData() {
    this.fetchService.grabData().subscribe((val:any) => this.data = val)
   
    console.log(`grabbed ${this.data.name}`)
  }


  ngOnChanges() {
    if(this.data['title'] !== undefined){
      this.filmCard(this.data)
    }else if(this.data['mass'] !== undefined){
      this.peopleCard(this.data)
    }else{
      this.shipCard(this.data)
    }
    
    console.log(`grabbed ${this.data.name}`)
  }    

  // ngOnInit() {
  //   // this.grabData()
  // }

}