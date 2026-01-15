import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Zap, Target, TrendingUp, Clock } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Services | AWS Select Tier Consulting Partner',
  description: 'Build production ML models that solve real business problems. Predictive analytics, computer vision, NLP, and recommendation systems on AWS.',
  keywords: ['Machine Learning', 'AI', 'SageMaker', 'Predictive Analytics', 'Computer Vision', 'NLP', 'AWS ML'],
  alternates: {
    canonical: `${siteConfig.url}/services/ai-ml`,
  },
};

const challenges = [
  {
    title: 'Models That Don\'t Deploy',
    desc: 'Your data science team builds great notebooks, but models never make it to production.',
  },
  {
    title: 'Poor Model Performance',
    desc: 'Models work in testing but fail in production with real-world data drift and edge cases.',
  },
  {
    title: 'Unclear ROI',
    desc: 'Hard to quantify the business value of ML investments or prioritize use cases.',
  },
  {
    title: 'Talent Gap',
    desc: 'Building an in-house ML team is expensive and takes years to mature.',
  },
];

const solutions = [
  {
    title: 'Predictive Analytics',
    desc: 'Forecast demand, predict churn, score leads, and anticipate equipment failures. Turn historical data into future insights.',
    technologies: ['SageMaker', 'XGBoost', 'Time Series', 'AutoML'],
  },
  {
    title: 'Computer Vision',
    desc: 'Automate visual inspection, document processing, object detection, and image classification for your business.',
    technologies: ['Rekognition', 'Textract', 'Custom Vision', 'YOLO'],
  },
  {
    title: 'Natural Language Processing',
    desc: 'Extract meaning from text — sentiment analysis, entity recognition, document classification, and semantic search.',
    technologies: ['Comprehend', 'Kendra', 'Embeddings', 'BERT'],
  },
  {
    title: 'Recommendation Systems',
    desc: 'Personalize customer experiences with product recommendations, content suggestions, and next-best-action engines.',
    technologies: ['Personalize', 'Collaborative Filtering', 'Content-Based'],
  },
];

const benefits = [
  { icon: Target, title: '85%+ Model Accuracy', desc: 'Rigorous feature engineering and validation for models that actually work.' },
  { icon: Clock, title: '3-6 Month Delivery', desc: 'From use case to production model with our proven methodology.' },
  { icon: Zap, title: 'Production Ready', desc: 'Not just notebooks — deployed, monitored, and maintained models.' },
  { icon: TrendingUp, title: 'Measurable ROI', desc: 'Clear metrics and business outcomes tied to every model.' },
];

const useCases = [
  {
    industry: 'Retail',
    use: 'Demand forecasting that reduced inventory costs by 20% and stockouts by 35%.',
  },
  {
    industry: 'Financial Services',
    use: 'Credit risk scoring with 40% improvement in default prediction accuracy.',
  },
  {
    industry: 'Healthcare',
    use: 'Patient readmission prediction enabling proactive intervention programs.',
  },
  {
    industry: 'Manufacturing',
    use: 'Predictive maintenance reducing unplanned downtime by 45%.',
  },
];

const process = [
  { n: '1', title: 'Problem Framing', desc: 'Define the business problem, success metrics, and data requirements. Ensure ML is the right solution.' },
  { n: '2', title: 'Data Preparation', desc: 'Clean, transform, and engineer features. Build reproducible data pipelines for training and inference.' },
  { n: '3', title: 'Model Development', desc: 'Experiment with algorithms, tune hyperparameters, and validate performance with proper holdout sets.' },
  { n: '4', title: 'Deploy & Monitor', desc: 'Production deployment with real-time monitoring, retraining triggers, and performance alerts.' },
];

const technologies = [
  { category: 'Platform', items: ['Amazon SageMaker', 'SageMaker Studio', 'Feature Store'] },
  { category: 'Frameworks', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost'] },
  { category: 'AWS AI Services', items: ['Rekognition', 'Textract', 'Comprehend', 'Personalize'] },
  { category: 'Data', items: ['S3', 'Glue', 'Athena', 'Feature Store'] },
];

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'AI & Machine Learning', href: '/services/ai-ml' },
];

export default function AIMLPage() {
  return (
    <>
      <ServiceJsonLd
        name="AI & Machine Learning Services"
        description="Build production ML models that solve real business problems. Predictive analytics, computer vision, NLP on AWS."
        url={`${siteConfig.url}/services/ai-ml`}
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
            
            <div className="w-20 h-20 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-amber-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI & Machine Learning</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-2">
              Build production ML models that <GradientText>solve real business problems</GradientText>
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From predictive analytics to computer vision — we build, deploy, and maintain ML solutions that deliver measurable ROI.
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Challenges We Solve</h2>
            <p className="text-slate-400 text-center mb-8">87% of ML projects never make it to production. We fix that.</p>
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
            <p className="text-slate-400 text-center mb-8">End-to-end ML solutions on Amazon SageMaker.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-400 mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full">
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
                <div key={i} className="p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl text-center">
                  <benefit.icon className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Proven Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl flex gap-4">
                  <div className="w-2 bg-amber-500 rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{useCase.industry}</h3>
                    <p className="text-slate-400 text-sm">{useCase.use}</p>
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
                  <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-wide mb-3">{tech.category}</h3>
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
                  <span className="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 mt-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Put ML to Work?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's identify high-impact ML opportunities and build models that deliver real business value.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <GradientButton href="/contact">Schedule a Consultation</GradientButton>
              <Link href="/programs/aws-poc" className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:border-amber-500 transition-colors inline-flex items-center gap-2">
                Explore Free AWS POC <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
