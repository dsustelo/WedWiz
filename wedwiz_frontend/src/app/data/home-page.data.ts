import { FeatureItem, InfoItem, MetricItem, NavigationItem } from '../models/home-page.models';

export const HOME_NAVIGATION: readonly NavigationItem[] = [
  { label: 'Funcionalidades', fragment: 'funcionalidades' },
  { label: 'Planos', fragment: 'planos' },
  { label: 'Recursos', fragment: 'recursos' },
];

export const HOME_FEATURES: readonly FeatureItem[] = [
  {
    title: 'Gestao de convidados',
    description:
      'Organize RSVP, alergias, grupos familiares e confirmacoes num unico painel.',
  },
  {
    title: 'Convites personalizados',
    description:
      'Crie experiencias coerentes com o estilo do evento e partilhe tudo por link.',
  },
  {
    title: 'Mapa de lugares',
    description:
      'Monte a disposicao das mesas com menos friccao e mais contexto sobre cada convidado.',
  },
  {
    title: 'Controlo de orcamento',
    description:
      'Acompanhe fornecedores, pagamentos e prioridades para manter o plano realista.',
  },
];

export const HOME_METRICS: readonly MetricItem[] = [
  { value: '1 painel', label: 'para gerir o casamento do inicio ao fim' },
  { value: '4 areas', label: 'essenciais para manter tudo alinhado' },
  { value: '100%', label: 'foco em clareza, simplicidade e elegancia' },
];

export const HOME_INFO_ITEMS: readonly InfoItem[] = [
  {
    eyebrow: 'Planos',
    title: 'Comece com uma base solida e evolua ao ritmo do projeto',
    description:
      'Esta estrutura deixa a homepage pronta para ligar autenticacao, analytics, API e outras paginas sem acumular divida tecnica logo no arranque.',
    id: 'planos',
  },
  {
    eyebrow: 'Recursos',
    title: 'Preparada para crescer com boas praticas Angular',
    description:
      'O layout usa HTML semantico, dados tipados no componente, SCSS organizado e uma abordagem responsiva sem depender de CDN ou estilos inline espalhados.',
    id: 'recursos',
  },
];
