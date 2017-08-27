import {Component, OnInit} from '@angular/core'
import {PnrDataSharedService} from '../services/PnrDataSharedService.service';
import {Observable} from 'rxjs/Observable';
import {Itinerary} from '../bom/Itinerary';
import {Leg} from '../bom/Leg';
import {Flight} from '../bom/Flight';

@Component ({
    selector : 'flightsList',
    templateUrl: '../htmls/flightsList.component.html',
    styleUrls: ['../css/flightsSearch-form.component.css']
})
export class FlightsListComponent implements OnInit {
    updated = false;
    public itineraries : Array<Itinerary>;
    constructor(private pnrDataSharedService: PnrDataSharedService) {
    }


    ngOnInit() {  
        this.pnrDataSharedService.flights.subscribe(
            data => {
                this.itineraries = new Array<Itinerary>();
                this.processData(data);
                this.updated = true;
        });

    }


    processData(data){
        let results = this.generateArray(data['results']);
        for(let result of results) {
            let itinerariesFromResponse = result['itineraries'];
            for(let iter of itinerariesFromResponse){
                // Not to check connecting flights for now
                if(iter['outbound']['flights'].length != 1) {
                    continue;
                }
                for(let outbound of iter['outbound']['flights']) {
                    let itinerary: Itinerary = new Itinerary();
                    
                    let leg: Leg = new Leg();
                    leg.origin = outbound['origin']['airport'];
                    leg.destination = outbound['destination']['airport'];
                    
                    let flight: Flight = leg.flight;
                    flight.marketingAirlineCode = outbound['marketing_airline'];
                    flight.operatingAirlineCode = outbound['operating_airline'];
                    flight.departureTime = outbound['departs_at'];
                    flight.arrivalTime = outbound['arrives_at'];
                    flight.flightNumber = outbound['flight_number'];
                    flight.classOfService = outbound['booking_info']['travel_class'];

                    itinerary.legs.push(leg);
                    itinerary.fare = result['fare']['total_price'];
                    itinerary.fareCurrency = data['currency'];
                    this.itineraries.push(itinerary);
                }
            }
        }
        
    }

    generateArray(obj){
        return Object.keys(obj).map((key)=>{ return obj[key]});
     }


     selectFlight(itinerary){
         this.updated = false;
         this.pnrDataSharedService.addItineraryDetails(itinerary);
     }

}