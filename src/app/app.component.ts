import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Router, RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

@RouteConfig([
  {path: '/', component: AppComponent, name: 'AppComponent', useAsDefault: true},
  {path: '/AppComponent', component: AppComponent, name: 'AppComponent'},
  {path: '/game', component: gamecomponent , name: 'GameComponent'},
,
  {path: '/**', redirectTo: ['Home']}
])

export class AppComponent {
  title = 'Blackjack';
}
