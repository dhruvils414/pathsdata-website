'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const CONTACT_API_URL = 'https://icaltk5jj7.execute-api.us-east-2.amazonaws.com/website/contact_us';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.statusCode === 200) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: '',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-2 border border-slate-600 text-slate-300 rounded-lg hover:border-violet-500 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name *"
          required
          disabled={status === 'submitting'}
          className="w-full px-6 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 disabled:opacity-50 transition-colors"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address *"
          required
          disabled={status === 'submitting'}
          className="w-full px-6 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 disabled:opacity-50 transition-colors"
        />
      </div>
      
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company Name"
        disabled={status === 'submitting'}
        className="w-full px-6 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 disabled:opacity-50 transition-colors"
      />
      
      <select 
        name="interest"
        value={formData.interest}
        onChange={handleChange}
        disabled={status === 'submitting'}
        className="w-full px-6 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-slate-400 focus:outline-none focus:border-violet-500 disabled:opacity-50 transition-colors"
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
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us about your project... *"
        rows={5}
        required
        disabled={status === 'submitting'}
        className="w-full px-6 py-3 bg-slate-900/60 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 disabled:opacity-50 resize-none transition-colors"
      />
      
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white rounded-full hover:opacity-90 transition-opacity text-sm font-medium disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
      
      <p className="text-slate-500 text-xs text-center">
        We typically respond within 24 hours
      </p>
    </form>
  );
}
