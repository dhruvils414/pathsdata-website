import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Cloud, ArrowRight, DollarSign, Shield, Zap, Clock } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Cloud Migration Services | AWS Select Tier Consulting Partner',
  description: 'Migrate to AWS with confidence using proven methodologies and AWS-funded programs. Minimize risk, maximize ROI with expert cloud migration consulting.',
  keywords: ['Cloud Migration', 'AWS Migration', 'MAP Program', 'Data Center Migration', 'Cloud Modernization', 'Replatforming'],
  alternates: {
    canonical: `${siteConfig.url}/services/cloud-migration`,
  },
};

const challenges = [
  {
    title: 'Migration Risk',
    desc: 'Fear of downtime, data loss, or performance degradation during migration keeps you stuck on legacy systems.',
  },
  {
    title: 'Hidden Costs',
    desc: 'Cloud migrations often go over budget due to unexpected complexity and lack of proper planning.',
  },
  {
    title: 'Skill Gap',
    desc: 'Your team knows your current systems well but lacks deep AWS expertise for the migration.',
  },
  {
    title: 'Business Continuity',
    desc: 'Can\'t afford extended downtime — need to keep business running during the transition.',
  },
];

const solutions = [
  {
    title: 'Assessment & Planning',
    desc: 'Comprehensive analysis of your current infrastructure, applications, and dependencies. Build a migration roadmap with clear timelines and costs.',
    technologies: ['AWS Migration Hub', 'Application Discovery', 'TSO Logic', 'Migration Evaluator'],
  },
  {
    title: 'Rehost (Lift & Shift)',
    desc: 'Move applications to AWS with minimal changes for quick wins. Ideal for time-sensitive migrations or legacy applications.',
    technologies: ['AWS MGN', 'CloudEndure', 'VM Import', 'EC2'],
  },
  {
    title: 'Replatform',
    desc: 'Make cloud-optimized adjustments during migration — move to managed services like RDS, ECS, or EKS without full rewrite.',
    technologies: ['Amazon RDS', 'ECS', 'EKS', 'Aurora', 'ElastiCache'],
  },
  {
    title: 'Refactor / Modernize',
    desc: 'Rebuild applications to be cloud-native for maximum benefit. Containerization, serverless, and microservices architecture.',
    technologies: ['Lambda', 'Fargate', 'API Gateway', 'DynamoDB', 'Step Functions'],
  },
];

const benefits = [
  { icon: DollarSign, title: 'AWS MAP Credits', desc: 'Up to 25% AWS credits through Migration Acceleration Program funding.' },
  { icon: Shield, title: 'Zero Data Loss', desc: 'Proven methodologies and tools that ensure safe, complete data migration.' },
  { icon: Clock, title: 'Minimal Downtime', desc: 'Live migration strategies that keep your business running during transition.' },
  { icon: Zap, title: '40% Cost Reduction', desc: 'Right-sizing, reserved instances, and cloud-native optimizations.' },
];

const migrationApproaches = [
  {
    approach: 'Rehost',
    description: 'Lift and shift — move as-is to AWS',
    bestFor: 'Quick migration, legacy apps, time-sensitive moves',
    timeline: '2-4 weeks per app',
  },
  {
    approach: 'Replatform',
    description: 'Minor optimizations — use managed services',
    bestFor: 'Databases, containers, reducing operational burden',
    timeline: '4-8 weeks per app',
  },
  {
    approach: 'Refactor',
    description: 'Re-architect for cloud-native',
    bestFor: 'Maximum cloud benefits, scalability, cost optimization',
    timeline: '2-4 months per app',
  },
  {
    approach: 'Retire/Replace',
    description: 'Decommission or use SaaS alternatives',
    bestFor: 'Outdated apps, available SaaS solutions',
    timeline: '1-2 weeks',
  },
];

const process = [
  { n: '1', title: 'Assess', desc: 'Discover and document your current environment. Identify dependencies, risks, and migration candidates.' },
  { n: '2', title: 'Mobilize', desc: 'Build migration plan, set up AWS landing zone, establish security baseline, and prepare teams.' },
  { n: '3', title: 'Migrate & Modernize', desc: 'Execute migration waves. Test, validate, and optimize each workload before cutover.' },
  { n: '4', title: 'Operate & Optimize', desc: 'Handoff to operations. Continuous optimization for cost, performance, and security.' },
];

const technologies = [
  { category: 'Discovery', items: ['Migration Hub', 'App Discovery', 'Migration Evaluator'] },
  { category: 'Migration', items: ['AWS MGN', 'DMS', 'DataSync', 'Transfer Family'] },
  { category: 'Compute', items: ['EC2', 'ECS', 'EKS', 'Lambda', 'Fargate'] },
  { category: 'Database', items: ['RDS', 'Aurora', 'DynamoDB', 'ElastiCache'] },
];

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Cloud Migration', href: '/services/cloud-migration' },
];

export default function CloudMigrationPage() {
  return (
    <>
      <ServiceJsonLd
        name="Cloud Migration Services"
        description="Migrate to AWS with confidence using proven methodologies and AWS-funded programs."
        url={`${siteConfig.url}/services/cloud-migration`}
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
            
            <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cloud Migration</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-2">
              Migrate to AWS with <GradientText>confidence and speed</GradientText>
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Proven methodologies, AWS-funded programs, and expert guidance to move your workloads to the cloud safely and efficiently.
            </p>
          </div>

          {/* AWS MAP Banner */}
          <div className="mb-16 p-8 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-orange-400 text-sm font-semibold">AWS MIGRATION ACCELERATION PROGRAM</span>
                <h3 className="text-2xl font-bold text-white mt-1">Get Up to 25% AWS Credits</h3>
                <p className="text-slate-400 text-sm mt-2">Qualify for AWS-funded migration support through the MAP program.</p>
              </div>
              <Link href="/programs/aws-map" className="px-6 py-3 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-lg hover:bg-orange-500/20 transition-colors inline-flex items-center gap-2 whitespace-nowrap">
                Learn About MAP <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Challenges We Solve</h2>
            <p className="text-slate-400 text-center mb-8">Migration is complex. We've done it hundreds of times — you don't have to figure it out alone.</p>
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
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Migration Services</h2>
            <p className="text-slate-400 text-center mb-8">Right approach for each workload — from simple lift-and-shift to full modernization.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-400 mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
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
                <div key={i} className="p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl text-center">
                  <benefit.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Migration Approaches */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Migration Approaches (7 Rs)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {migrationApproaches.map((item, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">{item.approach}</h3>
                  <p className="text-white text-sm mb-3">{item.description}</p>
                  <p className="text-slate-400 text-xs mb-2"><strong>Best for:</strong> {item.bestFor}</p>
                  <p className="text-slate-500 text-xs"><strong>Timeline:</strong> {item.timeline}</p>
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
                  <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-3">{tech.category}</h3>
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
                  <span className="absolute -top-3 -left-3 w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 mt-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Cloud Journey?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's assess your migration readiness and build a plan to move to AWS safely and efficiently.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <GradientButton href="/contact">Schedule a Consultation</GradientButton>
              <Link href="/programs/aws-map" className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:border-cyan-500 transition-colors inline-flex items-center gap-2">
                Explore AWS MAP Program <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
