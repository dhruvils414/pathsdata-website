import Link from 'next/link';
import Image from 'next/image';
import { Database, BarChart3, Sparkles, Bot, Settings, Cloud, ArrowRight } from 'lucide-react';
import { GradientButton, SecondaryButton, GradientText } from '@/components/ui/buttons';
import { WebPageJsonLd, FAQJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata = {
  title: 'PATHSDATA - AWS Select Tier Consulting Partner | AI & Data Engineering',
  description: 'Transform complexity into clarity with PATHSDATA. AWS Select Tier Consulting Partner specializing in AI, Machine Learning, Data Engineering, and Cloud Solutions.',
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: 'PATHSDATA - AWS Select Tier Consulting Partner',
    description: 'Transform complexity into clarity with AI, Data Engineering, and Cloud Solutions.',
    url: siteConfig.url,
    type: 'website',
  },
};

const services = [
  { id: 'data-engineering', icon: Database, title: 'Data Engineering', desc: 'Cloud-native data platforms on AWS.' },
  { id: 'business-intelligence', icon: BarChart3, title: 'Business Intelligence', desc: 'Dashboards and KPIs.' },
  { id: 'ai-ml', icon: Sparkles, title: 'AI & Machine Learning', desc: 'Production ML models.' },
  { id: 'generative-ai', icon: Bot, title: 'Generative AI', desc: 'RAG & AI agents.' },
  { id: 'mlops', icon: Settings, title: 'MLOps', desc: 'ML pipelines.' },
  { id: 'cloud-migration', icon: Cloud, title: 'Cloud Migration', desc: 'AWS migrations.' },
];

const programs = [
  { id: 'aws-poc', title: 'Free AWS-Funded POC', desc: 'For Startups & Tech-First Enterprises, Pre-Seed to Series B', badge: 'POC Program' },
  { id: 'ai-assessment', title: 'AI Blueprint', desc: 'AWS-funded startup program', badge: 'For Startups' },
  { id: 'aws-map', title: 'Accelerate Your Migration', desc: 'AWS MAP program', badge: 'MAP Program' },
];

