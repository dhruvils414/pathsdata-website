import { CheckCircle2 } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';

export const metadata = {
  title: 'AWS Migration Acceleration Program (MAP) - PATHSDATA',
  description: 'Migrate to AWS with confidence and funding. AWS MAP program provides tools, best practices, and financial credits.',
};

const badges = ['Up to 25% AWS Credits', 'Proven 3-Phase Methodology', 'Risk Reduction', 'Expert Guidance'];

const phases = [
  { n: '1', title: 'Assess', desc: 'Evaluate your current environment, build the business case, and create a migration plan.', items: ['Portfolio discovery', 'TCO analysis', 'Migration readiness assessment'] },
  { n: '2', title: 'Mobilize', desc: 'Build the foundation for migration success with AWS best practices.', items: ['Landing zone setup', 'Security baseline', 'Operations readiness'] },
  { n: '3', title: 'Migrate & Modernize', desc: 'Execute the migration and optimize for the cloud.', items: ['Application migration', 'Database migration', 'Optimization & modernization'] },
];

const benefits = [
  { title: 'AWS Credits', desc: 'Up to 25% of your annual AWS spend in migration credits.' },
  { title: 'Proven Methodology', desc: 'AWS-validated 3-phase approach reduces risk and accelerates timelines.' },
  { title: 'Expert Support', desc: 'Access to AWS-certified architects and migration specialists.' },
  { title: 'Tools & Automation', desc: 'AWS migration tools and automation to simplify the process.' },
];

export default function AWSMapPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] border border-slate-800/30 rounded-full" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-sm">AWS Select Tier Consulting Partner · Migration Acceleration Program</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">Accelerate Your Migration</h1>
          <h2 className="text-xl mb-6"><GradientText>AWS Migration Acceleration Program (MAP)</GradientText></h2>
          <p className="text-lg text-white mb-2">Migrate to AWS with confidence—and funding</p>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            The AWS Migration Acceleration Program (MAP) provides tools, best practices, training, and financial credits to help you migrate to AWS faster, with less risk, and at lower cost.
          </p>
          <div className="flex gap-6 justify-center mb-8">
            <GradientButton href="/contact">Start Your Migration Assessment →</GradientButton>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />{badge}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-2">The 3-Phase Approach</h3>
          <p className="text-slate-400 text-center mb-8">AWS-validated methodology for successful migrations</p>
          <div className="grid grid-cols-3 gap-4">
            {phases.map((phase, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-violet-500/20 rounded-lg text-violet-400 text-sm font-bold mb-3">{phase.n}</span>
                <h4 className="text-white font-semibold mb-2">{phase.title}</h4>
                <p className="text-slate-400 text-sm mb-3">{phase.desc}</p>
                <ul className="space-y-1">
                  {phase.items.map((item, j) => (
                    <li key={j} className="text-slate-500 text-xs flex items-center gap-2">
                      <span className="w-1 h-1 bg-violet-400 rounded-full" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Program Benefits</h3>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((item, i) => (
              <div key={i} className="p-5 bg-slate-900/60 border border-slate-800/60 rounded-xl">
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">Ready to Start Your Migration?</h3>
          <p className="text-slate-400 mb-6">Get a free migration assessment and learn how AWS MAP can help.</p>
          <GradientButton href="/contact">Start Your Migration Assessment</GradientButton>
        </div>
      </div>
    </div>
  );
}
