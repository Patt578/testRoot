import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonComponent } from './button/button.component';

import { MollyComponent } from './molly/molly.component';
import { BrianComponent } from './brian/brian.component';
import { SwapiSearchComponent } from './swapi-search/swapi-search.component';


@NgModule({
  declarations: [
    AppComponent,
    MollyComponent,
    BrianComponent,
    SwapiSearchComponent,
    ButtonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
