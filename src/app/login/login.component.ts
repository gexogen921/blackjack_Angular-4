import { Component, Input  } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})

export class LoginComponent {
    @Input() public name: string;
    @Input() public password: string;

    public isLoginFailed: boolean = false;

    constructor(private http: HttpClient, private router: Router) {

    }

    loginUser() {
        if(this.name && this.password) {
            this.isLoginFailed = false;
            localStorage.setItem('username', this.name);

            let params = new HttpParams();
            params = params.append('name', this.name);
            params = params.append('password', this.password);

            this.http.get('/api/login', {
                params: params
            }).subscribe((data) => {
                if(data['status']) {
                    this.router.navigate(['/game']);
                } else {
                    this.isLoginFailed = true;
                }
            });
        } else {
            this.isLoginFailed = true;
        }
    }
}
