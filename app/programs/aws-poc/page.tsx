import { CheckCircle2 } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';

export const metadata = {
  title: 'AWS-Funded POC Program - PATHSDATA',
  description: 'Validate your AI vision with an AWS-funded proof-of-concept in 2-4 weeks. Free for startups and tech-first enterprises.',
};

const badges = ['AWS Select Tier Partner', 'AWS Funding Available', 'No Cost to Your Organization*', '2–4 Week Delivery'];

const journeySteps = [
  { n: '1', title: 'Program Eligibility', desc: "We begin by confirming your startup's stage, focus area, and readiness for AI-driven growth.", items: ['Confirm stage & focus', 'Validate startup readiness'] },
  { n: '2', title: 'Application', desc: 'A simple, streamlined application captures the essentials: your team, business problem, technology stack, and goals.', items: ['Quick online form'] },
  { n: '3', title: 'Discovery & Use Case Workshop', desc: 'An interactive session with our experts to map your business challenges to AI-driven solutions.', items: ['Workshop with founders', 'Map business problem → Gen AI / Agentic AI / Data solution', 'Define success criteria'] },
  { n: '4', title: 'POC Development', desc: 'Our team builds a working proof-of-concept using your data and constraints.', items: ['2-4 week delivery', 'Real data, real results', 'Production-ready architecture'] },
  { n: '5', title: 'Evaluation & Next Steps', desc: 'Review results, assess ROI, and plan the path to production.', items: ['Results presentation', 'Production roadmap', 'Scaling recommendations'] },
];

const whatYouGet = [
  { title: 'Working POC', desc: 'A functional proof-of-concept built with your actual data and business requirements.' },
  { title: 'Architecture Design', desc: 'Production-ready architecture documentation and recommendations.' },
  { title: 'ROI Analysis', desc: 'Clear metrics and business case for moving to production.' },
  { title: 'Expert Guidance', desc: 'Direct access to AWS-certified architects and AI/ML specialists.' },
];

export default function AWSPocPage() {
  return (
    <div className="py-12 px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] border border-slate-800/30 rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 px-8 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-sm">AWS Select Tier Consulting Partner · 2–4 week delivery</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">PATHSDATA</h1>
          <p className="text-slate-400 text-base mb-6">AWS Select Tier Consulting Partner</p>
          <h2 className="text-3xl font-bold text-white mb-1">Free AWS-Funded POC for Startups & Tech-First Enterprise</h2>
          <h3 className="text-xl mb-6"><GradientText>from Pre-Seed to Series B</GradientText></h3>
          <p className="text-lg text-white mb-2">Accelerate with Generative AI, Agentic AI, ML and Data Solutions on AWS</p>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re validating AI capabilities, testing ML models, or proving data architectures, we build working demonstrations using your data, your constraints, your reality. AWS funds the validation. We provide the expertise. You get certainty.
          </p>
          <div className="flex gap-6 justify-center mb-8">
            <GradientButton href="/contact">Start Your Free Assessment →</GradientButton>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-8 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />{badge}
              </span>
            ))}
          </div>
        </div>

        {/* Program Journey */}
        <div className="mb-16">
          <p className="text-violet-400 text-xs text-center mb-2">PROGRAM JOURNEY</p>
          <h3 className="text-3xl font-bold text-white text-center mb-2">How it Works</h3>
          <p className="text-slate-400 text-center mb-8">A structured path from idea validation to production-ready AI solutions</p>
          <div className="space-y-4">
            {journeySteps.map((step, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-violet-500/20 rounded-lg text-violet-400 text-sm font-bold flex-shrink-0">
                    {step.n}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                    <p className="text-slate-400 text-base mb-2">{step.desc}</p>
                    <ul className="space-y-1">
                      {step.items.map((item, j) => (
                        <li key={j} className="text-slate-500 text-xs flex items-center gap-2">
                          <span className="w-1 h-1 bg-violet-400 rounded-full" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">What You Get</h3>
          <div className="grid grid-cols-2 gap-4">
            {whatYouGet.map((item, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Ready for Your Free AWS-Funded POC?</h3>
          <p className="text-slate-400 mb-6">Start with a free assessment to see if your project qualifies for AWS funding.</p>
          <GradientButton href="/contact">Start Your Free Assessment</GradientButton>
          <p className="text-slate-500 text-xs mt-4">*Subject to AWS program eligibility requirements</p>
        </div>
      </div>
    </div>
  );
}
