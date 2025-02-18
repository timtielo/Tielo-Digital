import React from 'react';
import { ServicesHero } from '../components/Services/ServicesHero';
import { ServicesList } from '../components/Services/ServicesList';
import { ServicesProcess } from '../components/Services/ServicesProcess';
import { ServicesCTA } from '../components/Services/ServicesCTA';
import { WebsitesSection } from '../components/Services/WebsitesSection';
import { SEO } from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

export function Services() {
  const { seo } = usePageSEO('diensten');

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        seo={seo}
        fallbackTitle="AI & Automatisering Diensten | Tielo Digital"
        fallbackDescription="Ontdek onze AI en automatisering diensten. Van workflow automatisering tot AI-implementatie - wij helpen jouw bedrijf groeien en efficiënter werken."
      />
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <WebsitesSection />
      <ServicesCTA />
    </div>
  );
}