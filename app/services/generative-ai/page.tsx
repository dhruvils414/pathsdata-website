import { Bot, CheckCircle2 } from 'lucide-react';
import { GradientButton } from '@/components/ui/buttons';

export const metadata = {
  title: 'Generative AI Services - PATHSDATA',
  description: 'Build RAG systems, AI agents, and custom LLM applications. Expert generative AI consulting on AWS.',
};

const capabilities = [
  'RAG (Retrieval Augmented Generation)',
  'Custom AI Agents & Assistants',
  'LLM Fine-tuning & Optimization',
  'Document Intelligence',
  'Conversational AI Interfaces',
  'Multi-modal AI Applications',
];

const technologies = ['Amazon Bedrock', 'Claude (Anthropic)', 'OpenAI', 'LangChain', 'Vector Databases', 'Amazon OpenSearch', 'Pinecone', 'MCP Protocol'];

export default function GenerativeAIPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-violet-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Bot className="w-8 h-8 text-violet-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Generative AI</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Build intelligent AI applications that understand, generate, and reason. From RAG systems to autonomous agents, we bring generative AI to your business.
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
              <span key={i} className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 rounded-full text-slate-300 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-400 mb-4">Ready to build with Generative AI?</p>
          <GradientButton href="/contact">Contact Us</GradientButton>
        </div>
      </div>
    </div>
  );
}
