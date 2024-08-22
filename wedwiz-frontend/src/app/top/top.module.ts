import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { CaixapesquisaComponent } from './caixapesquisa/caixapesquisa.component';
import { BotaoperfilComponent } from './botaoperfil/botaoperfil.component';

@NgModule({
  declarations: [TopbarComponent, CaixapesquisaComponent, BotaoperfilComponent],
  imports: [CommonModule],
  exports: [TopbarComponent],
})
export class TopModule {}
