import { CheckCircle2 } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';

export const metadata = {
  title: 'AI Blueprint - AWS-Funded Startup Program - PATHSDATA',
  description: 'Get a comprehensive AI readiness assessment for your startup. AWS-funded program for startups.',
};

const badges = ['For Startups', 'Architecture Review', '2-3 Weeks', '$0 Cost*'];

const deliverables = [
  { title: 'Current State Analysis', desc: 'Deep dive into your existing architecture, data assets, and technical capabilities.' },
  { title: 'AI Opportunity Map', desc: 'Identification of high-impact AI/ML use cases specific to your business.' },
  { title: 'Technical Roadmap', desc: 'Step-by-step plan to implement AI solutions on AWS.' },
  { title: 'ROI Projections', desc: 'Business case with expected outcomes and investment requirements.' },
];

export default function AIAssessmentPage() {
  return (
    <div className="py-12 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] border border-slate-800/30 rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 px-8 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-sm">AWS Select Tier Consulting Partner · For Startups</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">AI Blueprint</h1>
          <h2 className="text-xl mb-6"><GradientText>AWS-funded startup program</GradientText></h2>
          <p className="text-lg text-white mb-2">Is your startup ready for AI?</p>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Get a comprehensive review of your current architecture, identify high-impact AI/ML use cases, and receive a detailed roadmap to transform your startup with AI—all funded by AWS.
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

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">What You Get</h3>
          <div className="grid grid-cols-2 gap-4">
            {deliverables.map((item, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Ready to Get Your AI Blueprint?</h3>
          <p className="text-slate-400 mb-6">Start with a free consultation to see if your startup qualifies.</p>
          <GradientButton href="/contact">Start Your Free Assessment</GradientButton>
          <p className="text-slate-500 text-xs mt-4">*Subject to AWS program eligibility requirements</p>
        </div>
      </div>
    </div>
  );
}
