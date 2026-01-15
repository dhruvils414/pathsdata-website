import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => (
  <footer className="py-12 px-4 bg-slate-950 border-t border-slate-800/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-8 mb-8">
        {/* Logo */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image src="/logo-white.png" alt="PATHSDATA" width={160} height={50} className="h-12 w-auto" />
          </Link>
          <p className="text-slate-500 text-sm">
            AWS Select Tier Consulting Partner specializing in AI, Data Engineering, and Cloud Solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/data-engineering" className="text-slate-400 hover:text-white">Data Engineering</Link></li>
            <li><Link href="/services/ai-ml" className="text-slate-400 hover:text-white">AI & Machine Learning</Link></li>
            <li><Link href="/services/generative-ai" className="text-slate-400 hover:text-white">Generative AI</Link></li>
            <li><Link href="/services/mlops" className="text-slate-400 hover:text-white">MLOps</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-white font-semibold mb-4">AWS Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/programs/aws-poc" className="text-slate-400 hover:text-white">POC Program</Link></li>
            <li><Link href="/programs/ai-assessment" className="text-slate-400 hover:text-white">AI Assessment</Link></li>
            <li><Link href="/programs/aws-map" className="text-slate-400 hover:text-white">AWS MAP</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/case-studies" className="text-slate-400 hover:text-white">Case Studies</Link></li>
            <li><Link href="/blog" className="text-slate-400 hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="text-slate-400 hover:text-white">Contact</Link></li>
            <li><Link href="/privacy" className="text-slate-400 hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800 flex justify-between items-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} PATHSDATA LLC. All rights reserved.</p>
        <a href="https://www.linkedin.com/company/pathsdata/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);
