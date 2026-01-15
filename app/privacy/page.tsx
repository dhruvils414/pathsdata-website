export const metadata = {
  title: 'Privacy Policy - PATHSDATA',
  description: 'PATHSDATA privacy policy - how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: January 2025</p>
        </div>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p className="mb-3">
              We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us via email.
            </p>
            <p>This information may include:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Name and contact information</li>
              <li>Company name and job title</li>
              <li>Project requirements and business needs</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send you technical and service-related communications</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:poc@pathsdata.com" className="text-violet-400 hover:text-violet-300">
                poc@pathsdata.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
