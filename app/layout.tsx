import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { OrganizationJsonLd, LocalBusinessJsonLd } from '@/components/seo/json-ld';
import { GoogleAnalytics } from '@/components/seo/analytics';
import { defaultMetadata } from '@/lib/seo-config';
import './globals.css';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* JSON-LD Structured Data */}
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen bg-slate-950 text-white">
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
