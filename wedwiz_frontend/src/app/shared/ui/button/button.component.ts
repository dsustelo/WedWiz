import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly href = input.required<string>();
  readonly label = input.required<string>();
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly size = input<'default' | 'large'>('default');
}
