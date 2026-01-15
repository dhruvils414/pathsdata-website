# PATHSDATA Website - SEO Guide

## ✅ Technical SEO (Already Implemented)

- [x] Sitemap.xml (`/sitemap.xml`)
- [x] Robots.txt (`/robots.txt`)
- [x] JSON-LD Structured Data (Organization, LocalBusiness, Service, Article, FAQ, Breadcrumb)
- [x] Meta tags (title, description, keywords)
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Canonical URLs
- [x] PWA manifest

## 📋 Pre-Launch Checklist

### 1. **Update Configuration**
- [ ] Update `lib/seo-config.ts` with your actual domain
- [ ] Add real phone number and address
- [ ] Update social media links

### 2. **Create Required Images**
Place these in `/public`:
- [ ] `favicon.ico` (32x32)
- [ ] `icon.svg` (SVG favicon)
- [ ] `apple-touch-icon.png` (180x180)
- [ ] `icon-192.png` (192x192 for PWA)
- [ ] `icon-512.png` (512x512 for PWA)
- [ ] `og-image.png` (1200x630 - main social share image)
- [ ] Service-specific OG images for each page

### 3. **Setup Analytics & Search Console**
1. Create Google Analytics 4 property
2. Add `NEXT_PUBLIC_GA_ID` to `.env.local`
3. Submit site to Google Search Console
4. Verify ownership and submit sitemap
5. Add Bing Webmaster Tools (optional)

### 4. **Performance Optimization**
```bash
npm install @next/bundle-analyzer sharp
```
- [ ] Optimize all images (use WebP/AVIF)
- [ ] Enable image lazy loading
- [ ] Test Core Web Vitals with Lighthouse
- [ ] Target scores: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 🚀 Ongoing SEO Strategy

### Content Marketing (Blog)
Write blog posts targeting these keywords:
- "AWS data engineering consulting"
- "RAG systems Amazon Bedrock"
- "Apache Iceberg tutorial"
- "MLOps AWS SageMaker"
- "Generative AI enterprise"
- "Data lake architecture AWS"

**Content Calendar:**
- 2-4 blog posts per month
- Focus on long-tail keywords
- Include case studies and how-to guides

### Local SEO (Georgia)
- [ ] Create Google Business Profile
- [ ] Add to AWS Partner Directory
- [ ] Get listed on Clutch.co, G2, etc.
- [ ] Target keywords: "AWS consulting Atlanta", "AI consulting Georgia"

### Backlink Strategy
1. **Guest Posts** - Write for AWS blogs, Data Engineering publications
2. **Partner Links** - Get linked from AWS Partner pages
3. **Industry Directories** - AI/ML consulting directories
4. **Case Studies** - Get clients to link back

### Social Signals
- Share blog posts on LinkedIn
- Engage in AWS communities
- Post on Reddit (r/aws, r/dataengineering)

---

## 📊 SEO Tools to Use

### Free Tools
- Google Search Console (monitor rankings)
- Google Analytics (track traffic)
- Google PageSpeed Insights (performance)
- Lighthouse (Core Web Vitals)

### Paid Tools (Recommended)
- Ahrefs or SEMrush (keyword research, backlinks)
- Screaming Frog (technical audits)
- Surfer SEO (content optimization)

---

## 🎯 Target Keywords by Page

| Page | Primary Keyword | Secondary Keywords |
|------|-----------------|-------------------|
| Home | AWS consulting partner | AI consulting, data engineering services |
| Data Engineering | data engineering consulting | AWS data lake, ETL pipeline services |
| AI/ML | AI consulting services | machine learning consulting, predictive analytics |
| Generative AI | generative AI consulting | RAG systems, Amazon Bedrock consulting |
| MLOps | MLOps consulting | ML pipeline, model deployment AWS |
| Cloud Migration | AWS migration services | cloud migration consulting, AWS MAP |
| AWS POC | AWS POC program | AI proof of concept, startup AI program |

---

## 📈 KPIs to Track

1. **Organic Traffic** - Monthly visitors from search
2. **Keyword Rankings** - Position for target keywords
3. **Domain Authority** - Ahrefs/Moz DA score
4. **Backlinks** - Number of referring domains
5. **Core Web Vitals** - LCP, FID, CLS scores
6. **Conversion Rate** - Contact form submissions

---

## 🔧 Quick Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Analyze bundle size
ANALYZE=true npm run build

# Generate sitemap (automatic on build)
npm run build

# Test lighthouse scores
npx lighthouse https://pathsdata.com --view
```

---

## Need Help?

For SEO questions or implementation help, refer to:
- [Next.js SEO Documentation](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
