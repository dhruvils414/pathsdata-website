import Link from 'next/link';
import { Database, BarChart3, Sparkles, Bot, Settings, Cloud, ArrowRight } from 'lucide-react';
import { GradientText, GradientButton } from '@/components/ui/buttons';

export const metadata = {
  title: 'Services - PATHSDATA',
  description: 'AWS consulting services including Data Engineering, AI/ML, Generative AI, Business Intelligence, MLOps, and Cloud Migration.',
};

const services = [
  { id: 'data-engineering', icon: Database, title: 'Data Engineering', desc: 'Build scalable, cloud-native data platforms on AWS. Data lakes, warehouses, and ETL pipelines.' },
  { id: 'business-intelligence', icon: BarChart3, title: 'Business Intelligence', desc: 'Transform data into actionable insights with dashboards, KPIs, and self-service analytics.' },
  { id: 'ai-ml', icon: Sparkles, title: 'AI & Machine Learning', desc: 'Build predictive models and ML solutions that solve real business problems.' },
  { id: 'generative-ai', icon: Bot, title: 'Generative AI', desc: 'RAG systems, AI agents, and custom LLM applications powered by Amazon Bedrock.' },
  { id: 'mlops', icon: Settings, title: 'MLOps', desc: 'Operationalize ML at scale with automated pipelines, monitoring, and model management.' },
  { id: 'cloud-migration', icon: Cloud, title: 'Cloud Migration', desc: 'Migrate to AWS with confidence using proven methodologies and AWS-funded programs.' },
];

export default function ServicesPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-slate-800/80 rounded-full text-slate-400 text-sm mb-4 border border-slate-700/50">Our Services</span>
          <h1 className="text-3xl font-bold text-white mb-2">End-to-End AWS</h1>
          <h2 className="text-3xl font-bold"><GradientText>Consulting Services</GradientText></h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">From data engineering to AI/ML, we help you build and scale on AWS.</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} className="p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl hover:border-violet-500/30 transition-colors group">
              <service.icon className="w-10 h-10 text-violet-400 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
              <span className="text-violet-400 text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Not sure which service you need?</p>
          <GradientButton href="/contact">Let&apos;s Talk</GradientButton>
        </div>
      </div>
    </div>
  );
}
