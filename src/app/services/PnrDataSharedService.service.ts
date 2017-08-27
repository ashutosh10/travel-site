import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/catch';


@Injectable()
export class PnrDataSharedService {

    public flights = new Subject<any>();
    public selectedFlight = new Subject<any>();
    public bookingData = new Subject<any>();

    addItineraryDetails(itinerary){
        this.selectedFlight.next(itinerary);
    }

    addBookingData(data){
        this.bookingData.next(data);
    }


}