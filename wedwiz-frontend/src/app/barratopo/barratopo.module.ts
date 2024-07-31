import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarratopoComponent } from './barratopo.component';
import { CaixapesquisaComponent } from '../caixapesquisa/caixapesquisa.component';
import { BotaoperfilComponent } from '../botaoperfil/botaoperfil.component';

@NgModule({
  declarations: [
    BarratopoComponent,
    CaixapesquisaComponent,
    BotaoperfilComponent,
  ],
  imports: [CommonModule],
  exports: [BarratopoComponent, CaixapesquisaComponent, BotaoperfilComponent],
})
export class BarratopoModule {}
