import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarratopoModule } from './barratopo/barratopo.module';
import { MenuEsquerdaComponent } from './menu-esquerda/menu-esquerda.component';
import { BotaoMenuEsquerdaComponent } from './botao-menu-esquerda/botao-menu-esquerda.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuEsquerdaComponent,
    BotaoMenuEsquerdaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BarratopoModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
