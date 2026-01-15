import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GradientButton } from '@/components/ui/buttons';

export const metadata = {
  title: 'Case Studies - PATHSDATA',
  description: 'See how PATHSDATA has helped organizations transform with AI and data solutions.',
};

const caseStudies = [
  {
    slug: 'fennec',
    industry: 'Hospitality & Entertainment',
    tags: ['Generative AI', 'Data Platform'],
    title: 'Pathsdata × Fennec',
    subtitle: 'AI-Powered Intelligence Platform for the Nightlife Industry',
    description: 'Fennec, the comprehensive operating system for the nightlife industry, partnered with Pathsdata to create an AI-powered intelligence platform that transforms how entertainment venues leverage data to drive profitability and customer satisfaction.',
    stats: [
      { value: 'Seconds', label: 'vs Hours for Insights' },
      { value: 'Natural Language', label: 'Query Interface' },
      { value: 'Real-time', label: 'Analytics' },
      { value: 'AI-Powered', label: 'Recommendations' },
    ],
    technologies: ['AWS', 'Amazon Bedrock', 'Claude', 'MCP', 'PostgreSQL'],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-6 py-2 bg-slate-800/80 rounded-full text-slate-400 text-sm mb-4 border border-slate-700/50">
            Case Studies
          </span>
          <h1 className="text-2xl font-bold text-white mb-2">Real Results for Real Businesses</h1>
          <p className="text-slate-400 text-sm">
            See how we&apos;ve helped organizations transform with AI and data solutions.
          </p>
        </div>

        <div className="space-y-6">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl hover:border-violet-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full">
                  {study.industry}
                </span>
                {study.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
              <p className="text-violet-400 text-sm mb-3">{study.subtitle}</p>
              <p className="text-slate-400 text-sm mb-4">{study.description}</p>

              <div className="grid grid-cols-4 gap-4 mb-4">
                {study.stats.map((stat, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <span className="text-sm font-bold text-white block">{stat.value}</span>
                    <span className="text-slate-500 text-xs">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800/40 text-slate-500 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="text-violet-400 text-sm inline-flex items-center gap-1 hover:text-violet-300"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {/* Placeholder */}
          <div className="p-6 bg-slate-900/40 border border-slate-800/40 border-dashed rounded-xl text-center">
            <p className="text-slate-500 text-sm">More case studies coming soon...</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-400 mb-4">Want to be our next success story?</p>
          <GradientButton href="/contact">Start Your AI Journey</GradientButton>
        </div>
      </div>
    </div>
  );
}
