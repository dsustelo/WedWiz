import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';
import { FeatureItem } from '../../models/home-page.models';

@Component({
  selector: 'app-feature-section',
  imports: [SectionHeadingComponent],
  templateUrl: './feature-section.component.html',
  styleUrl: './feature-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSectionComponent {
  readonly features = input.required<readonly FeatureItem[]>();
}
