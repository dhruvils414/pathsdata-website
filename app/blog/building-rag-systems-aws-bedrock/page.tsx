import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, CheckCircle2, AlertTriangle, Lightbulb, Code, Database, Cpu, ArrowRight } from 'lucide-react';
import { GradientButton, GradientText } from '@/components/ui/buttons';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Building Production-Ready RAG Systems with AWS Bedrock',
  description: 'Learn how to build scalable Retrieval Augmented Generation (RAG) systems using Amazon Bedrock, Claude, and vector databases. A comprehensive guide with architecture patterns and code examples.',
  keywords: [
    'RAG',
    'Retrieval Augmented Generation',
    'AWS Bedrock',
    'Amazon Bedrock',
    'Claude',
    'Vector Database',
    'OpenSearch',
    'Pinecone',
    'LangChain',
    'Generative AI',
    'LLM',
    'Enterprise AI',
  ],
  authors: [{ name: 'PATHSDATA Team' }],
  alternates: {
    canonical: `${siteConfig.url}/blog/building-rag-systems-aws-bedrock`,
  },
  openGraph: {
    title: 'Building Production-Ready RAG Systems with AWS Bedrock',
    description: 'A comprehensive guide to building scalable RAG systems with Amazon Bedrock and Claude.',
    url: `${siteConfig.url}/blog/building-rag-systems-aws-bedrock`,
    type: 'article',
    publishedTime: '2025-01-10T00:00:00Z',
    authors: ['PATHSDATA Team'],
    tags: ['Generative AI', 'AWS', 'RAG', 'Machine Learning'],
  },
};

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Building RAG Systems with AWS Bedrock', href: '/blog/building-rag-systems-aws-bedrock' },
];

