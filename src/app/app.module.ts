import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {FlightsSearchFormComponent} from './components/FlightSearch.component'
import {FlightsListComponent} from './components/FlightsList.component'
import {BookingDetails} from './components/BookingDetails.component'
import {ReviewBooking} from './components/ReviewBooking.component'
import {Ng2AutoCompleteModule} from 'ng2-auto-complete';
import {AmadeusSandboxApiInterface} from './services/AmadeusSandboxApiInterface.service'
import {PnrDataSharedService} from './services/PnrDataSharedService.service'
import {ApiInterfaceService} from './services/ApiInterfaceService.service';
import {SabreApiInterface} from './services/SabreApiInterface.service';

import {AppComponent} from './components/app.component';
import {AppRoutingModule} from './app-routing.module'

export function getAmadeusSandboxApiInterface(http: Http) {
  return new AmadeusSandboxApiInterface(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FlightsSearchFormComponent,
    FlightsListComponent,    
    BookingDetails,
    ReviewBooking
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2AutoCompleteModule
  ],
  providers: [
    AmadeusSandboxApiInterface, 
    PnrDataSharedService, 
    SabreApiInterface,
    { 
      provide:ApiInterfaceService,
      useFactory : getAmadeusSandboxApiInterface,
      deps: [Http]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
