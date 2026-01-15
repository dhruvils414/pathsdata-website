import { Sparkles, CheckCircle2 } from 'lucide-react';
import { GradientButton } from '@/components/ui/buttons';

export const metadata = {
  title: 'AI & Machine Learning Services - PATHSDATA',
  description: 'Build predictive models and ML solutions on AWS. Expert AI/ML consulting for real business impact.',
};

const capabilities = [
  'Predictive Analytics & Forecasting',
  'Computer Vision Solutions',
  'Natural Language Processing',
  'Recommendation Systems',
  'Anomaly Detection',
  'Custom ML Model Development',
];

const technologies = ['Amazon SageMaker', 'AWS Lambda', 'Amazon Comprehend', 'Amazon Rekognition', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'MLflow'];

export default function AIMLPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-violet-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">AI & Machine Learning</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Turn data into predictions and insights. We build custom ML models that solve real business problems and deliver measurable ROI.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 text-center">What We Build</h2>
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-4 bg-slate-900/60 border border-slate-800/60 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <span className="text-slate-300">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <span key={i} className="px-6 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-slate-300 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-400 mb-4">Ready to leverage AI/ML for your business?</p>
          <GradientButton href="/contact">Contact Us</GradientButton>
        </div>
      </div>
    </div>
  );
}
