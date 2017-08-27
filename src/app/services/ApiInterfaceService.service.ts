import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Injectable} from '@angular/core';
import {FlightSearchInputBom} from '../bom/FlightSearchInputBom.component';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BookingData} from '../bom/BookingData';

import 'rxjs/add/operator/catch';

@Injectable()
export abstract class ApiInterfaceService {

    constructor(public http: Http) {

    }

    abstract retrieveFlights(aInputBom: FlightSearchInputBom): Observable<any> ;

    abstract retrieveAirports(keyword): Observable<any> ;

    abstract createBooking(bookingData: BookingData) ;

    handleError(error: any) {
        console.log("Error!!!!!");
        console.log(error);
        return Observable.throw(error);
    }

    handleResponse(res: any) {
        console.log(res);
        return res.json();
    }
}