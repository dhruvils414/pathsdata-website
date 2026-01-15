import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pathsdata.com';
  
  // Core pages
  const corePages = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/programs', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/case-studies', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/blog', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/team', priority: 0.6, changeFreq: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFreq: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFreq: 'yearly' as const },
  ];

  // Service pages
  const servicePages = [
    '/services/data-engineering',
    '/services/business-intelligence',
    '/services/ai-ml',
    '/services/generative-ai',
    '/services/mlops',
    '/services/cloud-migration',
  ].map(path => ({ path, priority: 0.8, changeFreq: 'monthly' as const }));

  // Program pages
  const programPages = [
    '/programs/aws-poc',
    '/programs/ai-assessment',
    '/programs/aws-map',
  ].map(path => ({ path, priority: 0.8, changeFreq: 'monthly' as const }));

  // Case study pages
  const caseStudyPages = [
    '/case-studies/enterprise-lakehouse',
    '/case-studies/fatevision',
    '/case-studies/fennec',
  ].map(path => ({ path, priority: 0.7, changeFreq: 'monthly' as const }));

  // Blog posts
  const blogPages = [
    '/blog/building-rag-systems-aws-bedrock',
    '/blog/apache-iceberg-data-lakehouse',
  ].map(path => ({ path, priority: 0.6, changeFreq: 'weekly' as const }));

  const allPages = [
    ...corePages,
    ...servicePages,
    ...programPages,
    ...caseStudyPages,
    ...blogPages,
  ];

  return allPages.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
