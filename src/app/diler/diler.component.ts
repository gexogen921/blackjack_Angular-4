import { Component } from '@angular/core';
import {elementDef} from "@angular/core/src/view/element";



@Component({
    selector: 'diler',
    templateUrl: './diler.component.html',
    styleUrls: ['./diler.component.css']
})

export class DilerComponent {
    public firstcart: number;
    public secondcart: number;
    public dilertotal: number;
    public loser: string;

    public defaultCarts: Array<number> = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    constructor() {
        this.firstcart = this.defaultCarts[this.getRandomInt(0, 9)];
        this.secondcart = this.defaultCarts[this.getRandomInt(0, 9)];

        this.dilertotal= this.firstcart + this.secondcart;

         var status : boolean = true;

         while(status) {
             if(this.dilertotal >= 21) {
                 this.loser="Player WiN";
             }
             else {
                 this.dilertotal += this.defaultCarts[this.getRandomInt(0, 9)];
                 status = false;
             }
         }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
