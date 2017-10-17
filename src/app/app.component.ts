import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

@RouteConfig([
  {path: '/', component: AppComponent, name: 'AppComponent', useAsDefault: true},
  {path: '/AppComponent', component: AppComponent, name: 'AppComponent'},
  {path: '/game', component: GameComponent , name: 'GameComponent'},
,
  {path: '/**', redirectTo: ['Home']}
])

export class AppComponent {
  title = 'Blackjack';
}
