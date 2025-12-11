import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-button',
  imports: [CommonModule, RouterModule],
  templateUrl: './header-button.html',
  styleUrl: './header-button.scss',
})
export class HeaderButton {
  @Input() label = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';

  // rota opcional
  @Input() link?: string;

  // ação opcional (fallback se não houver link)
  @Input() action: () => void = () => {};
}
