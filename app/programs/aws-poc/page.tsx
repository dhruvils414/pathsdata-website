import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Clock, Users, Shield, Zap, Database, Brain, Cloud, BarChart3, Cpu, MessageSquare, Factory, DollarSign } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Free AWS-Funded POC Program | PATHSDATA - AWS Select Tier Partner',
  description: 'Validate your AI vision with an AWS-funded proof-of-concept in 2-4 weeks. Free for startups and tech-first enterprises from Pre-Seed to Series B.',
  keywords: ['AWS POC', 'Proof of Concept', 'AI Validation', 'AWS Funding', 'Startup POC', 'Generative AI', 'Machine Learning'],
  alternates: {
    canonical: `${siteConfig.url}/programs/aws-poc`,
  },
};

const badges = [
  { text: 'AWS Select Tier Partner', icon: CheckCircle2 },
  { text: 'AWS Funding Available', icon: CheckCircle2 },
  { text: 'No Cost to Your Organization', icon: CheckCircle2 },
  { text: '2–4 Week Delivery', icon: Clock },
];

const journeySteps = [
  { 
    n: '1', 
    title: 'Program Eligibility', 
    desc: "We begin by confirming your startup's stage, focus area, and readiness for AI-driven growth. This ensures we tailor the program to your specific needs.", 
    items: ['Confirm stage & focus', 'Validate startup readiness'] 
  },
  { 
    n: '2', 
    title: 'Application', 
    desc: 'A simple, streamlined application captures the essentials: your team, business problem, technology stack, and goals.', 
    items: ['Quick online form'] 
  },
  { 
    n: '3', 
    title: 'Discovery & Use Case Workshop', 
    desc: 'An interactive session with our experts to map your business challenges to AI-driven solutions.', 
    items: ['Workshop with founders', 'Map business problem → Gen AI / Agentic AI / Data solution', 'Define success criteria'] 
  },
  { 
    n: '4', 
    title: 'Proof of Concept (POC)', 
    desc: 'Within 2–4 weeks, we help you build a quick-win prototype that demonstrates the impact of AI agents, LLM-powered applications, or intelligent data pipelines.', 
    items: ['Rapid 2–4 week build', 'Quick-win prototype', 'AWS credits + demo delivery'] 
  },
  { 
    n: '5', 
    title: 'Future State Planning', 
    desc: 'We guide you in designing a scalable architecture roadmap that ensures your AI & agent-based solutions can grow efficiently.', 
    items: ['Scalable architecture roadmap', 'TCO estimates & optimization', 'Governance, security & compliance guidance'] 
  },
];

const whatYouReceive = [
  { title: 'Technical Certainty', desc: 'A working demonstration that proves (or disproves) your approach' },
  { title: 'Implementation Roadmap', desc: 'Proof to production, with cost and timeline estimates' },
  { title: 'AWS Funding', desc: 'Implementation costs covered by AWS Partner Program' },
  { title: 'Stakeholder Confidence', desc: 'Evidence to support decision-making, not just recommendations' },
  { title: 'Risk Mitigation', desc: 'Issues identified and solved in POC, not in production' },
];

const weeklyProcess = [
  {
    week: 'Week 1',
    title: 'Discovery',
    desc: "We start by understanding what you need to prove. Not what technology you think you need—what business or technical question keeps your initiative from moving forward. In detailed technical conversations with your team, we identify the validation criteria that matter: performance thresholds, integration requirements, security constraints, cost parameters.",
    deliverables: ['Technical validation plan', 'Success criteria', 'AWS funding approval'],
  },
  {
    week: 'Week 1–2',
    title: 'Architecture',
    desc: "Our architects design a solution specific to your validation needs. We're not building a production system—we're building the minimum viable demonstration that answers your specific question. Real AWS infrastructure, actual data flows, working integrations, scoped appropriately for proof rather than scale.",
    deliverables: ['AWS architecture diagram', 'Implementation plan', 'Risk assessment'],
  },
  {
    week: 'Week 2–3',
    title: 'Build & Validate',
    desc: "We build the proof-of-concept in a dedicated AWS environment, integrated with your systems where appropriate. Validation happens continuously as we build—this is collaborative, not a big reveal at the end.",
    deliverables: ['Working POC environment', 'Integration demos', 'Performance benchmarks'],
  },
  {
    week: 'Week 4',
    title: 'Demonstration',
    desc: "We demonstrate the working proof-of-concept to your stakeholders. You'll see it work with your data, under your conditions. We transfer knowledge and provide complete documentation so you can confidently move forward.",
    deliverables: ['Stakeholder demo', 'Complete documentation', 'Production roadmap'],
  },
];

