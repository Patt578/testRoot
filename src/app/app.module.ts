import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MollyComponent } from './molly/molly.component';
import { BrianComponent } from './brian/brian.component';

@NgModule({
  declarations: [
    AppComponent,
    MollyComponent,
    BrianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
