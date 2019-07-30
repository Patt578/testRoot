import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'


import { MollyComponent } from './molly/molly.component';
import { BrianComponent } from './brian/brian.component';
import { SwapiSearchComponent } from './swapi-search/swapi-search.component';

import { CardComponent } from './card/card.component';
import { FetchSwapiService } from './fetch-swapi.service'
import { FrontendSearchFunctionComponent } from './frontend-search-function/frontend-search-function.component';



@NgModule({
  declarations: [
    AppComponent,
    MollyComponent,
    BrianComponent,
    SwapiSearchComponent,
    CardComponent,
    FrontendSearchFunctionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    MatInputModule,
    MatSelectModule
  ],
  providers: [FetchSwapiService],

  bootstrap: [AppComponent]
})
export class AppModule { }
