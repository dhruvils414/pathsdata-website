import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Fennec Case Study - AI-Powered Intelligence Platform',
  description: 'How PATHSDATA built an AI-powered intelligence platform for Fennec, transforming nightlife business intelligence with natural language analytics and real-time insights.',
  keywords: ['Fennec', 'AI Platform', 'Business Intelligence', 'Nightlife', 'Amazon Bedrock', 'Claude', 'MCP', 'Case Study'],
  alternates: {
    canonical: `${siteConfig.url}/case-studies/fennec`,
  },
  openGraph: {
    title: 'Fennec Case Study - PATHSDATA',
    description: 'AI-Powered Intelligence Platform for the Nightlife Industry',
    url: `${siteConfig.url}/case-studies/fennec`,
    type: 'article',
  },
};

const challenges = [
  { title: 'The Accessibility Gap', desc: 'Business leaders needed data analysts to write SQL queries for even basic questions. By the time reports arrived, insights were often outdated.' },
  { title: 'The Promotional Puzzle', desc: 'Determining which promotional strategies actually worked relied heavily on intuition, leaving significant revenue opportunities on the table.' },
  { title: 'The Speed Problem', desc: "Traditional BI tools couldn't provide real-time insights fast enough. Decision-makers needed answers in seconds, not hours or days." },
  { title: 'The Complexity Barrier', desc: 'BI tools often sat unused because they required specialized training. The tools designed to solve problems became problems themselves.' },
];

const solutions = [
  { title: 'Cloud-Native Foundation', desc: 'Built on AWS infrastructure with PostgreSQL, S3, and auto-scaling compute resources spanning multiple availability zones.' },
  { title: 'Conversational AI Interface', desc: 'Users ask business questions in plain English and receive sophisticated analytics in real-time. No SQL knowledge required.' },
  { title: 'MCP Innovation', desc: "Model Context Protocol enables AWS Bedrock's Claude to dynamically generate and execute database queries based on user intent." },
];

const features = [
  { title: 'Natural Language Business Intelligence', desc: 'Marketing managers who previously waited days for data can now explore promotional performance independently.' },
  { title: 'AI-Powered Promotion Optimization', desc: 'Analyzes historical performance to generate customized promotion recommendations with specific discount percentages, timing strategies, and predicted outcomes.' },
  { title: 'Real-Time Database Exploration', desc: 'Users explore database schemas and understand data structures through conversational queries without technical jargon.' },
  { title: 'Historical Performance Analytics', desc: 'Deep-dive analytical capabilities to examine trends, compare performance, and identify patterns that inform strategic planning.' },
];

const technologies = ['AWS Infrastructure', 'Amazon Bedrock', 'Claude (Anthropic)', 'PostgreSQL', 'Amazon S3', 'FastAPI', 'Chainlit', 'Model Context Protocol (MCP)', 'Infrastructure as Code'];

const transformations = [
  { from: 'Reactive', to: 'Predictive', desc: 'From analyzing what happened to predicting what will happen' },
  { from: 'Technical', to: 'Conversational', desc: 'From requiring SQL expertise to natural language queries' },
  { from: 'Generic', to: 'Hyper-Personalized', desc: 'From industry benchmarks to venue-specific recommendations' },
  { from: 'Siloed', to: 'Integrated', desc: 'From fragmented data to unified business intelligence' },
];

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Fennec', href: '/case-studies/fennec' },
];

