import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertTriangle, Building2, Database, Layers, Clock, DollarSign, Shield, Zap } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Enterprise Data Lakehouse Case Study | PATHSDATA',
  description: 'How PATHSDATA eliminated vendor dependency and built a unified data lakehouse for a national enterprise, reducing report delivery time from days to minutes.',
  keywords: ['Data Lakehouse', 'Apache Iceberg', 'AWS', 'Data Engineering', 'Vendor Consolidation', 'Polars', 'PyIceberg'],
  alternates: {
    canonical: `${siteConfig.url}/case-studies/enterprise-lakehouse`,
  },
};

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Fragmented Vendor Ecosystem',
    desc: 'Data collection, aggregation, and reporting were handled by three different vendors with no unified ownership.',
  },
  {
    icon: Clock,
    title: 'Report Delays',
    desc: 'Business reports took 5-7 days to generate due to coordination between multiple vendors and manual handoffs.',
  },
  {
    icon: AlertTriangle,
    title: 'Data Quality Issues',
    desc: 'Reports frequently contained errors due to inconsistent transformations and lack of data validation between vendor systems.',
  },
  {
    icon: DollarSign,
    title: 'High Costs & Finger-Pointing',
    desc: 'When issues arose, vendors blamed each other. Troubleshooting required expensive coordination across multiple contracts.',
  },
];

const vendorProblems = [
  {
    vendor: 'Vendor A',
    role: 'Data Collection',
    issues: ['Collected raw data from multiple source systems and APIs', 'No visibility into data quality at source', 'Different data formats with no standardization'],
  },
  {
    vendor: 'Vendor B',
    role: 'Data Aggregation & ETL',
    issues: ['Transformed and aggregated data from Vendor A', 'Black-box transformations with no documentation', 'Batch processing only — no real-time capabilities'],
  },
  {
    vendor: 'Vendor C',
    role: 'Reporting & Analytics',
    issues: ['Built dashboards and reports from Vendor B data', 'Limited to pre-built reports with no self-service', 'Couldn\'t trace errors back to source'],
  },
];

const solution = {
  title: 'Unified Data Lakehouse on AWS',
  description: 'We designed and built a consolidated data platform that eliminated vendor dependencies and gave the client full ownership of their data pipeline.',
  components: [
    {
      title: 'ECS-Based Ingestion Layer',
      desc: 'Containerized ingestion jobs running on Amazon ECS for both real-time streaming and batch data sources. Scalable, maintainable, and fully managed.',
      technologies: ['Amazon ECS', 'ECR', 'AWS Glue', 'Step Functions', 'EventBridge'],
    },
    {
      title: 'Open Lakehouse Architecture',
      desc: 'Apache Iceberg on S3 as the foundation — open table format that prevents vendor lock-in while providing ACID transactions, time travel, and schema evolution.',
      technologies: ['Apache Iceberg', 'AWS S3', 'AWS Glue Data Catalog', 'Lake Formation'],
    },
    {
      title: 'Polars & PyIceberg Processing',
      desc: 'High-performance data processing using Polars for lightning-fast transformations and PyIceberg for native Iceberg table operations. Rust-powered performance without Spark overhead.',
      technologies: ['Polars', 'PyIceberg', 'Python', 'Rust-native'],
    },
    {
      title: 'Self-Service Analytics',
      desc: 'Business users can now build their own reports and explore data without waiting for IT or vendors. Real-time dashboards with drill-down capabilities.',
      technologies: ['Amazon QuickSight', 'Athena', 'QuickSight Q (NL Query)'],
    },
  ],
};

const architecture = {
  layers: [
    { name: 'Sources', items: ['APIs', 'Databases', 'Files', 'Streaming', 'Third-Party'] },
    { name: 'Ingestion', items: ['ECS Jobs', 'ECR Containers', 'Step Functions', 'EventBridge'] },
    { name: 'Storage', items: ['S3 Data Lake', 'Apache Iceberg', 'Bronze/Silver/Gold'] },
    { name: 'Processing', items: ['Polars', 'PyIceberg', 'Data Quality', 'Glue Catalog'] },
    { name: 'Serving', items: ['Athena', 'QuickSight', 'API Gateway', 'Lake Formation'] },
  ],
};

const results = [
  { metric: '5-7 Days → Minutes', label: 'Report Delivery Time', icon: Clock },
  { metric: '60%', label: 'Cost Reduction', icon: DollarSign },
  { metric: '100%', label: 'Data Lineage Visibility', icon: Shield },
  { metric: 'Zero', label: 'Vendor Dependencies', icon: Zap },
];

const benefits = [
  {
    title: 'Single Source of Truth',
    desc: 'All data flows through one platform with consistent definitions, eliminating discrepancies between vendor systems.',
  },
  {
    title: 'No Vendor Lock-In',
    desc: 'Apache Iceberg\'s open format means data is portable. The client owns their data and can switch tools anytime.',
  },
  {
    title: 'Real-Time + Batch',
    desc: 'Unified architecture handles both streaming data and batch feeds in the same pipeline with ECS-based jobs.',
  },
  {
    title: 'Full Transparency',
    desc: 'Every data transformation is documented, version-controlled, and traceable from source to report.',
  },
  {
    title: 'Self-Service Analytics',
    desc: 'Business users build their own reports without IT bottlenecks or vendor dependencies.',
  },
  {
    title: 'Rust-Powered Performance',
    desc: 'Polars delivers 10-100x faster processing than Pandas, enabling rapid iteration and cost savings.',
  },
];

