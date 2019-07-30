import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwapiSearchComponent } from './swapi-search/swapi-search.component'

const routes: Routes = [
  { path: '', component: SwapiSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
