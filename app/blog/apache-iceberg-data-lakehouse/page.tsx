import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, CheckCircle2, AlertTriangle, Lightbulb, Database, Layers, Clock3, GitBranch, Shield, Zap, ArrowRight } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Why Apache Iceberg is the Future of Data Lakehouses',
  description: 'Discover how Apache Iceberg solves the challenges of traditional data lakes with ACID transactions, schema evolution, time travel, and hidden partitioning. A comprehensive guide for data engineers.',
  keywords: [
    'Apache Iceberg',
    'Data Lakehouse',
    'Data Lake',
    'ACID Transactions',
    'Schema Evolution',
    'Time Travel',
    'AWS Glue',
    'Amazon Athena',
    'Apache Spark',
    'Data Engineering',
    'Delta Lake',
    'Apache Hudi',
  ],
  authors: [{ name: 'PATHSDATA Team' }],
  alternates: {
    canonical: `${siteConfig.url}/blog/apache-iceberg-data-lakehouse`,
  },
  openGraph: {
    title: 'Why Apache Iceberg is the Future of Data Lakehouses',
    description: 'Discover how Apache Iceberg solves data lake challenges with ACID transactions, schema evolution, and time travel.',
    url: `${siteConfig.url}/blog/apache-iceberg-data-lakehouse`,
    type: 'article',
    publishedTime: '2025-01-05T00:00:00Z',
    authors: ['PATHSDATA Team'],
    tags: ['Data Engineering', 'Apache Iceberg', 'Data Lakehouse'],
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Apache Iceberg Data Lakehouse', href: '/blog/apache-iceberg-data-lakehouse' },
];

const codeSnippets = {
  createTable: `-- Create an Iceberg table in AWS Glue Catalog
CREATE TABLE glue_catalog.analytics.events (
    event_id        STRING,
    user_id         STRING,
    event_type      STRING,
    event_timestamp TIMESTAMP,
    properties      MAP<STRING, STRING>,
    created_at      DATE
)
USING iceberg
PARTITIONED BY (days(event_timestamp), event_type)
LOCATION 's3://my-data-lake/analytics/events'
TBLPROPERTIES (
    'format-version' = '2',
    'write.metadata.compression-codec' = 'gzip'
);`,

  timeTravel: `-- Query data as it existed at a specific point in time
SELECT * FROM analytics.events
FOR SYSTEM_TIME AS OF TIMESTAMP '2025-01-01 00:00:00';

-- Query data at a specific snapshot
SELECT * FROM analytics.events
FOR SYSTEM_VERSION AS OF 1234567890;

-- View snapshot history
SELECT * FROM analytics.events.snapshots;

-- Rollback to a previous snapshot
CALL glue_catalog.system.rollback_to_snapshot(
    'analytics.events',
    1234567890
);`,

  schemaEvolution: `-- Add new columns (safe, backward compatible)
ALTER TABLE analytics.events
ADD COLUMNS (
    session_id STRING,
    device_type STRING
);

-- Rename columns (safe with Iceberg v2)
ALTER TABLE analytics.events
RENAME COLUMN properties TO event_properties;

-- Change column types (widening only)
ALTER TABLE analytics.events
ALTER COLUMN user_id TYPE BIGINT;

-- Drop columns (metadata only, no rewrite)
ALTER TABLE analytics.events
DROP COLUMN deprecated_field;`,

  partitionEvolution: `-- Original partitioning by day
CREATE TABLE events (...)
PARTITIONED BY (days(event_timestamp));

-- Evolve to hourly partitioning for recent data
-- (No data rewrite required!)
ALTER TABLE analytics.events
ADD PARTITION FIELD hours(event_timestamp);

-- Iceberg handles both partition schemes automatically
-- Old data: daily partitions
-- New data: hourly partitions
-- Queries work seamlessly across both`,

  sparkRead: `from pyspark.sql import SparkSession

# Configure Spark with Iceberg
spark = SparkSession.builder \\
    .appName("IcebergAnalytics") \\
    .config("spark.sql.catalog.glue_catalog", "org.apache.iceberg.spark.SparkCatalog") \\
    .config("spark.sql.catalog.glue_catalog.warehouse", "s3://my-data-lake/") \\
    .config("spark.sql.catalog.glue_catalog.catalog-impl", "org.apache.iceberg.aws.glue.GlueCatalog") \\
    .config("spark.sql.extensions", "org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions") \\
    .getOrCreate()

# Read Iceberg table
df = spark.read.format("iceberg").load("glue_catalog.analytics.events")

# Time travel query
df_historical = spark.read \\
    .option("as-of-timestamp", "2025-01-01 00:00:00") \\
    .format("iceberg") \\
    .load("glue_catalog.analytics.events")

# Incremental read (changes since last snapshot)
df_changes = spark.read \\
    .format("iceberg") \\
    .option("start-snapshot-id", "123456") \\
    .option("end-snapshot-id", "789012") \\
    .load("glue_catalog.analytics.events")`,

  mergeInto: `-- Upsert pattern with MERGE INTO
MERGE INTO analytics.events AS target
USING staging.new_events AS source
ON target.event_id = source.event_id
WHEN MATCHED THEN
    UPDATE SET *
WHEN NOT MATCHED THEN
    INSERT *;

-- Delete with conditions
DELETE FROM analytics.events
WHERE event_timestamp < TIMESTAMP '2024-01-01'
  AND event_type = 'debug';

-- Update specific records
UPDATE analytics.events
SET properties = map('status', 'processed')
WHERE event_id = 'evt_123';`,

  maintenance: `-- Expire old snapshots (keep last 5 days)
CALL glue_catalog.system.expire_snapshots(
    table => 'analytics.events',
    older_than => TIMESTAMP '2025-01-10 00:00:00',
    retain_last => 10
);

-- Remove orphan files
CALL glue_catalog.system.remove_orphan_files(
    table => 'analytics.events',
    older_than => TIMESTAMP '2025-01-01 00:00:00'
);

-- Compact small files
CALL glue_catalog.system.rewrite_data_files(
    table => 'analytics.events',
    options => map(
        'target-file-size-bytes', '134217728',  -- 128MB
        'min-input-files', '5'
    )
);

-- Rewrite manifests for faster planning
CALL glue_catalog.system.rewrite_manifests(
    'analytics.events'
);`
};

