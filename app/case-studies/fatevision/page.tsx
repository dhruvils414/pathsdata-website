import { CheckCircle2, Sparkles, Brain, Zap, Users, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';

export const metadata = {
  title: 'Fatevision LLC Case Study - Gen AI Astrology POC | PATHSDATA',
  description: 'How PATHSDATA delivered a POC for Fatevision LLC, building a Generative AI-powered astrology backend using Amazon Bedrock in just 4 weeks.',
};

const metrics = [
  { value: '4 Weeks', label: 'POC Delivery', icon: Clock },
  { value: 'Gen AI', label: 'Amazon Bedrock', icon: Brain },
  { value: '< 2s', label: 'Response Time', icon: Zap },
  { value: 'Production', label: 'Ready Architecture', icon: TrendingUp },
];

const challenges = [
  {
    title: 'Scalability Limitations',
    desc: 'Manual astrology readings couldn\'t scale beyond a few hundred users per day, limiting business growth.',
  },
  {
    title: 'Consistency & Quality',
    desc: 'Human-generated readings varied in quality and tone, creating inconsistent user experiences.',
  },
  {
    title: 'Real-Time Personalization',
    desc: 'Needed instant, personalized readings based on exact birth time, location, and planetary positions.',
  },
  {
    title: 'Cost Per Reading',
    desc: 'High cost of human astrologers made the freemium model unsustainable at scale.',
  },
];

const solutions = [
  {
    title: 'Amazon Bedrock Integration',
    desc: 'Leveraged Claude on Amazon Bedrock for nuanced, context-aware astrological interpretations with consistent quality.',
    icon: Brain,
  },
  {
    title: 'RAG-Powered Knowledge Base',
    desc: 'Built a comprehensive astrology knowledge base with Vedic, Western, and Chinese astrology traditions for accurate readings.',
    icon: Sparkles,
  },
  {
    title: 'Real-Time Ephemeris Engine',
    desc: 'Integrated Swiss Ephemeris for precise planetary position calculations at any given moment.',
    icon: Zap,
  },
  {
    title: 'Serverless Architecture',
    desc: 'AWS Lambda + API Gateway for auto-scaling infrastructure that handles traffic spikes during astrological events.',
    icon: TrendingUp,
  },
];

const features = [
  'Personalized daily, weekly, and monthly horoscopes',
  'Detailed birth chart (natal chart) analysis',
  'Compatibility readings for relationships',
  'Transit and progression forecasts',
  'Vedic astrology (Jyotish) interpretations',
  'Chinese zodiac integration',
  'Moon phase and eclipse predictions',
  'Career and financial guidance readings',
  'Personalized gemstone recommendations',
  'Lucky dates and timing suggestions',
];

const techStack = [
  { category: 'AI/ML', items: ['Amazon Bedrock', 'Claude 3.5 Sonnet', 'RAG Pipeline', 'Prompt Engineering'] },
  { category: 'Backend', items: ['Python', 'FastAPI', 'AWS Lambda', 'API Gateway'] },
  { category: 'Data', items: ['Swiss Ephemeris', 'PostgreSQL', 'Redis Cache', 'S3'] },
  { category: 'Infrastructure', items: ['AWS CDK', 'CloudWatch', 'Secrets Manager', 'WAF'] },
];

const timeline = [
  { phase: 'Discovery & Eligibility', duration: 'Week 1', desc: 'Astrology domain deep-dive, use case validation, POC scope definition' },
  { phase: 'Architecture & Design', duration: 'Week 1-2', desc: 'API design, prompt engineering strategy, RAG architecture planning' },
  { phase: 'Core Development', duration: 'Week 2-3', desc: 'Ephemeris integration, Bedrock setup, RAG pipeline implementation' },
  { phase: 'Testing & Demo', duration: 'Week 4', desc: 'Accuracy validation, performance testing, stakeholder demo' },
];

export default function FatevisionCaseStudy() {
  return (
    <div className="py-12 px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block px-8 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-base mb-6">
            Case Study · POC · Generative AI
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fatevision LLC
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            <GradientText>Gen AI-Powered Astrology Platform</GradientText>
          </p>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            How PATHSDATA delivered a proof-of-concept in just 4 weeks — building an intelligent 
            astrology backend that generates personalized horoscopes and birth chart readings using Amazon Bedrock and RAG.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric) => (
            <div key={metric.label} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl text-center">
              <metric.icon className="w-8 h-8 text-violet-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
              <p className="text-slate-400 text-sm">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Client Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">About Fatevision LLC</h2>
          <div className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Fatevision LLC is an innovative astrology technology startup aiming to democratize access to 
              personalized astrological guidance. Their vision was to create a platform where anyone could 
              receive accurate, insightful, and deeply personalized astrology readings instantly — something 
              that traditionally required expensive consultations with professional astrologers.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Fatevision partnered with PATHSDATA to validate their Gen AI concept. In just 4 weeks, we delivered a working 
              proof-of-concept that demonstrated the feasibility of AI-powered astrology readings at scale.
            </p>
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                <p className="text-slate-400">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Solution</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div key={solution.title} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                <solution.icon className="w-10 h-10 text-violet-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-slate-400">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Deep Dive */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Architecture Overview</h2>
          <div className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">How It Works</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      <p className="text-white font-medium">User Input</p>
                      <p className="text-slate-400 text-sm">Birth date, time, location, and reading type requested</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      <p className="text-white font-medium">Ephemeris Calculation</p>
                      <p className="text-slate-400 text-sm">Swiss Ephemeris computes exact planetary positions</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      <p className="text-white font-medium">RAG Retrieval</p>
                      <p className="text-slate-400 text-sm">Fetches relevant interpretations from astrology knowledge base</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <div>
                      <p className="text-white font-medium">AI Generation</p>
                      <p className="text-slate-400 text-sm">Claude synthesizes personalized reading with astrological context</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    <div>
                      <p className="text-white font-medium">Caching & Delivery</p>
                      <p className="text-slate-400 text-sm">Response cached for quick retrieval, delivered via API</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Key Technical Decisions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300"><strong className="text-white">Claude 3.5 Sonnet</strong> for nuanced, empathetic interpretations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300"><strong className="text-white">Vector embeddings</strong> for semantic search across 10,000+ interpretations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300"><strong className="text-white">Redis caching</strong> for sub-second response on repeated queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300"><strong className="text-white">Prompt versioning</strong> for A/B testing reading styles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300"><strong className="text-white">Guardrails</strong> to ensure responsible, non-deterministic language</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Delivered */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Features Delivered</h2>
          <div className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {techStack.map((stack) => (
              <div key={stack.category} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                <h3 className="text-sm font-semibold text-violet-400 uppercase tracking-wide mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-slate-300 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Project Timeline</h2>
          <div className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <div key={phase.phase} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-violet-400 font-semibold">{phase.duration}</span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 bg-violet-500 rounded-full mt-2 relative">
                    {index < timeline.length - 1 && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-12 bg-slate-700" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{phase.phase}</h3>
                    <p className="text-slate-400 text-sm">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800">
              <p className="text-slate-300">
                <strong className="text-white">Total POC Duration:</strong> 4 weeks from kickoff to working demo
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">POC Results & Validation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Business Validation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Proved <strong className="text-white">AI can match human astrologer quality</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Validated <strong className="text-white">95% cost reduction</strong> potential at scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Confirmed <strong className="text-white">freemium model feasibility</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Secured <strong className="text-white">investor confidence</strong> with working demo</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-violet-500/10 border border-violet-500/30 rounded-xl">
              <h3 className="text-lg font-semibold text-violet-400 mb-4">Technical Validation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Response time <strong className="text-white">under 2 seconds</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300"><strong className="text-white">Production-ready architecture</strong> documented</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300"><strong className="text-white">RAG accuracy validated</strong> by professional astrologers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Clear <strong className="text-white">scaling roadmap</strong> for production</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <div className="p-8 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/30 rounded-2xl text-center">
            <p className="text-xl md:text-2xl text-slate-200 italic mb-6 max-w-4xl mx-auto">
              "PATHSDATA delivered exactly what we needed. In just 4 weeks, they proved that 
              our vision was technically feasible. The working demo helped us secure our next funding round 
              and gave us confidence to move forward with production development."
            </p>
            <p className="text-white font-semibold">— Founder, Fatevision LLC</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Your Gen AI Solution?</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Whether it's astrology, healthcare, finance, or any domain — we can help you leverage 
            Generative AI to create intelligent, scalable solutions that delight your users.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <GradientButton href="/contact">Start Your Project</GradientButton>
            <GradientButton href="/programs/aws-poc">Explore Free AWS POC</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}
