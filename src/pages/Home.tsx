import React from 'react';
import { Hero } from '../components/Hero';
import { MetricsDashboard } from '../components/Dashboard';
import { ProblemSolveSection } from '../components/Home/ProblemSolveSection';
import { Benefits } from '../components/Home/Benefits';
import { Services } from '../components/Services';
import { CaseStudyTestimonial } from '../components/CaseStudyTestimonial';
import { CTASection } from '../components/CTASection';
import { SEO } from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

export function Home() {
  const { seo } = usePageSEO('home');

  return (
    <>
      <SEO 
        seo={seo}
        fallbackTitle="Tielo Digital - AI & Automatisering"
        fallbackDescription="Transformeer jouw bedrijf met AI-gedreven oplossingen en automatisering. Verhoog efficiency, verminder kosten en blijf voorop in innovatie."
      />
      <Hero />
      <MetricsDashboard />
      <ProblemSolveSection />
      <Benefits />
      <Services />
      <CaseStudyTestimonial />
      <CTASection />
    </>
  );
}