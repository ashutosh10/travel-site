import {Component, OnInit} from '@angular/core'
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {PnrDataSharedService} from '../services/PnrDataSharedService.service';
import {BookingData} from '../bom/BookingData';
import {Passenger} from '../bom/PassengerData';
import {Itinerary} from '../bom/Itinerary';

@Component ({
    selector: 'bookingDetailsForm',
    templateUrl: '../htmls/BookingDetails.component.html',
    styleUrls: ['../css/flightsSearch-form.component.css']
})
export class BookingDetails implements OnInit{
    display = false;
    showPaxDetailsForm = true;
    showPaymentDetails = false;
    bookingData: BookingData = new BookingData();
    totalBookingPrice: number = 0;
    bookingCurrency: string;

    constructor(private pnrDataSharedService: PnrDataSharedService) {

    }
    ngOnInit() {
        this.pnrDataSharedService.selectedFlight.subscribe(
            data => {
                this.display = true;
                this.processData(data);
            }
        );
    }

    processData(data){
        this.bookingData.itineraries.push(data);
        for(let itinerary of this.bookingData.itineraries) {
            this.bookingCurrency = itinerary.fareCurrency;
            this.totalBookingPrice += itinerary.fare;
        }
        console.log(data);
    }

    showPaymentOptions(form: NgForm) {
        let passenger:Passenger = new Passenger();
        passenger.firstname = form.value['first_name'];
        passenger.lastname = form.value['last_name'];
        passenger.email = form.value['email'];
        passenger.dob = form.value['dob'];
        passenger.phone = form.value['phone'];


        this.bookingData.passengers.push(passenger);
        this.showPaxDetailsForm = false;
        this.showPaymentDetails = true;

    }

    submitDetails(form: NgForm){
        this.bookingData.ccNumber = form.value['card_number'];
        this.pnrDataSharedService.addBookingData(this.bookingData);
        this.display = false;

        console.log(this.bookingData);
    }
}