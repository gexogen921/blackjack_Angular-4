import { Component } from '@angular/core';

@Component({
    selector: 'player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})

export class PlayerComponent {
    public firstcart: number;
    public secondcart: number;
    public total: number;

    public defaultCarts: Array<number> = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    constructor() {
        this.firstcart = this.defaultCarts[this.getRandomInt(0, 9)];
        this.secondcart = this.defaultCarts[this.getRandomInt(0, 9)];

        var total= this.firstcart + this.secondcart;
        /**

         * first + second **/
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getNewCart() {
        var newCart = this.defaultCarts[this.getRandomInt(0, 9)];

        this.total += newCart;

        var message='';

        if (this.total >= 21){
            message = "win";
        }
        else {
            message = "lose";
        }
        /*
        total += newCart
        check
         */
    }

    openCarts() {
        /*
        show total
         */
         var show = this.total;
    }
}
