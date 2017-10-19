import { Component } from '@angular/core';

@Component({
    selector: 'diler',
    templateUrl: './diler.component.html',
    styleUrls: ['./diler.component.css']
})

export class DilerComponent {
    public firstcart: number;
    public secondcart: number;
    public total: number;

    public defaultCarts: Array<number> = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    constructor() {
        this.firstcart = this.defaultCarts[this.getRandomInt(0, 9)];
        this.secondcart = this.defaultCarts[this.getRandomInt(0, 9)];


         while(this.total >= 21) {
            this.total += this.defaultCarts[this.getRandomInt(0, 9)];
         }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}