import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { GradientText } from '@/components/ui/buttons';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Blog - AI, Data Engineering & Cloud Insights',
  description: 'Expert insights on AI, Machine Learning, Data Engineering, and AWS Cloud solutions. Stay updated with the latest trends and best practices.',
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: 'PATHSDATA Blog - AI & Data Engineering Insights',
    description: 'Expert insights on AI, Machine Learning, Data Engineering, and AWS Cloud solutions.',
    url: `${siteConfig.url}/blog`,
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'building-rag-systems-aws-bedrock',
    title: 'Building Production-Ready RAG Systems with AWS Bedrock',
    excerpt: 'Learn how to build scalable Retrieval Augmented Generation systems using Amazon Bedrock, Claude, and vector databases.',
    category: 'Generative AI',
    date: '2025-01-10',
    readTime: '15 min read',
  },
  {
    slug: 'apache-iceberg-data-lakehouse',
    title: 'Why Apache Iceberg is the Future of Data Lakehouses',
    excerpt: 'Discover how Apache Iceberg solves the challenges of traditional data lakes with ACID transactions, schema evolution, and time travel.',
    category: 'Data Engineering',
    date: '2025-01-05',
    readTime: '12 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-slate-800/80 rounded-full text-slate-400 text-sm mb-4 border border-slate-700/50">
            Blog
          </span>
          <h1 className="text-3xl font-bold text-white mb-2">
            Insights & <GradientText>Best Practices</GradientText>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Expert perspectives on AI, Data Engineering, and Cloud solutions from the PATHSDATA team.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl hover:border-violet-500/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="inline-block px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-slate-500 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-violet-400 transition-colors flex-shrink-0 mt-2" />
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-violet-500/10 to-slate-900/60 border border-violet-500/30 rounded-xl text-center">
          <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
          <p className="text-slate-400 mb-4">Get the latest insights on AI and data engineering delivered to your inbox.</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
