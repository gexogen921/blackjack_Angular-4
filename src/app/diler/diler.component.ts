import { Component } from '@angular/core';
import {Broadcaster} from '../broadcaster';

@Component({
    selector: 'diler',
    templateUrl: './diler.component.html',
    styleUrls: ['./diler.component.css']
})

export class DilerComponent {
    public firstcart: number;
    public secondcart: number;
    public total: number;
    public result: string;
    public closeGame: boolean = false;
    public defaultCarts: Array<number> = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    constructor(private broadcaster: Broadcaster) {
        this.firstcart = this.defaultCarts[this.getRandomInt(0, 9)];
        this.secondcart = this.defaultCarts[this.getRandomInt(0, 9)];

        this.total = this.firstcart + this.secondcart;

         var status: boolean = true;

         while(status) {
             if(this.total >= 21) {
                 this.result = "Player WiN";
             } else {
                 this.total += this.defaultCarts[this.getRandomInt(0, 9)];
                 status = false;
             }
         }

         this.broadcaster.on<string>('openCarts')
            .subscribe(message => {
                this.closeGame = true;
                console.log(message);
            });
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