const timeline = [
  { phase: 'Discovery & Design', duration: '3 weeks', activities: 'Audit existing vendor systems, map data flows, design target architecture' },
  { phase: 'Foundation Build', duration: '4 weeks', activities: 'Set up AWS infrastructure, Iceberg tables, ingestion pipelines' },
  { phase: 'Migration & Integration', duration: '6 weeks', activities: 'Migrate data sources, build transformations, implement data quality' },
  { phase: 'Analytics & Handoff', duration: '3 weeks', activities: 'Deploy QuickSight dashboards, train users, documentation' },
];

const technologies = [
  { category: 'Ingestion', items: ['Amazon ECS', 'ECR', 'Step Functions', 'EventBridge'] },
  { category: 'Storage', items: ['Amazon S3', 'Apache Iceberg', 'Parquet', 'Lake Formation'] },
  { category: 'Processing', items: ['Polars', 'PyIceberg', 'Python', 'AWS Glue'] },
  { category: 'Analytics', items: ['Amazon Athena', 'QuickSight', 'QuickSight Q'] },
];

export default function RealEstateLakehouseCaseStudy() {
  return (
    <div className="py-16 px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Back Link */}
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-violet-500/20 text-violet-400 text-xs rounded-full">Data Engineering</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">Lakehouse</span>
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">Apache Iceberg</span>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-violet-500/20 rounded-xl flex items-center justify-center">
              <Building2 className="w-8 h-8 text-violet-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">National Enterprise Client</h1>
              <p className="text-slate-400">Unified Data Lakehouse — Eliminating Vendor Dependency</p>
            </div>
          </div>

          <p className="text-xl text-slate-300 max-w-4xl">
            A national enterprise was trapped in a <span className="text-white font-semibold">fragmented vendor ecosystem</span> where data collection, aggregation, and reporting were handled by three different vendors. Reports took <span className="text-white font-semibold">5-7 days</span> to generate and frequently contained errors with no clear accountability.
          </p>
        </div>

        {/* Results Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {results.map((result, i) => (
            <div key={i} className="p-6 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 rounded-xl text-center">
              <result.icon className="w-8 h-8 text-violet-400 mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-bold text-white">{result.metric}</p>
              <p className="text-slate-400 text-sm">{result.label}</p>
            </div>
          ))}
        </div>

        {/* The Problem */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">The Problem</h2>
          <p className="text-slate-400 mb-8">A classic case of "too many cooks" — but with data vendors instead of chefs.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {challenges.map((challenge, i) => (
              <div key={i} className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
                <challenge.icon className="w-8 h-8 text-red-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                <p className="text-slate-400 text-sm">{challenge.desc}</p>
              </div>
            ))}
          </div>

          {/* Vendor Breakdown */}
          <h3 className="text-xl font-bold text-white mb-4">The Vendor Chaos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {vendorProblems.map((vendor, i) => (
              <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 font-bold text-sm">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <div>
                    <p className="text-white font-semibold">{vendor.vendor}</p>
                    <p className="text-slate-500 text-sm">{vendor.role}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {vendor.issues.map((issue, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
            <p className="text-slate-300 italic">
              "When a report showed wrong numbers, we'd spend a week just figuring out which vendor was responsible. By the time we fixed it, the data was already stale and we'd have to start over."
            </p>
            <p className="text-slate-500 text-sm mt-2">— VP of Operations</p>
          </div>
        </div>

        {/* The Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">The Solution</h2>
          <p className="text-slate-400 mb-8">{solution.description}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {solution.components.map((component, i) => (
              <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 font-bold text-sm">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{component.title}</h3>
                </div>
                <p className="text-slate-400 mb-4">{component.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {component.technologies.map((tech, j) => (
                    <span key={j} className="px-3 py-1 bg-violet-500/10 text-violet-400 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Architecture Overview</h2>
          <div className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-xl">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              {architecture.layers.map((layer, i) => (
                <div key={i} className="flex-1">
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-2 bg-violet-500/20 text-violet-400 text-sm font-semibold rounded-lg">
                      {layer.name}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {layer.items.map((item, j) => (
                      <div key={j} className="p-3 bg-slate-800/50 rounded-lg text-center">
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  {i < architecture.layers.length - 1 && (
                    <div className="hidden md:flex justify-center mt-4">
                      <span className="text-violet-400">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Project Timeline</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((phase, i) => (
              <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl relative">
                <span className="absolute -top-3 -left-3 w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-violet-400 text-sm font-semibold mb-1">{phase.duration}</p>
                <h3 className="text-lg font-semibold text-white mb-2">{phase.phase}</h3>
                <p className="text-slate-400 text-sm">{phase.activities}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 mt-6">Total Project Duration: ~16 weeks</p>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>
          <div className="grid md:grid-cols-4 gap-4">
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

        {/* Quote */}
        <div className="mb-16 p-8 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 rounded-2xl">
          <p className="text-xl text-slate-300 italic mb-4">
            "We went from waiting a week for reports that might be wrong, to getting real-time dashboards we actually trust. More importantly, we own our data now — no more vendor finger-pointing."
          </p>
          <p className="text-slate-400">— VP of Operations</p>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Trapped in Vendor Dependency?</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how a unified data lakehouse can give you control over your data and eliminate costly vendor coordination.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <GradientButton href="/contact">Schedule a Consultation</GradientButton>
            <Link href="/services/data-engineering" className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:border-violet-500 transition-colors">
              Learn About Data Engineering
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