// Code snippets
const codeSnippets = {
  bedrockSetup: `import boto3
from langchain_aws import ChatBedrock
from langchain_aws import BedrockEmbeddings

# Initialize Bedrock client
bedrock_runtime = boto3.client(
    service_name='bedrock-runtime',
    region_name='us-east-1'
)

# Initialize Claude model
llm = ChatBedrock(
    model_id="anthropic.claude-3-sonnet-20240229-v1:0",
    client=bedrock_runtime,
    model_kwargs={
        "temperature": 0.1,
        "max_tokens": 4096
    }
)

# Initialize embeddings model
embeddings = BedrockEmbeddings(
    client=bedrock_runtime,
    model_id="amazon.titan-embed-text-v2:0"
)`,

  vectorStore: `from langchain_community.vectorstores import OpenSearchVectorSearch
from opensearchpy import OpenSearch, RequestsHttpConnection
from requests_aws4auth import AWS4Auth

# AWS authentication for OpenSearch
credentials = boto3.Session().get_credentials()
awsauth = AWS4Auth(
    credentials.access_key,
    credentials.secret_key,
    'us-east-1',
    'aoss',
    session_token=credentials.token
)

# Initialize OpenSearch vector store
vector_store = OpenSearchVectorSearch(
    index_name="knowledge-base",
    embedding_function=embeddings,
    opensearch_url="https://your-collection.us-east-1.aoss.amazonaws.com",
    http_auth=awsauth,
    use_ssl=True,
    verify_certs=True,
    connection_class=RequestsHttpConnection,
)`,

  ragChain: `from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

# Custom prompt template for RAG
RAG_PROMPT = PromptTemplate(
    template="""You are a helpful assistant answering questions based on the provided context.
    
Context:
{context}

Question: {question}

Instructions:
- Answer based ONLY on the provided context
- If the context doesn't contain relevant information, say so
- Cite specific parts of the context when possible
- Be concise but thorough

Answer:""",
    input_variables=["context", "question"]
)

# Create RAG chain
rag_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_store.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 5}
    ),
    chain_type_kwargs={"prompt": RAG_PROMPT},
    return_source_documents=True
)

# Query the RAG system
response = rag_chain.invoke({"query": "What are the key features of our product?"})
print(response["result"])`,

  chunking: `from langchain.text_splitter import RecursiveCharacterTextSplitter

# Optimized chunking strategy
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,        # Optimal for most use cases
    chunk_overlap=200,      # 20% overlap for context preservation
    length_function=len,
    separators=[
        "\\n\\n",           # Paragraph breaks (highest priority)
        "\\n",              # Line breaks
        ". ",               # Sentences
        ", ",               # Clauses
        " ",                # Words
        ""                  # Characters (fallback)
    ]
)

# Process documents
chunks = text_splitter.split_documents(documents)

# Add metadata for better retrieval
for i, chunk in enumerate(chunks):
    chunk.metadata["chunk_id"] = i
    chunk.metadata["source_file"] = document_name
    chunk.metadata["timestamp"] = datetime.now().isoformat()`,

  hybridSearch: `from opensearchpy import OpenSearch

# Hybrid search combining semantic + keyword search
def hybrid_search(query: str, k: int = 5, alpha: float = 0.7):
    """
    Perform hybrid search with configurable weighting.
    alpha: 0.0 = pure keyword, 1.0 = pure semantic
    """
    
    # Get query embedding
    query_embedding = embeddings.embed_query(query)
    
    # Hybrid search query
    search_query = {
        "size": k,
        "query": {
            "hybrid": {
                "queries": [
                    # Semantic search (vector)
                    {
                        "knn": {
                            "embedding": {
                                "vector": query_embedding,
                                "k": k
                            }
                        }
                    },
                    # Keyword search (BM25)
                    {
                        "match": {
                            "text": {
                                "query": query,
                                "boost": 1.0
                            }
                        }
                    }
                ]
            }
        },
        # Reranking for better results
        "search_pipeline": "hybrid-search-pipeline"
    }
    
    results = opensearch_client.search(
        index="knowledge-base",
        body=search_query
    )
    
    return results["hits"]["hits"]`,

  evaluation: `from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_precision,
    context_recall
)

# Prepare evaluation dataset
eval_dataset = {
    "question": questions,
    "answer": generated_answers,
    "contexts": retrieved_contexts,
    "ground_truth": expected_answers
}

# Run RAGAS evaluation
results = evaluate(
    dataset=eval_dataset,
    metrics=[
        faithfulness,        # Is answer faithful to context?
        answer_relevancy,    # Is answer relevant to question?
        context_precision,   # Are retrieved docs relevant?
        context_recall       # Are all relevant docs retrieved?
    ]
)

print(f"Faithfulness: {results['faithfulness']:.2f}")
print(f"Answer Relevancy: {results['answer_relevancy']:.2f}")
print(f"Context Precision: {results['context_precision']:.2f}")
print(f"Context Recall: {results['context_recall']:.2f}")`
};

