import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-menu-button',
  templateUrl: './left-menu-button.component.html',
  styleUrl: './left-menu-button.component.scss',
})
export class LeftMenuButtonComponent {
  @Input() value: string = '';
  @Input() icon: string = '';
}
