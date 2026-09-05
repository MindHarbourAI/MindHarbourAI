import { FileText, Bot, ArrowRight, Check, ExternalLink } from 'lucide-react'
import { PRODUCT_URLS } from '../config/urls'

const PRODUCTS = [
  {
    id: 'sailanchor',
    badge: 'Flagship RAG Engine',
    name: 'SailAnchor',
    statusTag: 'BETA',
    statusTagStyle: 'bg-amber-50 text-amber-700 border-amber-200/80',
    subtitle: 'Retrieval-Augmented Generation & Document Q&A',
    description: 'Transform your unorganized enterprise PDFs, DOCX files, and scanned reports into a searchable, source-cited vector knowledge base.',
    color: 'blue',
    icon: FileText,
    logoImg: '/sailanchor_logo.png',
    features: [
      'Multi-format OCR & chunking (PDF, DOCX, Images)',
      'FAISS & Dense Vector embeddings (BGE / BERT)',
      'Two-stage reranking cross-encoder pipeline',
      'Exact page-level and passage source citations',
      'Semantic caching (reduces LLM costs up to 60%)',
    ],
    specs: [
      { label: 'Latency', val: '< 450ms' },
      { label: 'Accuracy', val: '99.4%' },
      { label: 'Index Capacity', val: '10M+ Chunks' },
    ],
    cta: 'Explore SailAnchor',
    targetUrl: PRODUCT_URLS.sailanchor,
    demoHref: '#playground',
  },
  {
    id: 'sailtask',
    badge: 'Autonomous Workflow Engine',
    name: 'SailTask',
    statusTag: 'COMING SOON',
    statusTagStyle: 'bg-purple-50 text-purple-700 border-purple-200',
    subtitle: 'AI Agent & Multi-Step Task Automation',
    description: 'Orchestrate autonomous agent loops that perform multi-step data extraction, code generation, API interactions, and workflow execution.',
    color: 'emerald',
    icon: Bot,
    features: [
      'Multi-agent DAG task orchestration & loops',
      'Structured output validation & schema enforcement',
      'Local & Cloud LLM backend switching (OpenAI, Gemini, Ollama)',
      'Custom tool bindings & REST API execution',
      'Real-time execution telemetry & logs',
    ],
    specs: [
      { label: 'Parallel Agents', val: '100+' },
      { label: 'Execution Rate', val: '99.9%' },
      { label: 'Integrations', val: '50+ APIs' },
    ],
    cta: 'Explore SailTask',
    targetUrl: PRODUCT_URLS.sailtask,
    demoHref: '#playground',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-3">Core Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight max-w-2xl">
            Two specialized engines powering the next era of enterprise AI
          </h2>
          <p className="text-stone-500 text-sm mt-3 max-w-xl leading-relaxed">
            Explore SailAnchor for precision document retrieval or SailTask for autonomous task execution — or test both engines in our interactive playground below.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PRODUCTS.map((p) => {
            const Icon = p.icon
            const isBlue = p.color === 'blue'
            return (
              <div
                key={p.id}
                className="surface surface-hover rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Header info */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                      isBlue ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {p.badge}
                    </span>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border leading-none ${p.statusTagStyle}`}>
                      {p.statusTag}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5">
                      {p.logoImg ? (
                        <img src={p.logoImg} alt={p.name} className="w-full h-full object-contain" />
                      ) : (
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">{p.name}</h3>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border leading-none ${p.statusTagStyle}`}>
                          {p.statusTag}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-stone-500 mt-0.5">{p.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Specs row */}
                  <div className="grid grid-cols-3 gap-3 mb-8 p-3.5 bg-stone-50 border border-stone-150 rounded-xl">
                    {p.specs.map((s) => (
                      <div key={s.label} className="text-center">
                        <span className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold block mb-0.5">{s.label}</span>
                        <span className="text-sm font-bold text-zinc-900">{s.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-2.5 mb-8">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 mb-3">Key Capabilities</p>
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-xs text-stone-700">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isBlue ? 'text-blue-600' : 'text-emerald-600'}`} strokeWidth={2} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={p.targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 justify-center !py-2.5 !text-sm"
                  >
                    {p.cta}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={p.demoHref}
                    className="btn-secondary justify-center !py-2.5 !text-sm"
                  >
                    Try Live Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
