import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Bot, CheckCircle2, ArrowRight, Zap, Shield, Brain, MessageSquare } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Generative AI Services | AWS Select Tier Consulting Partner',
  description: 'Build production-ready Generative AI solutions with Amazon Bedrock. RAG systems, AI agents, custom LLM applications, and enterprise chatbots.',
  keywords: ['Generative AI', 'Amazon Bedrock', 'RAG', 'AI Agents', 'LLM', 'Claude', 'ChatGPT', 'Enterprise AI'],
  alternates: {
    canonical: `${siteConfig.url}/services/generative-ai`,
  },
};

const challenges = [
  {
    title: 'LLM Hallucinations',
    desc: 'Generic AI models give inaccurate answers because they lack your company\'s specific knowledge and context.',
  },
  {
    title: 'Data Security',
    desc: 'Worried about sending sensitive data to third-party AI services and losing control of your information.',
  },
  {
    title: 'Integration Complexity',
    desc: 'Struggling to connect AI capabilities with your existing systems, databases, and workflows.',
  },
  {
    title: 'Cost at Scale',
    desc: 'Token costs explode as usage grows, making AI initiatives unsustainable without optimization.',
  },
];

const solutions = [
  {
    title: 'RAG Systems (Retrieval Augmented Generation)',
    desc: 'Ground LLM responses in your company\'s actual data. Connect to documents, databases, and knowledge bases for accurate, cited answers.',
    technologies: ['Amazon Bedrock', 'OpenSearch', 'Pinecone', 'Knowledge Bases', 'S3'],
  },
  {
    title: 'AI Agents & Automation',
    desc: 'Build autonomous AI agents that can reason, plan, and take actions. Automate complex workflows with multi-step reasoning.',
    technologies: ['Bedrock Agents', 'LangChain', 'MCP', 'Step Functions', 'Lambda'],
  },
  {
    title: 'Enterprise Chatbots & Assistants',
    desc: 'Deploy intelligent chatbots for customer support, internal help desks, and domain-specific Q&A with proper guardrails.',
    technologies: ['Claude', 'Amazon Lex', 'Connect', 'Kendra', 'API Gateway'],
  },
  {
    title: 'Custom LLM Applications',
    desc: 'Build bespoke AI applications tailored to your business — from document processing to code generation to creative tools.',
    technologies: ['Claude 3.5', 'Llama', 'Titan', 'Cohere', 'Stability AI'],
  },
];

const benefits = [
  { icon: Brain, title: 'Grounded Responses', desc: 'RAG ensures AI answers are based on your actual data, not hallucinations.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Your data stays in your AWS account. No third-party API calls with sensitive info.' },
  { icon: Zap, title: 'Production Ready', desc: 'We build for scale — proper error handling, monitoring, and cost controls.' },
  { icon: MessageSquare, title: 'Domain Expertise', desc: 'AI that understands your industry terminology and business context.' },
];

const useCases = [
  {
    title: 'Customer Support Automation',
    desc: 'AI chatbot that resolves 70%+ of support tickets by searching your knowledge base and previous resolutions.',
  },
  {
    title: 'Document Intelligence',
    desc: 'Extract insights from contracts, reports, and emails. Summarize, compare, and answer questions about documents.',
  },
  {
    title: 'Code Assistant',
    desc: 'Internal copilot trained on your codebase, documentation, and coding standards for faster development.',
  },
  {
    title: 'Sales Intelligence',
    desc: 'AI that analyzes calls, emails, and CRM data to surface insights and automate follow-ups.',
  },
];

const process = [
  { n: '1', title: 'Use Case Discovery', desc: 'Identify high-impact Gen AI opportunities. Define success metrics and ROI expectations.' },
  { n: '2', title: 'Data & Architecture', desc: 'Design RAG architecture, knowledge base structure, and integration points with your systems.' },
  { n: '3', title: 'Build & Iterate', desc: 'Develop, test, and refine with real users. Prompt engineering and guardrails optimization.' },
  { n: '4', title: 'Deploy & Monitor', desc: 'Production deployment with proper observability, cost tracking, and continuous improvement.' },
];

const technologies = [
  { category: 'Foundation Models', items: ['Claude 3.5', 'Llama 3', 'Titan', 'Cohere'] },
  { category: 'Vector DB', items: ['OpenSearch', 'Pinecone', 'pgvector', 'Chroma'] },
  { category: 'Orchestration', items: ['Bedrock Agents', 'LangChain', 'MCP'] },
  { category: 'AWS Services', items: ['Bedrock', 'Kendra', 'SageMaker', 'Lambda'] },
];

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Generative AI', href: '/services/generative-ai' },
];

export default function GenerativeAIPage() {
  return (
    <>
      <ServiceJsonLd
        name="Generative AI Services"
        description="Build production-ready Generative AI solutions with Amazon Bedrock. RAG systems, AI agents, and custom LLM applications."
        url={`${siteConfig.url}/services/generative-ai`}
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
            
            <div className="w-20 h-20 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="w-10 h-10 text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Generative AI</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-2">
              Build <GradientText>production-ready AI solutions</GradientText> with Amazon Bedrock
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              RAG systems, AI agents, and custom LLM applications that deliver real business value — not just demos.
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Challenges We Solve</h2>
            <p className="text-slate-400 text-center mb-8">Moving from ChatGPT experiments to production AI is hard. We make it easy.</p>
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
            <h2 className="text-3xl font-bold text-white mb-2 text-center">What We Build</h2>
            <p className="text-slate-400 text-center mb-8">Enterprise-grade Gen AI solutions powered by Amazon Bedrock.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-400 mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">
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
                <div key={i} className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl text-center">
                  <benefit.icon className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl flex gap-4">
                  <div className="w-2 bg-emerald-500 rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{useCase.title}</h3>
                    <p className="text-slate-400 text-sm">{useCase.desc}</p>
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
                  <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-3">{tech.category}</h3>
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
                  <span className="absolute -top-3 -left-3 w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 mt-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Link */}
          <div className="mb-16 p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-emerald-400 text-sm font-semibold">CASE STUDY</span>
                <h3 className="text-xl font-bold text-white mt-1">Fatevision LLC — Gen AI Astrology Platform</h3>
                <p className="text-slate-400 text-sm mt-2">POC delivered in 4 weeks using Amazon Bedrock and RAG for personalized readings.</p>
              </div>
              <Link href="/case-studies/fatevision" className="px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-2 whitespace-nowrap">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Gen AI Solution?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how Generative AI can transform your business. Start with a free AWS-funded POC.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <GradientButton href="/contact">Schedule a Consultation</GradientButton>
              <Link href="/programs/aws-poc" className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:border-emerald-500 transition-colors inline-flex items-center gap-2">
                Explore Free AWS POC <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