const validationTypes = [
  { icon: Brain, title: 'Intelligent Systems Validation', desc: 'AI/ML feasibility, predictive analytics, computer vision' },
  { icon: Cpu, title: 'Agentic AI Applications', desc: 'Autonomous agents, multi-step workflows, tool orchestration' },
  { icon: Cloud, title: 'Cloud Migration Confidence', desc: 'AWS migration viability, performance validation, cost modeling' },
  { icon: Database, title: 'Data Platform Validation', desc: 'Data warehouse/lake architecture, ETL performance, analytics' },
  { icon: Zap, title: 'Modern Application Architecture', desc: 'Microservices, serverless, containers, API patterns' },
  { icon: MessageSquare, title: 'Customer Experience Innovation', desc: 'Contact center AI, personalization, recommendation systems' },
  { icon: Factory, title: 'Industry-Specific Validation', desc: 'Healthcare, fintech, manufacturing, retail solutions' },
  { icon: DollarSign, title: 'Cost & Performance Optimization', desc: 'AWS optimization, right-sizing, architecture ROI' },
];

const whoWeServe = [
  {
    category: 'Emerging Companies',
    stage: 'Seed – Series B',
    personas: [
      { title: 'Technical Founders & CTOs', desc: 'Validate architectural decisions, AI feasibility, or security readiness before scaling or fundraising.' },
      { title: 'Growth & Product Leaders', desc: 'Prove new capabilities before engineering commitment.' },
      { title: 'Innovation Teams', desc: 'Accelerator and incubator cohorts needing validation to progress to next funding stages.' },
    ],
  },
  {
    category: 'Scale-Up Organizations',
    stage: '50–500 employees',
    personas: [
      { title: 'Engineering Leadership', desc: 'VPs and Directors solving scaling challenges.' },
      { title: 'Data & Analytics Leaders', desc: 'Validate data platform viability and outcomes.' },
      { title: 'Operations & Infrastructure', desc: 'Platform leads and DevOps directors needing operational validation.' },
    ],
  },
  {
    category: 'Enterprise Organizations',
    stage: '500+ employees',
    personas: [
      { title: 'Digital Transformation Leaders', desc: 'CIOs and Enterprise Architects proving modernization approaches.' },
      { title: 'Technical Program Managers', desc: 'Validate technical direction to de-risk initiatives and business cases.' },
      { title: 'Security & Compliance Directors', desc: 'Prove security architectures or audit readiness in regulated environments.' },
    ],
  },
];

const expertise = [
  { title: 'Cloud-Native Architecture', desc: 'Designed production systems processing billions of requests, storing petabytes of data, serving millions of users.' },
  { title: 'Data Engineering & Analytics', desc: 'Built platforms that ingested terabytes daily, powered BI for Fortune 500 companies, enabled rapid data science iteration.' },
  { title: 'Machine Learning Operations', desc: 'Productionized models for fraud detection, recommendation systems, predictive analytics, and computer vision.' },
  { title: 'Agentic AI & Automation', desc: 'Implemented autonomous AI agents for customer operations, research workflows, data orchestration, and decision support systems.' },
];

const eligibility = [
  { title: 'Technical Fit', desc: 'Your validation challenge aligns with AWS services and capabilities.' },
  { title: 'Scope Appropriateness', desc: 'Your question is answerable in 2–4 weeks of focused development.' },
  { title: 'AWS Commitment Potential', desc: 'Expected annual AWS spend of $100K+ post-validation, or clear path to that level.' },
  { title: 'Decision Authority', desc: 'You have authority to make infrastructure decisions based on POC results.' },
];

