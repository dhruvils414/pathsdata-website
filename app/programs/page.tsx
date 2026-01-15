import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { GradientText, GradientButton } from '@/components/ui/buttons';

export const metadata = {
  title: 'AWS Partner Programs - PATHSDATA | AWS Select Tier Consulting Partner',
  description: 'AWS-funded programs for startups and enterprises. POC validation, AI assessment, and migration acceleration.',
};

const programs = [
  {
    id: 'aws-poc',
    badge: 'POC Program',
    title: 'Free AWS-Funded POC',
    subtitle: 'For Startups & Tech-First Enterprises, Pre-Seed to Series B',
    desc: 'Build a working proof-of-concept using your data, your constraints, your reality. AWS funds the validation.',
    highlights: ['2-4 week delivery', 'No cost to you*', 'Production-ready architecture'],
  },
  {
    id: 'ai-assessment',
    badge: 'For Startups',
    title: 'AI Blueprint',
    subtitle: 'AWS-funded startup program',
    desc: 'Get a comprehensive AI readiness assessment and roadmap to transform your startup with AI.',
    highlights: ['Architecture review', 'AI opportunity mapping', 'Technical roadmap'],
  },
  {
    id: 'aws-map',
    badge: 'MAP Program',
    title: 'Accelerate Your Migration',
    subtitle: 'AWS Migration Acceleration Program',
    desc: 'Migrate to AWS faster with financial credits, proven methodology, and expert guidance.',
    highlights: ['Up to 25% AWS credits', '3-phase methodology', 'Risk reduction'],
  },
];

export default function ProgramsPage() {
  return (
    <div className="py-16 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          {/* AWS Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
            <Image src="/aws-partner-badge.png" alt="AWS" width={20} height={20} className="h-5 w-auto" />
            <span className="text-orange-400 font-semibold text-sm">AWS Select Tier Consulting Partner</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Accelerate Your</h1>
          <h2 className="text-4xl md:text-5xl font-bold"><GradientText>AI & Cloud Journey</GradientText></h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">AWS-funded programs to help you validate, build, and scale.</p>
        </div>

        <div className="space-y-6">
          {programs.map((program) => (
            <div key={program.id} className="p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl hover:border-violet-500/30 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full mb-3">{program.badge}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{program.title}</h3>
                  <p className="text-violet-400 text-base mb-2">{program.subtitle}</p>
                  <p className="text-slate-400 text-sm mb-4">{program.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {program.highlights.map((h, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-slate-500 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-violet-400" />{h}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={`/programs/${program.id}`} className="text-violet-400 text-sm inline-flex items-center gap-1 hover:gap-2 transition-all ml-6">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Not sure which program is right for you?</p>
          <GradientButton href="/contact">Let&apos;s Discuss</GradientButton>
        </div>
      </div>
    </div>
  );
}
