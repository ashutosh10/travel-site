import {Passenger} from './PassengerData';
import {Itinerary} from './Itinerary';

export class BookingData {
    passengers: Array<Passenger> = new Array<Passenger>();
    itineraries: Array<Itinerary> = new Array<Itinerary>();
    
    ccNumber: string;
}