import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { DilerComponent } from './diler/diler.component';
import { PlayerComponent } from './player/player.component';
import { RegisterComponent } from './register/register.component'
import {Broadcaster} from './broadcaster';

const routers: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    DilerComponent,
    PlayerComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
        routers,
        { enableTracing: true }
    )
  ],
  providers: [Broadcaster],

  bootstrap: [AppComponent],
})

export class AppModule { }
