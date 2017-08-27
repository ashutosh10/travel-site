import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Injectable} from '@angular/core';
import {FlightSearchInputBom} from '../bom/FlightSearchInputBom.component';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {ApiInterfaceService} from './ApiInterfaceService.service';
import {BookingData} from '../bom/BookingData';
import * as config_data from '../config.json';

import 'rxjs/add/operator/catch';

@Injectable()
export class SabreApiInterface extends ApiInterfaceService{
    api_key = config_data['sabre-api-key'];

    constructor(public http: Http) {
        super(http);
    }

    retrieveAirports(keyword) : Observable<any> {
        return new Observable<any>();
    }

    retrieveFlights(aInputBom: FlightSearchInputBom) : Observable<any> {
        return new Observable<any>();
    }

    createBooking(bookingData: BookingData) {

    }


}