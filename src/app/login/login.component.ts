import { Component, Input  } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})

export class loginComponent {
    @Input() public name: string;
    @Input() public password: string;

    constructor() {

    }

    loginUser() {
        console.log(this.name);
        console.log(this.password);
    }
}
