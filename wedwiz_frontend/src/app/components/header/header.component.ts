import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonComponent } from '../shared/ui/button/button.component';
import { NavigationItem } from '../../models/home-page.models';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly navigationItems = input.required<readonly NavigationItem[]>();
}
