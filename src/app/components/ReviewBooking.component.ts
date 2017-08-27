import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BookingData} from '../bom/BookingData';
import {PnrDataSharedService} from '../services/PnrDataSharedService.service';

@Component({
    selector: 'reviewBooking',
    templateUrl: '../htmls/ReviewBooking.component.html',
    styleUrls: ['../css/flightsSearch-form.component.css']    
})
export class ReviewBooking implements OnInit {

    bookingData: BookingData = new BookingData();
    display = false;
    constructor(private pnrDataSharedService: PnrDataSharedService) {

    }

    ngOnInit() {
        this.pnrDataSharedService.bookingData.subscribe(
            data => {
                console.log(data);
                this.bookingData = data;
                this.display = true;
            }
        )
    }

}

