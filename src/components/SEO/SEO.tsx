import React from 'react';
import { GoogleTagManager } from '../Analytics/GoogleTagManager';
import { ContentfulSEO } from '../../lib/contentful/types/seo';

interface SEOProps {
  seo?: ContentfulSEO | null;
  fallbackTitle?: string;
  fallbackDescription?: string;
  fallbackImage?: string;
}

const defaultSEO = {
  title: 'Tielo Digital | AI & Automatisering',
  description: 'Transformeer jouw bedrijf met AI en automatisering. Verhoog efficiency, verminder kosten en blijf voorop in innovatie met Tielo Digital.',
  image: 'https://www.tielo-digital.nl/social/og-image.jpg'
};

export function SEO({ 
  seo,
  fallbackTitle,
  fallbackDescription,
  fallbackImage
}: SEOProps) {
  const title = seo?.fields.pageTitle || fallbackTitle || defaultSEO.title;
  const description = seo?.fields.pageDescription || fallbackDescription || defaultSEO.description;
  const image = seo?.fields.shareImages?.[0]?.fields.file.url || fallbackImage || defaultSEO.image;
  const canonical = seo?.fields.canonicalUrl || `https://tielo-digital.nl${window.location.pathname}`;
  const noindex = seo?.fields.noindex ?? false;
  const nofollow = seo?.fields.nofollow ?? false;
  
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('//') ? `https:${image}` : image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('//') ? `https:${image}` : image} />
      
      <link rel="canonical" href={canonical} />

      <GoogleTagManager />
    </>
  );
}