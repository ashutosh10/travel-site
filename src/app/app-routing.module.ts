import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FlightsSearchFormComponent} from './components/FlightSearch.component';
import {FlightsListComponent} from './components/FlightsList.component';

const routes: Routes = [
    {path: '.', redirectTo:'/.', pathMatch:'full',},
    {path: 'flightsList', component: FlightsListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
