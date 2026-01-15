import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Settings, ArrowRight, RefreshCw, Shield, Gauge, GitBranch } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'MLOps Services | AWS Select Tier Consulting Partner',
  description: 'Operationalize ML at scale with automated pipelines, model monitoring, and continuous training. Production-grade MLOps on AWS SageMaker.',
  keywords: ['MLOps', 'ML Pipeline', 'Model Monitoring', 'SageMaker', 'Model Deployment', 'CI/CD ML', 'Feature Store'],
  alternates: {
    canonical: `${siteConfig.url}/services/mlops`,
  },
};

const challenges = [
  {
    title: 'Manual Deployments',
    desc: 'Data scientists manually deploy models, leading to inconsistencies, errors, and deployment bottlenecks.',
  },
  {
    title: 'Model Drift',
    desc: 'Models degrade over time as data changes, but you have no visibility into when or why.',
  },
  {
    title: 'No Reproducibility',
    desc: 'Can\'t reproduce model training runs or track which version is in production.',
  },
  {
    title: 'Scaling Problems',
    desc: 'Managing one model is hard enough — managing dozens across teams is chaos.',
  },
];

const solutions = [
  {
    title: 'Automated ML Pipelines',
    desc: 'End-to-end pipelines that automate data prep, training, validation, and deployment. Push-button model updates.',
    technologies: ['SageMaker Pipelines', 'Step Functions', 'Kubeflow', 'MLflow'],
  },
  {
    title: 'Model Registry & Versioning',
    desc: 'Central repository for all models with version control, approval workflows, and lineage tracking.',
    technologies: ['SageMaker Model Registry', 'MLflow', 'Git LFS', 'DVC'],
  },
  {
    title: 'Model Monitoring & Observability',
    desc: 'Real-time monitoring for data drift, prediction quality, and infrastructure health. Automated alerts and retraining triggers.',
    technologies: ['SageMaker Model Monitor', 'CloudWatch', 'Evidently AI', 'Grafana'],
  },
  {
    title: 'Feature Store & Management',
    desc: 'Centralized feature repository ensuring consistency between training and inference. Feature versioning and discovery.',
    technologies: ['SageMaker Feature Store', 'Feast', 'Tecton', 'Hopsworks'],
  },
];

const benefits = [
  { icon: RefreshCw, title: 'Continuous Training', desc: 'Models automatically retrain when performance degrades or new data arrives.' },
  { icon: Shield, title: 'Governance & Compliance', desc: 'Full audit trail, model lineage, and approval workflows for regulated industries.' },
  { icon: Gauge, title: '10x Faster Deployments', desc: 'What used to take weeks now takes hours with automated pipelines.' },
  { icon: GitBranch, title: 'Full Reproducibility', desc: 'Every training run is versioned and reproducible — no more "it worked on my laptop".' },
];

const useCases = [
  {
    title: 'Financial Services',
    use: 'Automated credit model retraining with regulatory approval workflows and full audit trails.',
  },
  {
    title: 'E-commerce',
    use: 'Recommendation model pipeline that retrains weekly on new purchase data with A/B deployment.',
  },
  {
    title: 'Healthcare',
    use: 'Diagnostic model monitoring with drift detection and automatic rollback on quality degradation.',
  },
  {
    title: 'Manufacturing',
    use: 'Predictive maintenance pipeline that retrains on new sensor data with champion/challenger testing.',
  },
];

const process = [
  { n: '1', title: 'MLOps Assessment', desc: 'Evaluate current ML practices, identify gaps, and define target maturity level.' },
  { n: '2', title: 'Platform Design', desc: 'Design MLOps architecture — pipelines, registry, monitoring, feature store based on your needs.' },
  { n: '3', title: 'Implementation', desc: 'Build and configure MLOps infrastructure. Migrate existing models to new platform.' },
  { n: '4', title: 'Training & Enablement', desc: 'Train data science and ML engineering teams. Document processes and runbooks.' },
];

const technologies = [
  { category: 'Platform', items: ['SageMaker', 'Kubeflow', 'MLflow', 'Vertex AI'] },
  { category: 'Pipelines', items: ['SageMaker Pipelines', 'Step Functions', 'Airflow'] },
  { category: 'Monitoring', items: ['Model Monitor', 'CloudWatch', 'Evidently'] },
  { category: 'Infrastructure', items: ['EKS', 'Lambda', 'ECR', 'Terraform'] },
];

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'MLOps', href: '/services/mlops' },
];

export default function MLOpsPage() {
  return (
    <>
      <ServiceJsonLd
        name="MLOps Services"
        description="Operationalize ML at scale with automated pipelines, model monitoring, and continuous training on AWS."
        url={`${siteConfig.url}/services/mlops`}
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
            
            <div className="w-20 h-20 bg-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="w-10 h-10 text-pink-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">MLOps</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-2">
              <GradientText>Operationalize ML at scale</GradientText> with production-grade infrastructure
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Automated pipelines, model monitoring, and continuous training — because ML in production is an ongoing process, not a one-time deployment.
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Challenges We Solve</h2>
            <p className="text-slate-400 text-center mb-8">Getting models to production is just the beginning. Keeping them running is the hard part.</p>
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
            <p className="text-slate-400 text-center mb-8">Enterprise-grade MLOps infrastructure on AWS.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-400 mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-pink-500/10 text-pink-400 text-xs rounded-full">
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
                <div key={i} className="p-6 bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-xl text-center">
                  <benefit.icon className="w-10 h-10 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Industry Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, i) => (
                <div key={i} className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl flex gap-4">
                  <div className="w-2 bg-pink-500 rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{useCase.title}</h3>
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
                  <h3 className="text-xs font-semibold text-pink-400 uppercase tracking-wide mb-3">{tech.category}</h3>
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
                  <span className="absolute -top-3 -left-3 w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {step.n}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 mt-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Operationalize Your ML?</h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's build MLOps infrastructure that turns your ML experiments into production assets.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <GradientButton href="/contact">Schedule a Consultation</GradientButton>
              <Link href="/programs/aws-poc" className="px-6 py-3 border border-slate-600 text-white rounded-lg hover:border-pink-500 transition-colors inline-flex items-center gap-2">
                Explore Free AWS POC <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
