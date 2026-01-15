import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Database, CheckCircle2, ArrowRight, Zap, Shield, TrendingUp, DollarSign } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Data Engineering Services | AWS Select Tier Consulting Partner',
  description: 'Build scalable, cloud-native data platforms on AWS. Expert data engineering consulting for modern data architectures including data lakes, warehouses, and ETL pipelines.',
  keywords: ['Data Engineering', 'AWS Data Lake', 'ETL Pipeline', 'Data Warehouse', 'Apache Iceberg', 'AWS Glue', 'Amazon Redshift'],
  alternates: {
    canonical: `${siteConfig.url}/services/data-engineering`,
  },
};

const challenges = [
  {
    title: 'Data Silos',
    desc: 'Your data is scattered across multiple systems, making it impossible to get a unified view of your business.',
  },
  {
    title: 'Scaling Issues',
    desc: 'Your current infrastructure can\'t handle growing data volumes, leading to slow queries and missed insights.',
  },
  {
    title: 'High Costs',
    desc: 'Legacy data warehouses are expensive to maintain and scale, eating into your IT budget.',
  },
  {
    title: 'Data Quality',
    desc: 'Inconsistent data formats and missing validation lead to unreliable analytics and poor decisions.',
  },
];

const solutions = [
  {
    title: 'Data Lake & Lakehouse Architecture',
    desc: 'Modern open-table formats like Apache Iceberg that combine the best of data lakes and warehouses. ACID transactions, time travel, and schema evolution at scale.',
    technologies: ['Apache Iceberg', 'AWS S3', 'AWS Lake Formation', 'Delta Lake'],
  },
  {
    title: 'ETL/ELT Pipeline Development',
    desc: 'Automated data pipelines that extract, transform, and load data reliably. Built for scale with proper error handling, monitoring, and SLA tracking.',
    technologies: ['AWS Glue', 'Apache Spark', 'dbt', 'Airflow', 'Step Functions'],
  },
  {
    title: 'Real-time Data Streaming',
    desc: 'Process millions of events per second with sub-second latency. Perfect for IoT, clickstream, and operational analytics.',
    technologies: ['Amazon Kinesis', 'Apache Kafka', 'MSK', 'Flink'],
  },
  {
    title: 'Data Warehouse Modernization',
    desc: 'Migrate from legacy systems to cloud-native warehouses. 10x performance at a fraction of the cost.',
    technologies: ['Amazon Redshift', 'Snowflake', 'Databricks', 'Athena'],
  },
];

const benefits = [
  { icon: Zap, title: '10x Faster Queries', desc: 'Optimized architectures that deliver insights in seconds, not hours.' },
  { icon: DollarSign, title: '50-70% Cost Reduction', desc: 'Cloud-native designs that scale efficiently and reduce operational costs.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'AWS-native security with encryption, access controls, and compliance.' },
  { icon: TrendingUp, title: 'Infinite Scale', desc: 'Architectures that grow with your business without performance degradation.' },
];

const useCases = [
  {
    industry: 'Retail & E-commerce',
    use: 'Customer 360 data platform combining POS, web, mobile, and CRM data for personalized marketing.',
  },
  {
    industry: 'Healthcare',
    use: 'HIPAA-compliant data lake for patient records, claims, and clinical data analytics.',
  },
  {
    industry: 'Financial Services',
    use: 'Real-time fraud detection and risk analytics with sub-second data ingestion.',
  },
  {
    industry: 'Manufacturing',
    use: 'IoT data platform for predictive maintenance and supply chain optimization.',
  },
];

const process = [
  { n: '1', title: 'Discovery & Assessment', desc: 'Deep dive into your current data landscape, pain points, and business objectives. We analyze data sources, volumes, and access patterns.' },
  { n: '2', title: 'Architecture Design', desc: 'Design a future-proof architecture tailored to your needs. We create detailed technical specifications and migration plans.' },
  { n: '3', title: 'Implementation', desc: 'Build and deploy data pipelines, lakes, and warehouses using AWS best practices. Iterative delivery with continuous feedback.' },
  { n: '4', title: 'Optimization & Handoff', desc: 'Performance tuning, cost optimization, documentation, and knowledge transfer to your team.' },
];

const technologies = [
  { category: 'Storage', items: ['AWS S3', 'Apache Iceberg', 'Delta Lake', 'Parquet'] },
  { category: 'Processing', items: ['AWS Glue', 'Apache Spark', 'Amazon EMR', 'dbt'] },
  { category: 'Warehouse', items: ['Amazon Redshift', 'Athena', 'Snowflake'] },
  { category: 'Streaming', items: ['Kinesis', 'MSK (Kafka)', 'Flink'] },
  { category: 'Orchestration', items: ['Step Functions', 'Airflow', 'Dagster'] },
  { category: 'Governance', items: ['Lake Formation', 'Glue Catalog', 'DataZone'] },
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

      <div className="py-16 px-8">
        <div className="max-w-[1600px] mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <Image src="/aws-partner-badge.png" alt="AWS" width={20} height={20} className="h-5 w-auto" />
              <span className="text-orange-400 font-semibold text-sm">AWS Select Tier Consulting Partner</span>
            </div>
            
            <div className="w-20 h-20 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Database className="w-10 h-10 text-violet-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Data Engineering</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-2">
              Build scalable, cloud-native data platforms that turn raw data into <GradientText>actionable insights</GradientText>
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We design and implement modern data architectures on AWS — from data lakes and warehouses to real-time streaming platforms.
            </p>
          </div>

          {/* Challenges We Solve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Challenges We Solve</h2>
            <p className="text-slate-400 text-center mb-8">Sound familiar? We've helped dozens of companies overcome these exact problems.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((challenge, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                  <p className="text-slate-400 text-sm">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">What We Deliver</h2>
            <p className="text-slate-400 text-center mb-8">End-to-end data engineering solutions built on AWS best practices.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-400 mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-violet-500/10 text-violet-400 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose PATHSDATA</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 rounded-xl text-center">
                  <benefit.icon className="w-10 h-10 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl flex gap-4">
                  <div className="w-2 bg-violet-500 rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{useCase.industry}</h3>
                    <p className="text-slate-400 text-sm">{useCase.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Technology Stack</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technologies.map((tech, i) => (
                <div key={i} className="p-4 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                  <h3 className="text-xs font-semibold text-violet-400 uppercase tracking-wide mb-3">{tech.category}</h3>
                  <ul className="space-y-1">
                    {tech.items.map((item, j) => (
                      <li key={j} className="text-slate-300 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl relative">
                  <span className="absolute -top-3 -left-3 w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 mt-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Modernize Your Data Infrastructure?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you build a scalable, cost-effective data platform on AWS.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <GradientButton href="/contact">Schedule a Consultation</GradientButton>
              <Link href="/programs/aws-poc" className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:border-violet-500 transition-colors inline-flex items-center gap-2">
                Explore Free AWS POC <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
