export type NavigationItem = {
  readonly label: string;
  readonly fragment: string;
};

export type FeatureItem = {
  readonly title: string;
  readonly description: string;
};

export type MetricItem = {
  readonly value: string;
  readonly label: string;
};

export type InfoItem = {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly id: string;
};
