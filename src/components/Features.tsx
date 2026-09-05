import {
  FileText,
  Brain,
  Search,
  MessageSquare,
  Shield,
  Zap,
  Bot,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  desc: string
}

const FEATURES: Feature[] = [
  {
    icon: FileText,
    title: 'Multi-format ingestion',
    desc: 'Upload PDFs, DOCX, scanned reports, and images. Automated OCR, chunking, and vector preprocessing.',
  },
  {
    icon: Brain,
    title: 'Semantic vector search',
    desc: 'BGE and BERT embeddings stored in high-performance FAISS indices for sub-millisecond retrieval.',
  },
  {
    icon: Search,
    title: 'Two-stage reranker',
    desc: 'Cross-encoder reranking re-scores retrieved passages before prompting the LLM for peak precision.',
  },
  {
    icon: MessageSquare,
    title: 'Source-cited answers',
    desc: 'Every generated answer includes clickable page-exact citations. Zero ungrounded hallucinations.',
  },
  {
    icon: Bot,
    title: 'Autonomous Agent Loops',
    desc: 'SailTask orchestrates DAG workflow execution, retries, and API integrations with guaranteed completion.',
  },
  {
    icon: Zap,
    title: 'Semantic query caching',
    desc: 'Identical or close semantic queries hit instant cache, cutting LLM token costs by up to 60%.',
  },
  {
    icon: Shield,
    title: 'Private & On-Prem default',
    desc: 'Deploy in your own cloud or on-premise hardware. Your proprietary documents never train public models.',
  },
  {
    icon: RefreshCw,
    title: 'LLM Agnostic backends',
    desc: 'Seamlessly switch between OpenAI, Gemini, or local models via Ollama without re-indexing vector data.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight max-w-lg">
            Everything needed to query documents & automate tasks
          </h2>
        </div>

        {/* Grid matching SailAnchor border grid pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 rounded-xl overflow-hidden border border-stone-200 shadow-sm">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="surface surface-hover p-6 flex flex-col gap-4">
                <div className="w-9 h-9 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4.5 h-4.5 text-zinc-800" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 mb-1.5">{f.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
