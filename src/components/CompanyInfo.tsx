import { ShieldCheck, Cpu, Database, Award, ArrowRight, CheckCircle2, Lock, Zap } from 'lucide-react'

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Source-Cited Precision',
    desc: 'Grounded RAG architecture ensuring zero ungrounded hallucinations with page-exact source references for complete auditability.',
  },
  {
    icon: Cpu,
    title: 'Autonomous Workflows',
    desc: 'Resilient agent DAG graphs for multi-step task execution, structured JSON schema validation, and automated error retries.',
  },
  {
    icon: Lock,
    title: 'Data Sovereignty & Privacy',
    desc: 'Deploy air-gapped on-premise or in your private cloud. Your enterprise data remains entirely yours and never trains public models.',
  },
  {
    icon: Zap,
    title: 'High-Throughput Performance',
    desc: 'Sub-450ms query latency powered by FAISS vector indexing, BGE cross-encoder reranking, and semantic query caching.',
  },
]

const STATS = [
  { val: '10M+', label: 'Document Chunks Indexed' },
  { val: '< 450ms', label: 'Average Query Latency' },
  { val: '99.9%', label: 'Agent Loop Reliability' },
  { val: '100%', label: 'Data Sovereignty Control' },
]

export default function CompanyInfo() {
  return (
    <section id="about" className="py-24 px-6 border-t border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">About MindHarborAI</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight max-w-3xl leading-tight">
            Building the foundation for enterprise document intelligence & autonomous AI agents
          </h2>
          <p className="text-stone-500 text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            MindHarborAI was founded to solve a fundamental challenge in enterprise technology: enabling teams to query complex, unstructured documents with absolute precision while automating multi-step operational workflows securely.
          </p>
        </div>

        {/* Company Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-stone-50 border border-stone-200 rounded-2xl mb-16 shadow-xs">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight mb-1">{s.val}</div>
              <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PILLARS.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="surface surface-hover p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-zinc-800" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 mb-2">{p.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Ecosystem Overview Callout Banner */}
        <div className="p-8 rounded-2xl border border-stone-200 bg-stone-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-1 block">Unified AI Suite</span>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">SailAnchor & SailTask Engine Ecosystem</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
              Whether deployed as standalone modules or combined into an integrated pipeline, MindHarborAI provides full API specifications, SDK bindings, and custom enterprise support.
            </p>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0 !text-xs !py-2.5 !px-5">
            Contact Engineering Team <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
