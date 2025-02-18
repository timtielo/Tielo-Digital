import { ContentfulImage } from './common';

export interface ContentfulSEO {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    internalName: string;
    pageTitle: string;
    pageDescription?: string;
    canonicalUrl?: string;
    nofollow: boolean;
    noindex: boolean;
    shareImages?: ContentfulImage[];
  };
}