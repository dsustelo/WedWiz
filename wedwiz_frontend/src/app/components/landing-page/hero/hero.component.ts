import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { MetricItem } from '../../../models/home-page.models';

@Component({
  selector: 'app-hero-section',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly metrics = input.required<readonly MetricItem[]>();
}
