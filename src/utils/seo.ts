export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string;
}

export const defaultSEO: SEOProps = {
  title: 'AI & Automatisering',
  description: 'Transformeer jouw bedrijf met AI en automatisering. Verhoog efficiency, verminder kosten en blijf voorop in innovatie met Tielo Digital.',
  keywords: [
    'AI',
    'Automatisering',
    'Bedrijfsprocessen',
    'Digitale Transformatie',
    'Machine Learning',
    'Workflow Optimalisatie'
  ],
  ogType: 'website',
  ogImage: 'https://www.tielo-digital.nl/social/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterCreator: '@TieloDigital',
  twitterSite: '@TieloDigital'
};

const pageDescriptions: Record<string, string> = {
  home: 'Transformeer jouw bedrijf met AI en automatisering. Verhoog efficiency, verminder kosten en blijf voorop in innovatie met Tielo Digital.',
  blog: 'Ontdek de laatste inzichten over AI, automatisering en digitale transformatie. Praktische tips en strategieën voor jouw bedrijf.',
  diensten: 'Van workflow automatisering tot AI-implementatie. Ontdek onze diensten die jouw bedrijf helpen groeien en efficiënter maken.',
  contact: 'Neem contact op met Tielo Digital voor een vrijblijvend gesprek over AI en automatisering voor jouw bedrijf.',
  oplossingen: 'Bekijk onze succesvolle AI en automatisering oplossingen. Concrete voorbeelden van hoe wij bedrijven helpen groeien.',
  succesverhalen: 'Lees hoe andere bedrijven succesvol zijn geworden met onze AI en automatisering oplossingen.',
  websites: 'Professionele website development met focus op conversie, gebruiksvriendelijkheid en moderne technologie.',
  'gratis-guide': 'Download onze gratis guide over AI en automatisering. Praktische tips om direct mee aan de slag te gaan.'
};

export function generateSEO(props: Partial<SEOProps>): SEOProps {
  const isHomePage = !props.title || props.title === defaultSEO.title;
  
  let pageType = isHomePage ? 'home' : props.title?.toLowerCase().split(' ')[0];
  
  const description = props.description || pageDescriptions[pageType as string] || defaultSEO.description;
  
  return {
    ...defaultSEO,
    ...props,
    title: isHomePage 
      ? 'Tielo Digital | AI & Automatisering'
      : `${props.title} | Tielo Digital`,
    description,
    canonical: props.canonical || `https://www.tielo-digital.nl${window.location.pathname}`
  };
}