import { contentfulClient } from '../client';
import { ContentfulSEO } from '../types/seo';
import { ContentfulError } from '../errors';

export async function getPageSEO(pageName: string): Promise<ContentfulSEO | null> {
  try {
    // Map page names to their Contentful internal names
    const internalNameMap: Record<string, string> = {
      'home': 'Home page SEO',
      'websites': 'Website Development SEO',
      'diensten': 'Diensten SEO',
      'diensten-workflow': 'Diensten Workflow',
      'diensten-outreach' : 'Diensten Outreach'
    };

    const internalName = internalNameMap[pageName] || pageName;

    const response = await contentfulClient.getEntries<ContentfulSEO>({
      content_type: 'componentSeo',
      'fields.internalName': internalName,
      include: 2,
      limit: 1
    });

    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching page SEO:', error);
    throw new ContentfulError('Failed to fetch page SEO', error);
  }
}

export async function getHomeSEO(): Promise<ContentfulSEO | null> {
  try {
    const response = await contentfulClient.getEntries<ContentfulSEO>({
      content_type: 'componentSeo',
      'fields.internalName': 'Home page SEO',
      include: 2,
      limit: 1
    });

    return response.items[0] || null;
  } catch (error) {
    console.error('Error fetching home SEO:', error);
    throw new ContentfulError('Failed to fetch home SEO', error);
  }
}