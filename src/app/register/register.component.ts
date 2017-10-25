import { Component, Input  } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls:[('./register.component.css')],
})

export class RegisterComponent {
    @Input() public name: string;
    @Input() public password: string;

    public isLoginFailed: boolean = false;
    public message: string;

    constructor(private http: HttpClient, private router: Router) {

    }

    registerUser() {
        if(this.name && this.password) {
            this.isLoginFailed = false;
            localStorage.setItem('username', this.name);

            let params = new HttpParams();
            params = params.append('name', this.name);
            params = params.append('password', this.password);

            this.http.get('/api/register', {
                params: params
            }).subscribe((data) => {
                if(data['status']) {
                    this.router.navigate(['/game']);
                } else {
                    this.message = data['message'];
                    this.isLoginFailed = true;
                }
            });
        } else {
            this.isLoginFailed = true;
        }
    }
    loginUser(){
        this.router.navigate(['/login']);
    }
}