import { Metadata } from 'next';
import { Database, CheckCircle2 } from 'lucide-react';
import { GradientButton } from '@/components/ui/buttons';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Data Engineering Services',
  description: 'Build scalable, cloud-native data platforms on AWS. Expert data engineering consulting for modern data architectures including data lakes, warehouses, and ETL pipelines.',
  keywords: ['Data Engineering', 'AWS Data Lake', 'ETL Pipeline', 'Data Warehouse', 'Apache Iceberg', 'AWS Glue', 'Amazon Redshift'],
  alternates: {
    canonical: `${siteConfig.url}/services/data-engineering`,
  },
  openGraph: {
    title: 'Data Engineering Services - PATHSDATA',
    description: 'Build scalable, cloud-native data platforms on AWS with expert consulting.',
    url: `${siteConfig.url}/services/data-engineering`,
    type: 'website',
  },
};

const capabilities = [
  'Data Lake & Lakehouse Architecture',
  'ETL/ELT Pipeline Development',
  'Real-time Data Streaming',
  'Data Warehouse Modernization',
  'Apache Iceberg & Delta Lake',
  'AWS Glue, EMR, Redshift',
];

const technologies = ['AWS S3', 'AWS Glue', 'Amazon Redshift', 'Apache Iceberg', 'Apache Spark', 'Amazon EMR', 'AWS Lake Formation', 'Apache Kafka'];

const process = [
  { n: '1', title: 'Discovery', desc: 'We analyze your current data infrastructure, identify pain points, and define requirements.' },
  { n: '2', title: 'Architecture Design', desc: 'Design a scalable, cost-effective data architecture aligned with your business goals.' },
  { n: '3', title: 'Implementation', desc: 'Build and deploy data pipelines, lakes, and warehouses using AWS best practices.' },
  { n: '4', title: 'Optimization', desc: 'Continuously optimize for performance, cost, and reliability.' },
];

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Data Engineering', href: '/services/data-engineering' },
];

export default function DataEngineeringPage() {
  return (
    <>
      <ServiceJsonLd
        name="Data Engineering Services"
        description="Build scalable, cloud-native data platforms on AWS. Expert data engineering consulting for modern data architectures."
        url={`${siteConfig.url}/services/data-engineering`}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-violet-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-violet-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Data Engineering</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Build scalable, cloud-native data platforms that turn raw data into actionable insights. We design and implement modern data architectures on AWS.
            </p>
          </div>

          {/* Capabilities */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6 text-center">What We Deliver</h2>
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="p-4 bg-slate-900/60 border border-slate-800/60 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span className="text-slate-300">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6 text-center">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-slate-300 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-white mb-6 text-center">Our Process</h2>
            <div className="grid grid-cols-4 gap-4">
              {process.map((step, i) => (
                <div key={i} className="p-4 bg-slate-900/60 border border-slate-800/60 rounded-xl text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-violet-500/20 rounded-lg text-violet-400 text-sm font-bold mb-2">
                    {step.n}
                  </span>
                  <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-slate-400 mb-4">Ready to modernize your data infrastructure?</p>
            <GradientButton href="/contact">Contact Us</GradientButton>
          </div>
        </div>
      </div>
    </>
  );
}
