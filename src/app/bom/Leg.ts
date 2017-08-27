import {Flight} from './Flight';

export class Leg {
    public flight : Flight;
    public origin : string;
    public destination: string;

    constructor(){
        this.flight = new Flight();
    }
}