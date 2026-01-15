import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BarChart3, ArrowRight, Eye, Users, Zap, Target } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Business Intelligence Services | AWS Select Tier Consulting Partner',
  description: 'Transform data into actionable insights with modern BI solutions. Dashboards, KPIs, self-service analytics, and embedded reporting on AWS.',
  keywords: ['Business Intelligence', 'BI', 'Dashboards', 'Analytics', 'QuickSight', 'Tableau', 'KPIs', 'Reporting'],
  alternates: {
    canonical: `${siteConfig.url}/services/business-intelligence`,
  },
};

const challenges = [
  {
    title: 'Report Bottlenecks',
    desc: 'Every report request goes through IT, creating backlogs and delays in getting insights to decision-makers.',
  },
  {
    title: 'Spreadsheet Chaos',
    desc: 'Critical decisions made on Excel files emailed around — no single source of truth.',
  },
  {
    title: 'Vanity Metrics',
    desc: 'Dashboards full of charts that look nice but don\'t drive action or business outcomes.',
  },
  {
    title: 'Slow Insights',
    desc: 'By the time reports are ready, the data is stale and the opportunity has passed.',
  },
];

const solutions = [
  {
    title: 'Executive Dashboards',
    desc: 'Real-time visibility into KPIs that matter. Clean, actionable dashboards designed for C-suite decision making.',
    technologies: ['Amazon QuickSight', 'Tableau', 'Power BI', 'Looker'],
  },
  {
    title: 'Self-Service Analytics',
    desc: 'Empower business users to explore data without IT. Governed data models with drag-and-drop interfaces.',
    technologies: ['QuickSight Q', 'Semantic Layer', 'SPICE', 'Athena'],
  },
  {
    title: 'Embedded Analytics',
    desc: 'White-label dashboards embedded directly in your product. Give customers insights without building from scratch.',
    technologies: ['QuickSight Embedding', 'Tableau Embedded', 'API Integration'],
  },
  {
    title: 'Operational Reporting',
    desc: 'Automated daily/weekly reports delivered to stakeholders. Scheduled refreshes with alerting on anomalies.',
    technologies: ['Scheduled Reports', 'Email Delivery', 'Slack Integration', 'Alerts'],
  },
];

const benefits = [
  { icon: Eye, title: 'Real-Time Visibility', desc: 'Live dashboards that reflect your business as it happens, not last month.' },
  { icon: Users, title: 'Self-Service', desc: 'Business users get answers without waiting on IT or data teams.' },
  { icon: Zap, title: '10x Faster Reports', desc: 'What used to take days now takes minutes with proper data infrastructure.' },
  { icon: Target, title: 'Actionable Insights', desc: 'Dashboards designed to drive decisions, not just display data.' },
];

const useCases = [
  {
    industry: 'E-commerce',
    use: 'Sales performance dashboard with real-time revenue, conversion rates, and inventory alerts.',
  },
  {
    industry: 'SaaS',
    use: 'Product analytics dashboard tracking user engagement, feature adoption, and churn signals.',
  },
  {
    industry: 'Healthcare',
    use: 'Operational dashboard for patient flow, bed utilization, and staffing optimization.',
  },
  {
    industry: 'Finance',
    use: 'Portfolio performance dashboard with risk metrics, compliance tracking, and client reporting.',
  },
];

const process = [
  { n: '1', title: 'Requirements Discovery', desc: 'Interview stakeholders to understand decision-making needs. Map KPIs to business outcomes.' },
  { n: '2', title: 'Data Modeling', desc: 'Design semantic layer and data models. Ensure consistent metrics and definitions across org.' },
  { n: '3', title: 'Dashboard Development', desc: 'Build interactive dashboards with proper UX. Iterative design with user feedback.' },
  { n: '4', title: 'Training & Adoption', desc: 'Train users on self-service capabilities. Drive adoption with documentation and support.' },
];

const technologies = [
  { category: 'BI Tools', items: ['Amazon QuickSight', 'Tableau', 'Power BI', 'Looker'] },
  { category: 'Data Layer', items: ['Athena', 'Redshift', 'SPICE', 'Semantic Models'] },
  { category: 'Features', items: ['QuickSight Q (NL)', 'Embedded Analytics', 'Alerts'] },
  { category: 'Integration', items: ['API Access', 'Slack', 'Email', 'SDK'] },
];

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Business Intelligence', href: '/services/business-intelligence' },
];

export default function BusinessIntelligencePage() {
  return (
    <>
      <ServiceJsonLd
        name="Business Intelligence Services"
        description="Transform data into actionable insights with modern BI solutions. Dashboards, KPIs, and self-service analytics."
        url={`${siteConfig.url}/services/business-intelligence`}
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
            
            <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Business Intelligence</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-2">
              Transform data into <GradientText>actionable insights</GradientText> that drive decisions
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Modern dashboards, self-service analytics, and embedded reporting that put insights in the hands of decision-makers.
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Challenges We Solve</h2>
            <p className="text-slate-400 text-center mb-8">Stop waiting for reports. Start making data-driven decisions.</p>
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
            <p className="text-slate-400 text-center mb-8">End-to-end BI solutions from data modeling to dashboard delivery.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-400 mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
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
                <div key={i} className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl text-center">
                  <benefit.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
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
                  <div className="w-2 bg-blue-500 rounded-full flex-shrink-0" />
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
            <div className="grid md:grid-cols-4 gap-4">
              {technologies.map((tech, i) => (
                <div key={i} className="p-4 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                  <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-3">{tech.category}</h3>
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
                  <span className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 mt-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Unlock Your Data's Potential?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's build dashboards that drive decisions, not just display data.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <GradientButton href="/contact">Schedule a Consultation</GradientButton>
              <Link href="/programs/aws-poc" className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:border-blue-500 transition-colors inline-flex items-center gap-2">
                Explore Free AWS POC <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
