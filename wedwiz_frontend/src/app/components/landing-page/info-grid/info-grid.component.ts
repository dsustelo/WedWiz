import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InfoItem } from '../../../models/home-page.models';

@Component({
  selector: 'app-info-grid',
  templateUrl: './info-grid.component.html',
  styleUrl: './info-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoGridComponent {
  readonly items = input.required<readonly InfoItem[]>();
}
