import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/landing-page/hero/hero.component';
import { FeatureSectionComponent } from './components/landing-page/features/features.component';
import { InfoGridComponent } from './components/landing-page/info-grid/info-grid.component';
import {
  HOME_FEATURES,
  HOME_INFO_ITEMS,
  HOME_METRICS,
  HOME_NAVIGATION,
} from './data/home-page.data';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroSectionComponent, FeatureSectionComponent, InfoGridComponent],
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