export default function RAGBlogPost() {
  return (
    <>
      <ArticleJsonLd
        title="Building Production-Ready RAG Systems with AWS Bedrock"
        description="Learn how to build scalable Retrieval Augmented Generation (RAG) systems using Amazon Bedrock, Claude, and vector databases."
        url={`${siteConfig.url}/blog/building-rag-systems-aws-bedrock`}
        publishedTime="2025-01-10T00:00:00Z"
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
              <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full">
                Generative AI
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full">
                AWS
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Building Production-Ready RAG Systems with <GradientText>AWS Bedrock</GradientText>
            </h1>
            
            <p className="text-xl text-slate-400 mb-6">
              A comprehensive guide to building scalable Retrieval Augmented Generation systems using Amazon Bedrock, Claude, and vector databases.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                PATHSDATA Team
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 10, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                15 min read
              </span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-slate-900/60 border border-slate-800/60 rounded-xl">
            <h2 className="text-white font-semibold mb-4">Table of Contents</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#introduction" className="text-slate-400 hover:text-violet-400 transition-colors">1. Introduction to RAG</a></li>
              <li><a href="#architecture" className="text-slate-400 hover:text-violet-400 transition-colors">2. RAG Architecture Overview</a></li>
              <li><a href="#bedrock-setup" className="text-slate-400 hover:text-violet-400 transition-colors">3. Setting Up AWS Bedrock</a></li>
              <li><a href="#vector-store" className="text-slate-400 hover:text-violet-400 transition-colors">4. Choosing a Vector Database</a></li>
              <li><a href="#chunking" className="text-slate-400 hover:text-violet-400 transition-colors">5. Document Chunking Strategies</a></li>
              <li><a href="#retrieval" className="text-slate-400 hover:text-violet-400 transition-colors">6. Advanced Retrieval Techniques</a></li>
              <li><a href="#evaluation" className="text-slate-400 hover:text-violet-400 transition-colors">7. Evaluation & Monitoring</a></li>
              <li><a href="#production" className="text-slate-400 hover:text-violet-400 transition-colors">8. Production Best Practices</a></li>
            </ol>
          </nav>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 text-sm">1</span>
                Introduction to RAG
              </h2>
              
              <p className="text-slate-300 mb-4">
                Retrieval Augmented Generation (RAG) has emerged as the go-to architecture for building AI applications that need access to private or current information. Unlike fine-tuning, RAG allows you to ground LLM responses in your own data without the cost and complexity of model training.
              </p>

              <div className="p-4 bg-violet-500/10 border border-violet-500/30 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Why RAG over Fine-tuning?</p>
                    <p className="text-slate-400 text-sm">RAG is ideal when your data changes frequently, you need source attribution, or you want to avoid the cost and latency of fine-tuning. Fine-tuning is better for teaching the model new behaviors or specialized reasoning patterns.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Key Benefits of RAG</h3>
              <ul className="space-y-2 mb-6">
                {[
                  'Access to private, proprietary data without fine-tuning',
                  'Real-time information retrieval (no knowledge cutoff)',
                  'Source attribution and explainability',
                  'Lower cost than fine-tuning or training custom models',
                  'Easy to update knowledge base without retraining',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Architecture */}
            <section id="architecture" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 text-sm">2</span>
                RAG Architecture Overview
              </h2>

              <p className="text-slate-300 mb-6">
                A production RAG system consists of two main pipelines: the <strong className="text-white">ingestion pipeline</strong> (processing and storing documents) and the <strong className="text-white">retrieval pipeline</strong> (answering queries).
              </p>

              {/* Architecture Diagram */}
              <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-xl mb-6">
                <h4 className="text-white font-medium mb-4 text-center">RAG Architecture on AWS</h4>
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  {/* Ingestion Pipeline */}
                  <div className="space-y-3">
                    <p className="text-violet-400 font-medium">Ingestion Pipeline</p>
                    <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                      <Database className="w-5 h-5 mx-auto mb-1 text-slate-400" />
                      <p className="text-slate-300">Documents</p>
                      <p className="text-slate-500 text-xs">S3, APIs, DBs</p>
                    </div>
                    <div className="text-slate-600">↓</div>
                    <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                      <Code className="w-5 h-5 mx-auto mb-1 text-slate-400" />
                      <p className="text-slate-300">Chunking</p>
                      <p className="text-slate-500 text-xs">Split & Process</p>
                    </div>
                    <div className="text-slate-600">↓</div>
                    <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                      <Cpu className="w-5 h-5 mx-auto mb-1 text-amber-400" />
                      <p className="text-slate-300">Embeddings</p>
                      <p className="text-slate-500 text-xs">Titan Embeddings</p>
                    </div>
                  </div>

                  {/* Vector Store */}
                  <div className="flex flex-col justify-center">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                      <Database className="w-6 h-6 mx-auto mb-2 text-emerald-400" />
                      <p className="text-white font-medium">Vector Store</p>
                      <p className="text-slate-400 text-xs mt-1">OpenSearch Serverless</p>
                      <p className="text-slate-500 text-xs">or Pinecone / pgvector</p>
                    </div>
                  </div>

                  {/* Query Pipeline */}
                  <div className="space-y-3">
                    <p className="text-violet-400 font-medium">Query Pipeline</p>
                    <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                      <User className="w-5 h-5 mx-auto mb-1 text-slate-400" />
                      <p className="text-slate-300">User Query</p>
                      <p className="text-slate-500 text-xs">Natural Language</p>
                    </div>
                    <div className="text-slate-600">↓</div>
                    <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700">
                      <Cpu className="w-5 h-5 mx-auto mb-1 text-amber-400" />
                      <p className="text-slate-300">Retrieval</p>
                      <p className="text-slate-500 text-xs">Semantic Search</p>
                    </div>
                    <div className="text-slate-600">↓</div>
                    <div className="p-3 bg-violet-500/20 rounded-lg border border-violet-500/30">
                      <Cpu className="w-5 h-5 mx-auto mb-1 text-violet-400" />
                      <p className="text-white">Claude 3</p>
                      <p className="text-slate-400 text-xs">AWS Bedrock</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bedrock Setup */}
            <section id="bedrock-setup" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 text-sm">3</span>
                Setting Up AWS Bedrock
              </h2>

              <p className="text-slate-300 mb-4">
                Amazon Bedrock provides access to foundation models from Anthropic (Claude), Amazon (Titan), and others through a unified API. Here&apos;s how to set up Bedrock with LangChain:
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">Python</span>
                  <span className="text-slate-500 text-xs">bedrock_setup.py</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.bedrockSetup}</code>
                </pre>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Prerequisites</p>
                    <p className="text-slate-400 text-sm">Ensure you have enabled model access in the AWS Bedrock console and have the appropriate IAM permissions (<code className="text-amber-300">bedrock:InvokeModel</code>).</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Choosing the Right Model</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Model</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Best For</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Context</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6 text-white">Claude 3.5 Sonnet</td>
                      <td className="py-3 px-6">Best balance of speed & quality</td>
                      <td className="py-3 px-6">200K tokens</td>
                      <td className="py-3 px-6 text-emerald-400">$$</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6 text-white">Claude 3 Opus</td>
                      <td className="py-3 px-6">Complex reasoning tasks</td>
                      <td className="py-3 px-6">200K tokens</td>
                      <td className="py-3 px-6 text-amber-400">$$$$</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6 text-white">Claude 3 Haiku</td>
                      <td className="py-3 px-6">High-volume, simple queries</td>
                      <td className="py-3 px-6">200K tokens</td>
                      <td className="py-3 px-6 text-emerald-400">$</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 text-white">Titan Embeddings v2</td>
                      <td className="py-3 px-6">Document embeddings</td>
                      <td className="py-3 px-6">8K tokens</td>
                      <td className="py-3 px-6 text-emerald-400">$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Vector Store */}
            <section id="vector-store" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 text-sm">4</span>
                Choosing a Vector Database
              </h2>

              <p className="text-slate-300 mb-4">
                The vector database stores document embeddings and enables semantic search. Here are the top options for AWS deployments:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    name: 'OpenSearch Serverless',
                    pros: ['Fully managed', 'Hybrid search', 'Native AWS integration'],
                    cons: ['Higher cost at scale'],
                    best: 'Enterprise production',
                  },
                  {
                    name: 'Pinecone',
                    pros: ['Simple API', 'Fast queries', 'Good free tier'],
                    cons: ['External service', 'Data leaves AWS'],
                    best: 'Quick prototypes',
                  },
                  {
                    name: 'pgvector (RDS)',
                    pros: ['Low cost', 'Familiar SQL', 'Single database'],
                    cons: ['Manual scaling', 'Limited features'],
                    best: 'Small datasets',
                  },
                ].map((db, i) => (
                  <div key={i} className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                    <h4 className="text-white font-semibold mb-2">{db.name}</h4>
                    <p className="text-xs text-violet-400 mb-3">Best for: {db.best}</p>
                    <div className="space-y-1 text-xs">
                      {db.pros.map((pro, j) => (
                        <p key={j} className="text-emerald-400">✓ {pro}</p>
                      ))}
                      {db.cons.map((con, j) => (
                        <p key={j} className="text-slate-500">✗ {con}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">OpenSearch Serverless Setup</h3>
              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">Python</span>
                  <span className="text-slate-500 text-xs">vector_store.py</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.vectorStore}</code>
                </pre>
              </div>
            </section>

            {/* Chunking */}
            <section id="chunking" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 text-sm">5</span>
                Document Chunking Strategies
              </h2>

              <p className="text-slate-300 mb-4">
                Chunking is one of the most impactful decisions in RAG. Poor chunking leads to poor retrieval, regardless of how good your LLM is.
              </p>

              <div className="p-4 bg-violet-500/10 border border-violet-500/30 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">The Golden Rule of Chunking</p>
                    <p className="text-slate-400 text-sm">Each chunk should contain enough context to answer a question on its own. If a chunk requires the previous or next chunk to make sense, your chunks are too small.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Recommended Chunking Strategy</h3>
              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">Python</span>
                  <span className="text-slate-500 text-xs">chunking.py</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.chunking}</code>
                </pre>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Chunk Size Guidelines</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Content Type</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Chunk Size</th>
                      <th className="text-left py-3 px-6 text-slate-400 font-medium">Overlap</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Technical documentation</td>
                      <td className="py-3 px-6">1000-1500 tokens</td>
                      <td className="py-3 px-6">200 tokens (20%)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Legal documents</td>
                      <td className="py-3 px-6">500-800 tokens</td>
                      <td className="py-3 px-6">100 tokens (15%)</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 px-6">Q&A / FAQs</td>
                      <td className="py-3 px-6">Per question</td>
                      <td className="py-3 px-6">None</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6">Code files</td>
                      <td className="py-3 px-6">Per function/class</td>
                      <td className="py-3 px-6">Include imports</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Advanced Retrieval */}
            <section id="retrieval" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 text-sm">6</span>
                Advanced Retrieval Techniques
              </h2>

              <p className="text-slate-300 mb-4">
                Basic semantic search gets you 70% of the way there. These advanced techniques can significantly improve retrieval quality:
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">1. Hybrid Search (Semantic + Keyword)</h3>
              <p className="text-slate-300 mb-4">
                Combining vector similarity with traditional BM25 keyword search often outperforms either approach alone, especially for queries with specific terms or names.
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">Python</span>
                  <span className="text-slate-500 text-xs">hybrid_search.py</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.hybridSearch}</code>
                </pre>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">2. Query Expansion</h3>
              <p className="text-slate-300 mb-4">
                Use the LLM to generate alternative phrasings of the user&apos;s query before searching:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <p className="text-slate-400 text-xs mb-2">Original Query</p>
                  <p className="text-white">&quot;How do I fix the login error?&quot;</p>
                </div>
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <p className="text-slate-400 text-xs mb-2">Expanded Queries</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• &quot;authentication failure troubleshooting&quot;</li>
                    <li>• &quot;login error resolution steps&quot;</li>
                    <li>• &quot;sign in problem fix&quot;</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">3. Contextual Compression</h3>
              <p className="text-slate-300 mb-6">
                After retrieval, use an LLM to extract only the relevant portions of each chunk. This reduces noise and allows you to include more documents in the context.
              </p>

              <h3 className="text-lg font-semibold text-white mb-3">4. Metadata Filtering</h3>
              <p className="text-slate-300 mb-4">
                Add metadata to chunks (date, source, category) and filter before or after retrieval:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Filter by date for time-sensitive queries',
                  'Filter by source for domain-specific questions',
                  'Filter by access level for multi-tenant systems',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Evaluation */}
            <section id="evaluation" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 text-sm">7</span>
                Evaluation & Monitoring
              </h2>

              <p className="text-slate-300 mb-4">
                You can&apos;t improve what you don&apos;t measure. Use RAGAS (Retrieval Augmented Generation Assessment) to evaluate your RAG pipeline:
              </p>

              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-800 px-6 py-2 rounded-t-lg border border-slate-700 border-b-0">
                  <span className="text-slate-400 text-sm">Python</span>
                  <span className="text-slate-500 text-xs">evaluation.py</span>
                </div>
                <pre className="bg-slate-900 p-4 rounded-b-lg border border-slate-700 overflow-x-auto text-sm">
                  <code className="text-slate-300">{codeSnippets.evaluation}</code>
                </pre>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Key Metrics to Track</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { name: 'Faithfulness', desc: 'Is the answer grounded in the retrieved context?', target: '> 0.85' },
                  { name: 'Answer Relevancy', desc: 'Does the answer address the question?', target: '> 0.80' },
                  { name: 'Context Precision', desc: 'Are the retrieved docs relevant?', target: '> 0.75' },
                  { name: 'Context Recall', desc: 'Were all relevant docs retrieved?', target: '> 0.70' },
                ].map((metric, i) => (
                  <div key={i} className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-medium">{metric.name}</h4>
                      <span className="text-emerald-400 text-xs">{metric.target}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Production */}
            <section id="production" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400 text-sm">8</span>
                Production Best Practices
              </h2>

              <div className="space-y-4 mb-6">
                {[
                  {
                    title: 'Implement Caching',
                    desc: 'Cache embeddings for repeated queries. Use ElastiCache or DynamoDB to reduce latency and costs.',
                  },
                  {
                    title: 'Set Up Guardrails',
                    desc: 'Use Bedrock Guardrails to filter harmful content, PII, and off-topic responses.',
                  },
                  {
                    title: 'Monitor Costs',
                    desc: 'Track token usage per query. Set up CloudWatch alarms for unexpected spikes.',
                  },
                  {
                    title: 'Handle Failures Gracefully',
                    desc: 'Implement fallbacks: if retrieval fails, acknowledge the limitation rather than hallucinating.',
                  },
                  {
                    title: 'Version Your Knowledge Base',
                    desc: 'Track document versions. Allow rollback if new documents degrade quality.',
                  },
                  {
                    title: 'Implement Feedback Loops',
                    desc: 'Collect user feedback (thumbs up/down). Use it to identify retrieval failures and improve prompts.',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-slate-300 mb-4">
                Building a production-ready RAG system requires careful attention to chunking, retrieval, and evaluation. AWS Bedrock provides a solid foundation with managed infrastructure, enterprise security, and access to state-of-the-art models like Claude.
              </p>
              <p className="text-slate-300 mb-6">
                Start simple with basic semantic search, measure your baseline, then iterate with advanced techniques like hybrid search and query expansion. The key is continuous evaluation and improvement based on real user queries.
              </p>
            </section>

            {/* CTA */}
            <section className="p-8 bg-gradient-to-r from-violet-500/10 to-slate-900/60 border border-violet-500/30 rounded-xl text-center">
              <h3 className="text-xl font-bold text-white mb-2">Need Help Building Your RAG System?</h3>
              <p className="text-slate-400 mb-6">
                PATHSDATA specializes in production-ready Generative AI solutions on AWS. Let&apos;s discuss your use case.
              </p>
              <div className="flex gap-4 justify-center">
                <GradientButton href="/contact">Schedule a Consultation</GradientButton>
                <Link 
                  href="/programs/aws-poc" 
                  className="px-6 py-2.5 border border-slate-600 text-slate-300 rounded-full text-sm hover:border-violet-500/50 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  Explore AWS POC Program <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-4 h-4 text-slate-500" />
              {['RAG', 'AWS Bedrock', 'Claude', 'Vector Database', 'LangChain', 'Generative AI'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-8 p-6 bg-slate-900/60 border border-slate-800 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center">
                <span className="text-violet-400 font-bold">P</span>
              </div>
              <div>
                <p className="text-white font-semibold">PATHSDATA Team</p>
                <p className="text-slate-400 text-sm mb-2">AWS Select Tier Consulting Partner</p>
                <p className="text-slate-500 text-sm">
                  We help enterprises build production-ready AI solutions on AWS. Specializing in RAG systems, data platforms, and MLOps.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 gap-4">
              <Link href="/blog/apache-iceberg-data-lakehouse" className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-violet-500/30 transition-colors">
                <span className="text-cyan-400 text-xs">Data Engineering</span>
                <h4 className="text-white font-medium mt-1">Why Apache Iceberg is the Future of Data Lakehouses</h4>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
