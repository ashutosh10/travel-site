import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import {ApiInterfaceService} from '../services/ApiInterfaceService.service';
import {FlightSearchInputBom} from '../bom/FlightSearchInputBom.component'
import {PnrDataSharedService} from '../services/PnrDataSharedService.service';


@Component({
    selector: 'flightsSearch-form',
    templateUrl: '../htmls/flightsSearch-form.component.html',
    styleUrls: ['../css/flightsSearch-form.component.css']
})
export class FlightsSearchFormComponent {

    display = true;
    useAmadeus = true;
    useSabre = false;
    constructor(private apiInterface: ApiInterfaceService,
                private pnrDataSharedService: PnrDataSharedService) {
    }

    observableSource = (keyword: any): Observable<any[]> => {
        return this.apiInterface.retrieveAirports(keyword);
    }

    listFormatter = (data: any) => {
        return data.label;
    }
  
    valueFormatter = (data: any) => {
        return data.value;
    }

    searchAndDisplayFlights(form: NgForm) {
        let aInputBom : FlightSearchInputBom = new FlightSearchInputBom();
        aInputBom.origin = form.value['origin_city'];
        aInputBom.destination = form.value['destination_city'];
        aInputBom.departure_date = form.value['departure_date'];
        if(form.value['end_date']) {
            aInputBom.end_date = form.value['end_date'];
        }
        console.log("Sending data");
        let retrievedFlights = this.apiInterface.retrieveFlights(aInputBom);
        retrievedFlights.subscribe(
            data => this.pnrDataSharedService.flights.next(data)
        );
        this.display = false;
    }


}