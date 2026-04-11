import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SectionHeadingComponent } from '../../shared//ui/section-heading/section-heading.component';
import { FeatureItem } from '../../../models/home-page.models';

@Component({
  selector: 'app-feature-section',
  imports: [SectionHeadingComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSectionComponent {
  readonly features = input.required<readonly FeatureItem[]>();
}
