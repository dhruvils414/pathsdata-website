import { Metadata } from 'next';
import { Mail, MapPin } from 'lucide-react';
import { WebPageJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with PATHSDATA for AI, Data Engineering, and Cloud Solutions consulting. Schedule a free consultation today.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact PATHSDATA',
    description: 'Get in touch for AI, Data Engineering, and Cloud Solutions consulting.',
    url: `${siteConfig.url}/contact`,
    type: 'website',
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
];

export default function ContactPage() {
  return (
    <>
      <WebPageJsonLd
        title="Contact PATHSDATA"
        description="Get in touch with PATHSDATA for AI, Data Engineering, and Cloud Solutions consulting."
        url={`${siteConfig.url}/contact`}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <div className="py-16 px-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-slate-800/80 rounded-full text-slate-400 text-sm mb-4 border border-slate-700/50">
              Contact Us
            </span>
            <h1 className="text-3xl font-bold text-white mb-2">Let&apos;s Start a Conversation</h1>
            <p className="text-slate-400">Ready to transform your business with AI and data solutions?</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-slate-900/60 border border-slate-800/60 rounded-xl text-center">
              <Mail className="w-6 h-6 text-violet-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Email</p>
              <a href="mailto:poc@pathsdata.com" className="text-slate-400 text-xs hover:text-violet-400">
                poc@pathsdata.com
              </a>
            </div>
            <div className="p-4 bg-slate-900/60 border border-slate-800/60 rounded-xl text-center">
              <MapPin className="w-6 h-6 text-violet-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Location</p>
              <p className="text-slate-400 text-xs">Austin, TX</p>
            </div>
          </div>

          <form className="space-y-4" action="#" method="POST">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="w-full px-4 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />
            <select 
              name="interest"
              className="w-full px-4 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-slate-400 focus:outline-none focus:border-violet-500"
            >
              <option value="">What are you interested in?</option>
              <option value="data-engineering">Data Engineering</option>
              <option value="ai-ml">AI & Machine Learning</option>
              <option value="genai">Generative AI</option>
              <option value="bi">Business Intelligence</option>
              <option value="mlops">MLOps</option>
              <option value="cloud-migration">Cloud Migration</option>
              <option value="aws-poc">AWS POC Program</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full px-4 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 resize-none"
            />
            <button
              type="submit"
              className="w-full px-4 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
