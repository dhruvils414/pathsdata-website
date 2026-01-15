'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Linkedin } from 'lucide-react';

export const Navigation = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  return (
    <header className="w-full bg-slate-950 border-b border-slate-800/50 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo-white.png" alt="PATHSDATA" width={220} height={70} className="h-16 w-auto" />
        </Link>
        
        <nav className="flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="dropdown-container">
            <button className={`dropdown-trigger text-sm flex items-center gap-1 ${isActive('/services') ? 'text-violet-400' : 'text-slate-300 hover:text-white'}`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="dropdown-menu">
              <div className="bg-slate-900 border border-slate-800 rounded-lg shadow-xl py-2">
                <Link href="/services/data-engineering" className="block px-6 py-3 hover:bg-slate-800">
                  <p className="text-white font-medium text-sm">Data Engineering</p>
                  <p className="text-slate-400 text-xs">Cloud-native data platforms</p>
                </Link>
                <Link href="/services/business-intelligence" className="block px-6 py-3 hover:bg-slate-800">
                  <p className="text-white font-medium text-sm">Business Intelligence</p>
                  <p className="text-slate-400 text-xs">Dashboards & KPIs</p>
                </Link>
                <Link href="/services/ai-ml" className="block px-6 py-3 hover:bg-slate-800">
                  <p className="text-white font-medium text-sm">AI & Machine Learning</p>
                  <p className="text-slate-400 text-xs">Predictive models</p>
                </Link>
                <Link href="/services/generative-ai" className="block px-6 py-3 hover:bg-slate-800">
                  <p className="text-white font-medium text-sm">Generative AI</p>
                  <p className="text-slate-400 text-xs">RAG & AI agents</p>
                </Link>
                <Link href="/services/mlops" className="block px-6 py-3 hover:bg-slate-800">
                  <p className="text-white font-medium text-sm">MLOps</p>
                  <p className="text-slate-400 text-xs">ML pipelines</p>
                </Link>
                <Link href="/services/cloud-migration" className="block px-6 py-3 hover:bg-slate-800">
                  <p className="text-white font-medium text-sm">Cloud Migration</p>
                  <p className="text-slate-400 text-xs">AWS migrations</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Programs Dropdown */}
          <div className="dropdown-container">
            <button className={`dropdown-trigger text-sm flex items-center gap-1 ${isActive('/programs') ? 'text-violet-400' : 'text-slate-300 hover:text-white'}`}>
              AWS Programs <ChevronDown className="w-4 h-4" />
            </button>
            <div className="dropdown-menu">
              <div className="bg-slate-900 border border-slate-800 rounded-lg shadow-xl py-2">
                <Link href="/programs/aws-poc" className="block px-6 py-3 hover:bg-slate-800">
                  <p className="text-white font-medium text-sm">Free AWS-Funded POC</p>
                  <p className="text-slate-400 text-xs">Pre-Seed to Series B</p>
                </Link>
                <Link href="/programs/ai-assessment" className="block px-6 py-3 hover:bg-slate-800">
                  <p className="text-white font-medium text-sm">AI Blueprint</p>
                  <p className="text-slate-400 text-xs">For startups</p>
                </Link>
                <Link href="/programs/aws-map" className="block px-6 py-3 hover:bg-slate-800">
                  <p className="text-white font-medium text-sm">Accelerate Migration</p>
                  <p className="text-slate-400 text-xs">AWS MAP program</p>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/case-studies" className={`text-sm ${isActive('/case-studies') ? 'text-violet-400' : 'text-slate-300 hover:text-white'}`}>
            Case Studies
          </Link>
          
          <Link href="/blog" className={`text-sm ${isActive('/blog') ? 'text-violet-400' : 'text-slate-300 hover:text-white'}`}>
            Blog
          </Link>
          
          <a href="https://www.linkedin.com/company/pathsdata/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2]">
            <Linkedin className="w-5 h-5" />
          </a>
          
          <Link href="/contact" className="px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white rounded-full text-sm hover:opacity-90">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};
