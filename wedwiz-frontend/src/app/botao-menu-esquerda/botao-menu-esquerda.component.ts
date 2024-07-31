import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-menu-esquerda',
  templateUrl: './botao-menu-esquerda.component.html',
  styleUrl: './botao-menu-esquerda.component.scss',
})
export class BotaoMenuEsquerdaComponent {
  @Input() value: string = '';
}