const faqs = [
  {
    q: 'Why does AWS fund these POCs?',
    a: "AWS invests in POCs to help companies adopt cloud technologies with confidence. By removing the financial barrier to validation, AWS enables more organizations to experience AWS capabilities directly—which often leads to long-term platform adoption.",
  },
  {
    q: "What if the POC proves our idea won't work?",
    a: "That's actually a success. The purpose of a POC is to validate or invalidate approaches before significant investment. Discovering limitations during a 4-week POC saves months of development time and substantial costs.",
  },
  {
    q: 'Do we have to work with PATHSDATA for production implementation?',
    a: "No. After the POC, you receive complete documentation, architecture diagrams, and implementation roadmaps. You can implement internally, engage us, or choose another partner—the knowledge transfer is clean and complete.",
  },
  {
    q: 'How do you ensure our data and intellectual property stay confidential?',
    a: "We sign NDAs before any technical discussions. All POC work happens in isolated AWS environments. Your data never leaves your control, and all intellectual property created during the POC belongs to you.",
  },
  {
    q: "What if we're already on AWS? Can we still get POC funding?",
    a: "Yes. AWS POC funding is about validating new workloads or capabilities, not about whether you're already an AWS customer. Existing AWS customers often qualify for POC funding for new initiatives.",
  },
  {
    q: 'How quickly can we start?',
    a: "Once we confirm eligibility and AWS funding approval, we can typically start within 1-2 weeks. The entire process from first conversation to POC completion is usually 5-6 weeks.",
  },
  {
    q: 'What happens if we need more than 4 weeks?',
    a: "Some validations require extended timelines. We scope POCs to answer specific questions within 4 weeks, but complex initiatives can be structured as phased POCs or follow-on engagements.",
  },
];

const industries = ['Technology & SaaS', 'Healthcare & Life Sciences', 'Financial Services', 'Manufacturing & Industrial', 'Retail & E-Commerce'];

