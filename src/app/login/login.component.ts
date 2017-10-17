import { Component, Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})

export class LoginComponent {
    @Input() public name: string;
    @Input() public password: string;

    public isLoginFailed: boolean = false;

    constructor(private http: HttpClient) {

    }

    loginUser() {
        if(this.name && this.password) {
            this.isLoginFailed = false;
            localStorage.setItem('username', this.name);


            this.http.get('/api/items').subscribe(data => {
                // Read the result field from the JSON response.
                console.log(data);
            });
        } else {
            this.isLoginFailed = true;
        }
    }
}
