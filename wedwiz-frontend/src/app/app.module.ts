import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopModule } from './top/top.module';
import { MenuEsquerdaComponent } from './menu-esquerda/menu-esquerda.component';
import { BotaoMenuEsquerdaComponent } from './botao-menu-esquerda/botao-menu-esquerda.component';
import { LoginComponent } from './login/login.component';
import { LoginComEspacosComponent } from './login-com-espacos/login-com-espacos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuEsquerdaComponent,
    BotaoMenuEsquerdaComponent,
    LoginComponent,
    LoginComEspacosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TopModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
