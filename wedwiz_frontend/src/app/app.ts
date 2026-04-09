import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './features/home/components/header/header.component';
import { HeroSectionComponent } from './features/home/components/hero-section/hero-section.component';
import { FeatureSectionComponent } from './features/home/components/feature-section/feature-section.component';
import { InfoGridComponent } from './features/home/components/info-grid/info-grid.component';
import { HOME_FEATURES, HOME_INFO_ITEMS, HOME_METRICS, HOME_NAVIGATION } from './features/home/data/home-page.data';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    FeatureSectionComponent,
    InfoGridComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly navigationItems = HOME_NAVIGATION;
  protected readonly features = HOME_FEATURES;
  protected readonly metrics = HOME_METRICS;
  protected readonly infoItems = HOME_INFO_ITEMS;
}
