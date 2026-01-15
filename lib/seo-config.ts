import type { Metadata } from 'next';

// Site-wide SEO configuration
export const siteConfig = {
  name: 'PATHSDATA',
  description: 'AWS Select Tier Consulting Partner specializing in AI, Data Engineering, and Cloud Solutions. Transform complexity into clarity with expert consulting services.',
  url: 'https://pathsdata.com', // UPDATE THIS
  ogImage: 'https://pathsdata.com/og-image.png',
  links: {
    linkedin: 'https://www.linkedin.com/company/pathsdata/',
    twitter: 'https://twitter.com/pathsdata',
    github: 'https://github.com/pathsdata',
  },
  creator: 'PATHSDATA LLC',
  keywords: [
    'AWS Consulting',
    'AWS Partner',
    'Data Engineering',
    'AI Solutions',
    'Machine Learning',
    'Generative AI',
    'Cloud Migration',
    'MLOps',
    'Business Intelligence',
    'Amazon Bedrock',
    'Data Platform',
    'ETL Pipeline',
    'Data Lake',
    'RAG Systems',
    'AI Agents',
    'AWS Consulting Partner Texas',
    'AI Consulting Services',
  ],
  // Contact info for local SEO
  contact: {
    email: 'poc@pathsdata.com',
    address: {
      city: 'Austin',
      state: 'Texas',
      country: 'US',
    },
  },
};

// Default metadata for pages
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - AWS Select Tier Consulting Partner`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AWS Select Tier Consulting Partner`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@pathsdata',
    site: '@pathsdata',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
  category: 'technology',
};

// Helper function to generate page metadata
export function generatePageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}) {
  const url = `${siteConfig.url}${path}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      type: 'website',
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
      images: image ? [image] : undefined,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