export default function AWSPocPage() {
  return (
    <div className="py-12 px-8">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Hero */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border border-violet-500/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] border border-violet-500/20 rounded-full" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium">AWS Select Consulting Partner · 2–4 week delivery</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Free AWS-Funded POC for Startups & Tech-First Enterprise
          </h1>
          <h2 className="text-2xl mb-6">
            <GradientText>from Pre-Seed to Series B</GradientText>
          </h2>
          <p className="text-xl text-white mb-3">
            Accelerate with Generative AI, Agentic AI, ML and Data Solutions on AWS
          </p>
          <p className="text-slate-400 mb-8 max-w-3xl mx-auto text-lg">
            Whether you&apos;re validating AI capabilities, testing migration strategies, or proving security architectures, we build working demonstrations using your data, your constraints, your reality. <span className="text-white font-medium">AWS funds the validation. We provide the expertise. You get certainty.</span>
          </p>
          
          <div className="flex gap-4 justify-center mb-10 flex-wrap">
            <GradientButton href="/contact">Start Your Free Assessment</GradientButton>
            <Link href="/contact" className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:border-violet-500 transition-colors">
              Schedule Technical Discussion
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-5 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-sm text-slate-300">
                <badge.icon className="w-4 h-4 text-violet-400" />{badge.text}
              </span>
            ))}
          </div>
        </div>

        {/* Program Journey */}
        <div className="mb-20">
          <p className="text-violet-400 text-xs font-semibold tracking-widest text-center mb-2">PROGRAM JOURNEY</p>
          <h3 className="text-3xl font-bold text-white text-center mb-2">How it Works?</h3>
          <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">A structured path from idea validation to production-ready AI solutions</p>
          
          <div className="space-y-4">
            {journeySteps.map((step, i) => (
              <div key={i} className="p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl hover:border-violet-500/30 transition-colors">
                <div className="flex items-start gap-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl text-white font-bold flex-shrink-0">
                    {step.n}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-2">{step.title}</h4>
                    <p className="text-slate-400 mb-3">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.items.map((item, j) => (
                        <span key={j} className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/60 rounded-full text-slate-400 text-sm">
                          <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />{item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Receive */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-2">What You Receive</h3>
          <p className="text-slate-400 text-center mb-10">Tangible outcomes, not just recommendations</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {whatYouReceive.map((item, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-violet-500/10 border border-emerald-500/20 rounded-xl text-center">
            <p className="text-lg text-white font-semibold mb-2">Investment: $0</p>
            <p className="text-slate-400">Zero cost to your organization. AWS funds the POC through their Partner Program.</p>
          </div>
        </div>

        {/* The Process - Weekly Breakdown */}
        <div className="mb-20">
          <p className="text-violet-400 text-xs font-semibold tracking-widest text-center mb-2">THE PROCESS</p>
          <h3 className="text-3xl font-bold text-white text-center mb-2">From question to answer in four weeks</h3>
          <p className="text-slate-400 text-center mb-10">Detailed breakdown of each phase</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {weeklyProcess.map((phase, i) => (
              <div key={i} className="p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-violet-500/20 text-violet-400 text-sm font-semibold rounded-full">{phase.week}</span>
                  <h4 className="text-white font-semibold text-lg">{phase.title}</h4>
                </div>
                <p className="text-slate-400 text-sm mb-4">{phase.desc}</p>
                <div className="space-y-2">
                  {phase.deliverables.map((d, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Validate */}
        <div className="mb-20">
          <p className="text-violet-400 text-xs font-semibold tracking-widest text-center mb-2">WHAT WE VALIDATE</p>
          <h3 className="text-3xl font-bold text-white text-center mb-2">Turn technical questions into working answers</h3>
          <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">Every organization faces different validation challenges. We don&apos;t offer generic POCs—we build specific answers to your specific questions.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {validationTypes.map((type, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl hover:border-violet-500/30 transition-colors group">
                <type.icon className="w-8 h-8 text-violet-400 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-semibold mb-2">{type.title}</h4>
                <p className="text-slate-400 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate-400 mb-4">Not seeing your specific challenge?</p>
            <Link href="/contact" className="text-violet-400 hover:text-violet-300 inline-flex items-center gap-2">
              Schedule a technical discussion <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-20">
          <p className="text-violet-400 text-xs font-semibold tracking-widest text-center mb-2">WHO WE SERVE</p>
          <h3 className="text-3xl font-bold text-white text-center mb-2">Built for technical leaders making high-stakes decisions</h3>
          <p className="text-slate-400 text-center mb-10">We work with organizations at technical inflection points—where the next decision shapes the next three years.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {whoWeServe.map((segment, i) => (
              <div key={i} className="p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <h4 className="text-white font-bold text-lg mb-1">{segment.category}</h4>
                <p className="text-violet-400 text-sm mb-4">{segment.stage}</p>
                <div className="space-y-4">
                  {segment.personas.map((persona, j) => (
                    <div key={j}>
                      <p className="text-white font-medium text-sm">{persona.title}</p>
                      <p className="text-slate-400 text-xs">{persona.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <p className="text-slate-500 text-sm text-center mb-4">Industries we serve:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((ind, i) => (
                <span key={i} className="px-4 py-2 bg-slate-800/40 rounded-full text-slate-400 text-sm">{ind}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-20">
          <p className="text-violet-400 text-xs font-semibold tracking-widest text-center mb-2">TECHNICAL EXPERTISE</p>
          <h3 className="text-3xl font-bold text-white text-center mb-2">Experience you can verify. Expertise you can trust.</h3>
          <p className="text-slate-400 text-center mb-10">We&apos;re not staff augmentation—we&apos;re a team of senior AWS practitioners and data engineers who&apos;ve built production systems at scale.</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {expertise.map((exp, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{exp.title}</h4>
                <p className="text-slate-400 text-sm">{exp.desc}</p>
              </div>
            ))}
          </div>
          
          {/* AWS Partnership Credentials */}
          <div className="p-6 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <Image src="/aws-partner-badge.png" alt="AWS Partner" width={48} height={48} className="w-12 h-12" />
              <div>
                <h4 className="text-white font-bold">AWS Partnership Credentials</h4>
                <p className="text-orange-400 text-sm">AWS Select Tier Consulting Partner</p>
              </div>
            </div>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Deep capability across AWS AI/ML, Data, Application, and Security services</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Access to POC Funding Program</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Direct collaboration with AWS Solution Architects and account teams</li>
            </ul>
          </div>
        </div>

        {/* Eligibility & Investment */}
        <div className="mb-20">
          <p className="text-violet-400 text-xs font-semibold tracking-widest text-center mb-2">ELIGIBILITY & INVESTMENT</p>
          <h3 className="text-3xl font-bold text-white text-center mb-10">Who qualifies for AWS-funded validation</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {eligibility.map((item, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-violet-400 mb-3" />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl text-center">
              <Users className="w-8 h-8 text-violet-400 mx-auto mb-3" />
              <p className="text-white font-semibold mb-2">Your Investment</p>
              <p className="text-slate-400 text-sm">10–15 hours of your team&apos;s time across 4 weeks for requirements, data access, testing, and feedback.</p>
            </div>
            <div className="p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl text-center">
              <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-white font-semibold mb-2">Our Investment</p>
              <p className="text-slate-400 text-sm">Senior AWS architects, data engineers, ML specialists, project management, documentation, and knowledge transfer.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-xl text-center">
              <DollarSign className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <p className="text-white font-semibold mb-2">AWS Investment</p>
              <p className="text-slate-400 text-sm">AWS covers POC costs through their Partner Program—professional services, infrastructure, and development. <span className="text-orange-400 font-semibold">Zero cost to you.</span></p>
            </div>
          </div>
          
          {/* What Happens After */}
          <div className="mt-10 p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl">
            <h4 className="text-white font-semibold text-lg mb-4 text-center">What Happens After POC</h4>
            <p className="text-slate-400 text-center mb-6">You receive complete documentation, architecture diagrams, cost projections, and implementation roadmaps. What you do next is entirely your decision:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-800/40 rounded-lg">
                <p className="text-white font-medium">Implement Yourself</p>
                <p className="text-slate-500 text-sm">Everything needed to build internally</p>
              </div>
              <div className="text-center p-4 bg-slate-800/40 rounded-lg">
                <p className="text-white font-medium">Engage Us</p>
                <p className="text-slate-500 text-sm">Continue with accelerated delivery</p>
              </div>
              <div className="text-center p-4 bg-slate-800/40 rounded-lg">
                <p className="text-white font-medium">Choose Another Partner</p>
                <p className="text-slate-500 text-sm">Clean knowledge transfer</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-20">
          <div className="p-10 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20 rounded-2xl">
            <p className="text-violet-400 text-xs font-semibold tracking-widest text-center mb-2">START VALIDATION</p>
            <h3 className="text-3xl font-bold text-white text-center mb-4">From question to answer starts with conversation</h3>
            <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">We don&apos;t know if POC validation fits your situation until we understand your challenge. Let&apos;s have that conversation.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900/80 rounded-xl text-center">
                <p className="text-slate-500 text-sm mb-2">Option 1</p>
                <h4 className="text-white font-bold text-lg mb-3">Technical Assessment Call</h4>
                <p className="text-slate-400 text-sm mb-6">30-minute video conversation with one of our senior architects. We&apos;ll discuss your validation challenge, assess POC fit, explore AWS funding eligibility, and provide honest guidance.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-violet-500 text-violet-400 rounded-lg hover:bg-violet-500/10 transition-colors">
                  Schedule Technical Assessment <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-6 bg-slate-900/80 rounded-xl text-center">
                <p className="text-slate-500 text-sm mb-2">Option 2</p>
                <h4 className="text-white font-bold text-lg mb-3">Start Your Free Assessment</h4>
                <p className="text-slate-400 text-sm mb-6">Tell us about your validation needs and we&apos;ll respond within one business day with assessment and next steps.</p>
                <GradientButton href="/contact">Start Your Free Assessment</GradientButton>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-slate-500 text-sm mb-4">What Happens Next</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs">1</span>
                  Within 24 Hours — You&apos;ll hear from a senior architect
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs">2</span>
                  Technical Discussion — Explore your challenge in depth
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs">3</span>
                  Funding & Planning — Structure for AWS funding approval
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <p className="text-violet-400 text-xs font-semibold tracking-widest text-center mb-2">FAQ</p>
          <h3 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h3>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{faq.q}</h4>
                <p className="text-slate-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-slate-400 mb-2">Questions before starting?</p>
          <a href="mailto:poc@pathsdata.com" className="text-violet-400 hover:text-violet-300 font-medium">poc@pathsdata.com</a>
          <p className="text-slate-500 text-sm mt-4">Real people, technical expertise, straightforward answers.</p>
        </div>
      </div>
    </div>
  );
}
