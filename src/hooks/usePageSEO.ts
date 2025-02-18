import { useState, useEffect } from 'react';
import { ContentfulSEO } from '../lib/contentful/types/seo';
import { getPageSEO, getHomeSEO } from '../lib/contentful/queries/seo';

export function usePageSEO(pageName: string) {
  const [seo, setSEO] = useState<ContentfulSEO | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSEO() {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = pageName === 'home' 
          ? await getHomeSEO()
          : await getPageSEO(pageName);
          
        setSEO(data);
      } catch (err) {
        // Don't set error for missing SEO data - just use fallbacks
        console.warn('SEO data not found:', err);
      } finally {
        setIsLoading(false);
      }
    }

    if (pageName) {
      fetchSEO();
    }
  }, [pageName]);

  return { seo, isLoading, error };
}