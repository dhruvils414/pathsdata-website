import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import { WebPageJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | AWS Select Tier Consulting Partner',
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

      <div className="py-16 px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-10">
            {/* AWS Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <Image src="/aws-partner-badge.png" alt="AWS" width={20} height={20} className="h-5 w-auto" />
              <span className="text-orange-400 font-semibold text-sm">AWS Select Tier Consulting Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Let&apos;s Start a Conversation</h1>
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

          <ContactForm />
        </div>
      </div>
    </>
  );
}
