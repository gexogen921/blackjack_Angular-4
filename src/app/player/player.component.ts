import { Component } from '@angular/core';
import {Broadcaster} from '../broadcaster';

@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],

})

export class PlayerComponent {
    public firstcart: number;
    public secondcart: number;
    public total: number;

    public defaultCarts: Array<number> = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    constructor(private broadcaster: Broadcaster) {
        this.firstcart = this.defaultCarts[this.getRandomInt(0, 9)];
        this.secondcart = this.defaultCarts[this.getRandomInt(0, 9)];

         this.total= this.firstcart + this.secondcart;

    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getNewCart() {
        var newCart = this.defaultCarts[this.getRandomInt(0, 9)];

        this.total += newCart;

        if (this.total >= 21) {
            this.total = this.total;
        }
    }

    openCarts() {
        this.broadcaster.broadcast('openCarts', 'total');
    }
}
