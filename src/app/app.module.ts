import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MollyComponent } from './molly/molly.component';
import { BrianComponent } from './brian/brian.component';
import { SwapiSearchComponent } from './swapi-search/swapi-search.component';
import { FrontendSearchFunctionComponent } from './frontend-search-function/frontend-search-function.component';


@NgModule({
  declarations: [
    AppComponent,
    MollyComponent,
    BrianComponent,
    SwapiSearchComponent,
    FrontendSearchFunctionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
