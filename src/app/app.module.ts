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

const routers: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    DilerComponent,
    PlayerComponent
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
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