export default function IcebergBlogPost() {
  return (
    <>
      <ArticleJsonLd
        title="Why Apache Iceberg is the Future of Data Lakehouses"
        description="Discover how Apache Iceberg solves the challenges of traditional data lakes with ACID transactions, schema evolution, time travel, and hidden partitioning."
        url={`${siteConfig.url}/blog/apache-iceberg-data-lakehouse`}
        publishedTime="2025-01-05T00:00:00Z"
        modifiedTime="2025-01-14T00:00:00Z"
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      <article className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="text-slate-400 text-sm inline-flex items-center gap-1 mb-8 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                Data Engineering
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">
                Open Source
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Why Apache Iceberg is the Future of <GradientText>Data Lakehouses</GradientText>
            </h1>
            
            <p className="text-xl text-slate-400 mb-6">
              Discover how Apache Iceberg solves the challenges of traditional data lakes with ACID transactions, schema evolution, time travel, and hidden partitioning.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                PATHSDATA Team
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 5, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl">
            <h2 className="text-white font-semibold mb-4">Table of Contents</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#data-lake-problems" className="text-slate-400 hover:text-cyan-400 transition-colors">1. The Problems with Traditional Data Lakes</a></li>
              <li><a href="#what-is-iceberg" className="text-slate-400 hover:text-cyan-400 transition-colors">2. What is Apache Iceberg?</a></li>
              <li><a href="#key-features" className="text-slate-400 hover:text-cyan-400 transition-colors">3. Key Features That Set Iceberg Apart</a></li>
              <li><a href="#time-travel" className="text-slate-400 hover:text-cyan-400 transition-colors">4. Time Travel & Snapshot Isolation</a></li>
              <li><a href="#schema-evolution" className="text-slate-400 hover:text-cyan-400 transition-colors">5. Schema Evolution Without Pain</a></li>
              <li><a href="#comparison" className="text-slate-400 hover:text-cyan-400 transition-colors">6. Iceberg vs Delta Lake vs Hudi</a></li>
              <li><a href="#aws-integration" className="text-slate-400 hover:text-cyan-400 transition-colors">7. AWS Integration (Glue, Athena, EMR)</a></li>
              <li><a href="#best-practices" className="text-slate-400 hover:text-cyan-400 transition-colors">8. Production Best Practices</a></li>
            </ol>
          </nav>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            
            {/* Data Lake Problems */}
            <section id="data-lake-problems" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 text-sm">1</span>
                The Problems with Traditional Data Lakes
              </h2>
              
              <p className="text-slate-300 mb-4">
                Data lakes promised cheap, scalable storage for all your data. But anyone who&apos;s built one knows the reality: they often become &quot;data swamps&quot; — unreliable, hard to maintain, and slow to query.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    problem: 'No ACID Transactions',
                    desc: 'Concurrent writes corrupt data. Failed jobs leave partial results. No rollback capability.',
                    icon: Shield,
                  },
                  {
                    problem: 'Schema Chaos',
                    desc: 'Adding columns breaks readers. No safe way to evolve schemas. Data and metadata drift apart.',
                    icon: GitBranch,
                  },
                  {
                    problem: 'Partition Hell',
                    desc: 'Changing partition schemes requires full data rewrite. Users must know partitions to query efficiently.',
                    icon: Layers,
                  },
                  {
                    problem: 'Slow Queries',
                    desc: 'Full file listings on every query. No statistics for pruning. Small files kill performance.',
                    icon: Zap,
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-5 h-5 text-red-400" />
                      <h4 className="text-white font-semibold">{item.problem}</h4>
                    </div>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-300">
                These problems led to the rise of the <strong className="text-white">Data Lakehouse</strong> — an architecture that combines the flexibility of data lakes with the reliability of data warehouses. Apache Iceberg is the leading open table format making this possible.
              </p>
            </section>

            {/* What is Iceberg */}
            <section id="what-is-iceberg" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 text-sm">2</span>
                What is Apache Iceberg?
              </h2>

              <p className="text-slate-300 mb-4">
                Apache Iceberg is an <strong className="text-white">open table format</strong> for huge analytic datasets. Originally developed at Netflix to solve their petabyte-scale data lake challenges, it&apos;s now an Apache top-level project used by Apple, LinkedIn, Adobe, and thousands of companies worldwide.
              </p>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Table Format vs Storage Format</p>
                    <p className="text-slate-400 text-sm">Iceberg is a <em>table format</em>, not a storage format. Your data is still stored as Parquet, ORC, or Avro files. Iceberg adds a metadata layer that tracks which files belong to a table, their statistics, and how to read them.</p>
                  </div>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-xl mb-6">
                <h4 className="text-white font-medium mb-4 text-center">Iceberg Architecture</h4>
                <div className="space-y-4">
                  {/* Catalog Layer */}
                  <div className="p-3 bg-violet-500/10 border border-violet-500/30 rounded-lg text-center">
                    <p className="text-violet-400 font-medium text-sm">Catalog (AWS Glue / Hive / Nessie)</p>
                    <p className="text-slate-500 text-xs">Points to current metadata location</p>
                  </div>
                  
                  <div className="text-center text-slate-600">↓</div>
                  
                  {/* Metadata Layer */}
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                    <p className="text-cyan-400 font-medium text-sm text-center mb-2">Metadata Layer</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2 bg-slate-800/60 rounded text-center">
                        <p className="text-slate-300">metadata.json</p>
                        <p className="text-slate-500">Table schema, partitioning</p>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded text-center">
                        <p className="text-slate-300">Manifest List</p>
                        <p className="text-slate-500">Snapshot → manifests</p>
                      </div>
                      <div className="p-2 bg-slate-800/60 rounded text-center">
                        <p className="text-slate-300">Manifest Files</p>
                        <p className="text-slate-500">File paths + stats</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-slate-600">↓</div>
                  
                  {/* Data Layer */}
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-center">
                    <p className="text-emerald-400 font-medium text-sm">Data Files (S3)</p>
                    <p className="text-slate-500 text-xs">Parquet / ORC / Avro files organized by partition</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section id="key-features" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 text-sm">3</span>
                Key Features That Set Iceberg Apart
              </h2>

              <div className="space-y-4 mb-6">
                {[
                  {
                    icon: Shield,
                    title: 'ACID Transactions',
                    desc: 'Full serializable isolation. Concurrent writes are safe. Failed jobs don\'t corrupt data. Atomic commits across thousands of files.',
                    color: 'emerald',
                  },
                  {
                    icon: Clock3,
                    title: 'Time Travel',
                    desc: 'Query any previous version of your data. Audit changes. Reproduce ML experiments. Rollback bad writes instantly.',
                    color: 'violet',
                  },
                  {
                    icon: GitBranch,
                    title: 'Schema Evolution',
                    desc: 'Add, rename, drop, or reorder columns safely. No data rewrite required. Full compatibility tracking.',
                    color: 'cyan',
                  },
                  {
                    icon: Layers,
                    title: 'Hidden Partitioning',
                    desc: 'Users write queries without knowing partitions. Iceberg handles partition pruning automatically. Change partition schemes without rewriting data.',
                    color: 'amber',
                  },
                  {
                    icon: Zap,
                    title: 'Fast Query Planning',
                    desc: 'Column-level statistics in metadata. Prune files without opening them. O(1) file listing instead of O(n) directory scans.',
                    color: 'rose',
                  },
                ].map((feature, i) => (
                  <div key={i} className={`p-4 bg-${feature.color}-500/5 border border-${feature.color}-500/20 rounded-xl`}>
                    <div className="flex items-start gap-3">
                      <feature.icon className={`w-6 h-6 text-${feature.color}-400 mt-0.5 flex-shrink-0`} />
                      <div>
                        <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                        <p className="text-slate-400 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Creating an Iceberg Table</h3>
              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">SQL</span>
                  <span className="text-slate-500 text-xs">create_table.sql</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.createTable}</code>
                </pre>
              </div>
            </section>

            {/* Time Travel */}
            <section id="time-travel" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 text-sm">4</span>
                Time Travel & Snapshot Isolation
              </h2>

              <p className="text-slate-300 mb-4">
                Every write to an Iceberg table creates a new <strong className="text-white">snapshot</strong>. Snapshots are immutable — they point to a set of data files that represent the table at that moment. This enables powerful capabilities:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { title: 'Audit & Compliance', desc: 'Query exactly what the data looked like at any point in time' },
                  { title: 'Reproducibility', desc: 'Recreate ML training datasets or report outputs exactly' },
                  { title: 'Instant Rollback', desc: 'Undo bad writes without restoring from backup' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-center">
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">SQL</span>
                  <span className="text-slate-500 text-xs">time_travel.sql</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.timeTravel}</code>
                </pre>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Snapshot Retention</p>
                    <p className="text-slate-400 text-sm">Snapshots consume storage. Set up a retention policy to expire old snapshots (we recommend keeping 5-7 days for most use cases). Expired snapshots can&apos;t be queried via time travel.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Schema Evolution */}
            <section id="schema-evolution" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 text-sm">5</span>
                Schema Evolution Without Pain
              </h2>

              <p className="text-slate-300 mb-4">
                Traditional data lakes make schema changes painful. Add a column? Update every reader. Rename a field? Risk breaking downstream jobs. Iceberg solves this with <strong className="text-white">full schema evolution</strong>:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Operation</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Traditional Lake</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Iceberg</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Add column</td>
                      <td className="py-3 px-6 text-red-400">Breaks old readers</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Safe, null for old data</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Rename column</td>
                      <td className="py-3 px-6 text-red-400">Full rewrite or alias hacks</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Metadata only</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Drop column</td>
                      <td className="py-3 px-6 text-red-400">Data still present</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Metadata only, files unchanged</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Widen type</td>
                      <td className="py-3 px-6 text-red-400">Full rewrite</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Automatic promotion</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6">Reorder columns</td>
                      <td className="py-3 px-6 text-red-400">Not possible</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Metadata only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">SQL</span>
                  <span className="text-slate-500 text-xs">schema_evolution.sql</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.schemaEvolution}</code>
                </pre>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Partition Evolution</h3>
              <p className="text-slate-300 mb-4">
                Iceberg&apos;s killer feature: change your partitioning strategy without rewriting data. Old data stays in old partitions, new data uses new partitions, and queries work seamlessly across both.
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">SQL</span>
                  <span className="text-slate-500 text-xs">partition_evolution.sql</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.partitionEvolution}</code>
                </pre>
              </div>
            </section>

            {/* Comparison */}
            <section id="comparison" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 text-sm">6</span>
                Iceberg vs Delta Lake vs Hudi
              </h2>

              <p className="text-slate-300 mb-4">
                Three open table formats dominate the lakehouse space. Here&apos;s how they compare:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Feature</th>
                      <th className="text-left py-3 px-6 text-cyan-400 font-medium">Apache Iceberg</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Delta Lake</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Apache Hudi</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Origin</td>
                      <td className="py-3 px-6">Netflix</td>
                      <td className="py-3 px-6">Databricks</td>
                      <td className="py-3 px-6">Uber</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Hidden Partitioning</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Yes</td>
                      <td className="py-3 px-6 text-red-400">✗ No</td>
                      <td className="py-3 px-6 text-red-400">✗ No</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Partition Evolution</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Yes</td>
                      <td className="py-3 px-6 text-red-400">✗ No</td>
                      <td className="py-3 px-6 text-red-400">✗ No</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Schema Evolution</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Full</td>
                      <td className="py-3 px-6 text-amber-400">Partial</td>
                      <td className="py-3 px-6 text-amber-400">Partial</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Multi-Engine Support</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Excellent</td>
                      <td className="py-3 px-6 text-amber-400">Spark-centric</td>
                      <td className="py-3 px-6 text-amber-400">Good</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">AWS Native Support</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Athena, EMR, Glue</td>
                      <td className="py-3 px-6 text-amber-400">Limited</td>
                      <td className="py-3 px-6 text-emerald-400">✓ EMR, Glue</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Streaming Ingestion</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Yes</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Yes</td>
                      <td className="py-3 px-6 text-emerald-400">✓ Excellent</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6">Vendor Lock-in</td>
                      <td className="py-3 px-6 text-emerald-400">None</td>
                      <td className="py-3 px-6 text-amber-400">Databricks features</td>
                      <td className="py-3 px-6 text-emerald-400">None</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Our Recommendation</p>
                    <p className="text-slate-400 text-sm">For AWS-centric architectures, Iceberg is the clear winner. Native support in Athena, EMR, and Glue, plus features like hidden partitioning and partition evolution, make it the most flexible choice. Choose Hudi if you need record-level streaming updates, or Delta if you&apos;re already heavily invested in Databricks.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* AWS Integration */}
            <section id="aws-integration" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 text-sm">7</span>
                AWS Integration (Glue, Athena, EMR)
              </h2>

              <p className="text-slate-300 mb-4">
                AWS provides first-class support for Iceberg across its analytics services:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    service: 'Amazon Athena',
                    desc: 'Query Iceberg tables with standard SQL. Time travel, schema evolution, MERGE INTO all supported.',
                    version: 'Athena v3+',
                  },
                  {
                    service: 'AWS Glue',
                    desc: 'Native Iceberg connector for ETL jobs. Use Glue Catalog as your Iceberg catalog.',
                    version: 'Glue 4.0+',
                  },
                  {
                    service: 'Amazon EMR',
                    desc: 'Run Spark, Trino, or Presto with Iceberg. Full feature support including maintenance procedures.',
                    version: 'EMR 6.5+',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                    <h4 className="text-white font-semibold mb-1">{item.service}</h4>
                    <p className="text-slate-400 text-xs mb-2">{item.desc}</p>
                    <span className="text-cyan-400 text-xs">{item.version}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Reading Iceberg with PySpark on EMR</h3>
              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">Python</span>
                  <span className="text-slate-500 text-xs">spark_iceberg.py</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.sparkRead}</code>
                </pre>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">MERGE INTO for Upserts</h3>
              <p className="text-slate-300 mb-4">
                Iceberg supports full DML operations — INSERT, UPDATE, DELETE, and MERGE. This enables CDC patterns and incremental processing:
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">SQL</span>
                  <span className="text-slate-500 text-xs">merge_into.sql</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.mergeInto}</code>
                </pre>
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 text-sm">8</span>
                Production Best Practices
              </h2>

              <h3 className="text-lg font-semibold text-white mb-3">Table Maintenance</h3>
              <p className="text-slate-300 mb-4">
                Iceberg tables require regular maintenance for optimal performance. Set up scheduled jobs for these operations:
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">SQL</span>
                  <span className="text-slate-500 text-xs">maintenance.sql</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.maintenance}</code>
                </pre>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Recommended Maintenance Schedule</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Operation</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Frequency</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Expire Snapshots</td>
                      <td className="py-3 px-6">Daily</td>
                      <td className="py-3 px-6">Remove old metadata, enable file cleanup</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Remove Orphan Files</td>
                      <td className="py-3 px-6">Weekly</td>
                      <td className="py-3 px-6">Delete unreferenced data files</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Compact Data Files</td>
                      <td className="py-3 px-6">Daily/Weekly</td>
                      <td className="py-3 px-6">Merge small files, improve query performance</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6">Rewrite Manifests</td>
                      <td className="py-3 px-6">Weekly</td>
                      <td className="py-3 px-6">Optimize query planning</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Additional Best Practices</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Target 128MB-512MB file sizes for optimal query performance',
                  'Use sort orders to cluster related data and improve compression',
                  'Enable write.metadata.delete-after-commit.enabled for automatic cleanup',
                  'Monitor table size growth and adjust partition granularity as needed',
                  'Use branches/tags for testing schema changes before production',
                  'Set up CloudWatch alarms for maintenance job failures',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-slate-300 mb-4">
                Apache Iceberg transforms data lakes from fragile file collections into reliable, feature-rich data platforms. With ACID transactions, time travel, schema evolution, and hidden partitioning, it brings data warehouse reliability to data lake economics.
              </p>
              <p className="text-slate-300 mb-6">
                For AWS users, Iceberg is now the recommended table format — native support in Athena, Glue, and EMR means you can adopt it without additional infrastructure. Start with a single table, prove the value, then migrate your lakehouse.
              </p>
            </section>

            {/* CTA */}
            <section className="p-8 bg-gradient-to-r from-cyan-500/10 to-slate-900/60 border border-cyan-500/30 rounded-xl text-center">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Build Your Data Lakehouse?</h3>
              <p className="text-slate-400 mb-6">
                PATHSDATA specializes in modern data platforms on AWS. Let us help you design and implement your Iceberg-based lakehouse.
              </p>
              <div className="flex gap-4 justify-center">
                <GradientButton href="/contact">Schedule a Consultation</GradientButton>
                <Link 
                  href="/services/data-engineering" 
                  className="px-6 py-2.5 border border-slate-600 text-slate-300 rounded-full text-sm hover:border-cyan-500/50 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Data Engineering Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-slate-500" />
              {['Apache Iceberg', 'Data Lakehouse', 'AWS', 'Data Engineering', 'Spark', 'Athena'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-8 p-6 bg-slate-900/60 border border-slate-800 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 font-bold">P</span>
              </div>
              <div>
                <p className="text-white font-semibold">PATHSDATA Team</p>
                <p className="text-slate-400 text-sm mb-2">AWS Select Tier Consulting Partner</p>
                <p className="text-slate-500 text-sm">
                  We help enterprises build modern data platforms on AWS. Specializing in data lakehouses, real-time pipelines, and analytics infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 gap-4">
              <Link href="/blog/building-rag-systems-aws-bedrock" className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-colors">
                <span className="text-violet-400 text-xs">Generative AI</span>
                <h4 className="text-white font-medium mt-1">Building Production-Ready RAG Systems with AWS Bedrock</h4>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
