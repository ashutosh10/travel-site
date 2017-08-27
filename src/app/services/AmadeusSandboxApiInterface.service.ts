import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Injectable} from '@angular/core';
import {FlightSearchInputBom} from '../bom/FlightSearchInputBom.component';
import {ApiInterfaceService} from './ApiInterfaceService.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BookingData} from '../bom/BookingData';

import * as config_data from '../config.json';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AmadeusSandboxApiInterface extends ApiInterfaceService {
    api_key = config_data['amadeus-api-key'];
    airport_search_url = 'http://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=' + this.api_key;
    flight_search_url = 'http://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=' + this.api_key;

    constructor(public http: Http) {
        super(http);
    }

    retrieveAirports(keyword) : any {
        let url: string = this.airport_search_url + '&term='+keyword
        if (keyword) {
            return this.http.get(url)
                .map(this.handleResponse)
                .catch(this.handleError);
         }
    } 

    retrieveFlights(aInputBom: FlightSearchInputBom): Observable<any> {

        let url = this.flight_search_url;
        url += '&origin='+ aInputBom.origin;
        url += '&destination=' + aInputBom.destination;
        url += '&departure_date=' + aInputBom.departure_date;
        // add end_date if not empty
        console.log(url);
        
        return this.http.get(url)
                .map(this.handleResponse)
                .catch(this.handleError);
    }

    createBooking(bookingData: BookingData) {

    }

}

