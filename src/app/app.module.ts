import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MollyComponent } from './molly/molly.component';
import { BrianComponent } from './brian/brian.component';
import { SwapiSearchComponent } from './swapi-search/swapi-search.component';
import { FetchSwapiService } from './fetch-swapi.service'
// import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MollyComponent,
    BrianComponent,
    SwapiSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchSwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