const faqs = [
  { question: 'What is PATHSDATA?', answer: 'PATHSDATA is an AWS Select Tier Consulting Partner specializing in AI, Data Engineering, and Cloud Solutions.' },
  { question: 'What services does PATHSDATA offer?', answer: 'We offer Data Engineering, Business Intelligence, AI & Machine Learning, Generative AI, MLOps, and Cloud Migration services.' },
];

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd 
        title="PATHSDATA - AWS Select Tier Consulting Partner"
        description="Transform complexity into clarity with AI, Data Engineering, and Cloud Solutions."
        url={siteConfig.url}
      />
      <FAQJsonLd faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-8 overflow-hidden">
        {/* Decorative dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-slate-600 rounded-full" />
          <div className="absolute top-[15%] right-[15%] w-1 h-1 bg-slate-600 rounded-full" />
          <div className="absolute top-[40%] left-[5%] w-1 h-1 bg-slate-500 rounded-full" />
          <div className="absolute top-[35%] right-[8%] w-1 h-1 bg-slate-600 rounded-full" />
          <div className="absolute bottom-[40%] left-[15%] w-1 h-1 bg-slate-600 rounded-full" />
          <div className="absolute bottom-[35%] right-[20%] w-1 h-1 bg-slate-500 rounded-full" />
        </div>
        
        {/* Curved line */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none">
          <svg viewBox="0 0 1440 200" fill="none" className="absolute bottom-0 w-full">
            <path d="M0 200 Q720 50 1440 200" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        <div className="text-center z-10">
          {/* AWS Partner Badge in Hero */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8">
            <Image 
              src="/aws-partner-badge.png" 
              alt="AWS Select Tier Services Partner" 
              width={24} 
              height={24}
              className="h-6 w-auto"
            />
            <span className="text-orange-400 font-semibold text-sm">AWS Select Tier Consulting Partner</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-white mb-2">
            Simplify the Journey.
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-8">
            <GradientText>Empower the Outcome.</GradientText>
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            PATHSDATA transforms complexity into clarity — helping you move forward with confidence.
          </p>
          <GradientButton href="/contact">Contact Us</GradientButton>
        </div>
      </section>

      {/* AWS Partner Badge - Prominent */}
      <section className="py-12 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="bg-gradient-to-r from-orange-500/10 via-slate-900/50 to-orange-500/10 border border-orange-500/20 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Image 
                src="/aws-partner-badge.png" 
                alt="AWS Select Tier Services Partner" 
                width={120} 
                height={120}
                className="h-24 w-auto"
              />
              <div className="text-center md:text-left">
                <p className="text-orange-400 text-sm font-semibold uppercase tracking-wide mb-1">Official Partner</p>
                <p className="text-white text-2xl md:text-3xl font-bold mb-2">AWS Select Tier Consulting Partner</p>
                <p className="text-slate-400">Amazon Web Services Partner Network · AI & Data Specialization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PATHSDATA Born */}
      <section className="py-16 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-slate-800/50 rounded-full text-slate-300 text-sm mb-8 border border-slate-700/50">
              Why PATHSDATA Born
            </span>
            <p className="text-3xl md:text-4xl text-white max-w-[1400px] mx-auto leading-relaxed">
              A strategic technology partner delivering{' '}
              <span className="px-3 py-1 border border-slate-600 rounded-lg text-indigo-300">real-world business</span>{' '}
              impact through premium consulting and AI solution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
              <span className="text-6xl font-light text-slate-700 mb-6 block">1</span>
              <h3 className="text-xl font-semibold text-white mb-4">Born from the Real Struggle</h3>
              <p className="text-slate-400 leading-relaxed">
                PATHSDATA wasn&apos;t born in a boardroom — it came from real-world frustration: too many tools, no alignment, wasted effort. We&apos;ve lived it — that&apos;s why we built a better way.
              </p>
            </div>
            
            <div className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
              <span className="text-6xl font-light text-slate-700 mb-6 block">2</span>
              <h3 className="text-xl font-semibold text-white mb-4">Experience Over Explanation</h3>
              <p className="text-slate-400 leading-relaxed">
                We don&apos;t overpromise or overcomplicate. We let people feel the difference — through clarity in our approach, honesty in our conversations, and calm in the chaos.
              </p>
            </div>
            
            <div className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
              <span className="text-6xl font-light text-slate-700 mb-6 block">3</span>
              <h3 className="text-xl font-semibold text-white mb-4">A Journey Brand, Not a Transaction Brand</h3>
              <p className="text-slate-400 leading-relaxed">
                We&apos;re not here to sell and disappear. PATHSDATA walks with you — as a partner, not a vendor. Our impact lasts because we build trust, not transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-14 px-8">
        <div className="max-w-[1600px] mx-auto text-center">
          <span className="inline-block px-5 py-2 bg-slate-800/50 rounded-full text-slate-300 text-sm mb-8 border border-slate-700/50">
            Our Vision
          </span>
          <p className="text-4xl md:text-5xl font-serif italic text-slate-300 leading-relaxed">
            To empower businesses to achieve outcomes effortlessly, while making their journey toward success easier at every step.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 bg-slate-800/50 rounded-full text-slate-300 text-sm mb-6 border border-slate-700/50">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              End-to-End AWS <GradientText>Consulting Services</GradientText>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl hover:border-violet-500/50 transition-colors"
              >
                <service.icon className="w-8 h-8 text-violet-400 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                <span className="text-violet-400 text-sm inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-14 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-5 py-2 bg-slate-800/50 rounded-full text-slate-300 text-sm mb-6 border border-slate-700/50">
              AWS Partner Programs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Accelerate Your <GradientText>AI & Cloud Journey</GradientText>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.id}
                href={`/programs/${program.id}`}
                className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl hover:border-emerald-500/50 transition-colors"
              >
                <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full mb-4">
                  {program.badge}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">{program.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{program.desc}</p>
                <span className="text-emerald-400 text-sm inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Let&apos;s discuss how we can help you achieve your AI and data goals.
        </p>
        <GradientButton href="/contact">Start a Conversation</GradientButton>
      </section>
    </>
  );
}
