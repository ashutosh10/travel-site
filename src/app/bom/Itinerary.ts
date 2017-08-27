import {Leg} from './Leg';

export class Itinerary {
    public legs: Array<Leg>;
    public fare: number;
    public fareCurrency: string;

    constructor(){
        this.legs = new Array<Leg>();
    }
}