export default function FennecCaseStudyPage() {
  return (
    <>
      <ArticleJsonLd
        title="Pathsdata × Fennec - AI-Powered Intelligence Platform"
        description="How Pathsdata built an AI-powered intelligence platform for Fennec, transforming nightlife business intelligence."
        url={`${siteConfig.url}/case-studies/fennec`}
        publishedTime="2024-12-01T00:00:00Z"
        modifiedTime="2025-01-01T00:00:00Z"
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link href="/case-studies" className="text-slate-400 text-sm inline-flex items-center gap-1 mb-6 hover:text-white">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Case Studies
          </Link>

          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-slate-800/80 rounded-full text-slate-400 text-sm mb-4 border border-slate-700/50">
              Case Study
            </span>
            <h1 className="text-2xl font-bold text-white mb-2">Pathsdata × Fennec</h1>
            <p className="text-slate-400 text-sm">AI-Powered Intelligence Platform for the Nightlife Industry</p>
          </div>

          {/* Hero Banner */}
          <div className="p-8 bg-gradient-to-r from-violet-500/10 to-slate-900/60 border border-violet-500/30 rounded-xl mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full">
                Hospitality & Entertainment Technology
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Transforming Data Chaos into Profitable Decisions</h2>
            <p className="text-slate-300">
              Fennec, the comprehensive operating system for the nightlife industry, partnered with Pathsdata to create an AI-powered intelligence platform that transforms how entertainment venues leverage data to drive profitability and customer satisfaction.
            </p>
          </div>

          {/* About Fennec */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">About Fennec</h2>
            <p className="text-slate-400 mb-4">
              Fennec isn&apos;t just another software tool—it&apos;s a complete operating system designed specifically for the unique challenges of the nightlife industry. As an all-in-one platform, Fennec provides a marketplace of hyper-personalized AI/ML-powered products and services that help nightlife businesses deliver exceptional customer experiences while improving retention, driving growth, streamlining workflows, and enhancing operational efficiency.
            </p>
            <p className="text-violet-300 italic">&quot;Turn data into decisions, and chaos into profits.&quot;</p>
          </div>

          {/* The Challenge */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">The Challenge</h2>
            <div className="grid grid-cols-2 gap-4">
              {challenges.map((item, i) => (
                <div key={i} className="p-4 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">The Pathsdata Solution</h2>
            <p className="text-slate-400 mb-6">
              Pathsdata created a conversational AI platform that transforms how users access business insights—eliminating technical barriers while providing enterprise-grade analytical capabilities.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {solutions.map((item, i) => (
                <div key={i} className="p-4 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
            <div className="space-y-3">
              {features.map((item, i) => (
                <div key={i} className="p-4 bg-slate-900/60 border border-slate-800/60 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Results & Impact</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <h3 className="text-violet-400 text-xs font-medium mb-3">OPERATIONAL TRANSFORMATION</h3>
                <ul className="space-y-2">
                  {['Order-of-magnitude improvements in access to business insights', 'Analyses that took hours now complete in seconds', 'Marketing managers independently access sophisticated analytics', 'Substantial improvements in promotion effectiveness'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400 text-xs">
                      <span className="w-1 h-1 bg-violet-400 rounded-full mt-1.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <h3 className="text-violet-400 text-xs font-medium mb-3">STRATEGIC BUSINESS VALUE</h3>
                <ul className="space-y-2">
                  {['Competitive differentiation with AI capabilities competitors cannot match', 'Revenue optimization through data-driven promotions and pricing', 'Operational efficiency—less time on reports, more time on insights', 'Democratized data access across all team members'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-400 text-xs">
                      <span className="w-1 h-1 bg-violet-400 rounded-full mt-1.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Industry Impact */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Industry Disruption</h2>
            <div className="grid grid-cols-4 gap-4">
              {transformations.map((item, i) => (
                <div key={i} className="p-4 bg-slate-900/60 border border-slate-800/60 rounded-xl text-center">
                  <p className="text-slate-500 text-xs mb-1">{item.from}</p>
                  <p className="text-white font-bold text-sm mb-2">→ {item.to}</p>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="p-6 bg-violet-500/10 border border-violet-500/30 rounded-xl mb-8">
            <p className="text-white text-lg italic mb-4">
              &quot;The collaboration between Pathsdata and Fennec represents more than a successful technology implementation. It marks the beginning of a new era in nightlife business intelligence.&quot;
            </p>
            <p className="text-slate-400 text-sm">
              By combining Fennec&apos;s deep understanding of industry needs with Pathsdata&apos;s technical excellence and innovative thinking, the partnership created a platform that genuinely transforms how businesses operate.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-slate-400 mb-4">Ready to transform your business with AI-powered intelligence?</p>
            <GradientButton href="/contact">Start Your AI Journey</GradientButton>
          </div>
        </div>
      </div>
    </>
  );
}
