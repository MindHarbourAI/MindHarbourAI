import { Database, Cpu, Layers, Server, ShieldCheck, Terminal } from 'lucide-react'

const ARCH_ITEMS = [
  {
    icon: Database,
    title: 'Vector Store & Indexing',
    desc: 'FAISS and Qdrant backend with chunk-level metadata tracking for sub-second dense vector lookup.',
  },
  {
    icon: Cpu,
    title: 'Reranker & Cross-Encoders',
    desc: 'BGE-Reranker-Large cross-encoder model scoring relevance prior to context window injection.',
  },
  {
    icon: Layers,
    title: 'Agent DAG Runtime',
    desc: 'Asynchronous event-driven task queue handling agent loops, retries, and schema validation.',
  },
  {
    icon: Server,
    title: 'Containerized Deployment',
    desc: 'Pre-built Docker compose & Kubernetes manifests for air-gapped on-premise deployments.',
  },
]

const TECH_STACK = [
  'Python 3.11',
  'FastAPI',
  'FAISS',
  'Sentence Transformers (BGE)',
  'PyTorch',
  'LangChain / LlamaIndex',
  'OpenAI GPT-4o',
  'Google Gemini 1.5',
  'Ollama / Llama 3',
  'Docker & K8s',
]

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6 border-t border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="section-label mb-3">Architecture & Stack</p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight max-w-xl">
              Engineered for extreme performance and enterprise security
            </h2>
          </div>
          <p className="text-stone-500 text-sm max-w-md">
            Production-tested components engineered to scale to millions of document chunks and thousands of agent tasks.
          </p>
        </div>

        {/* Architecture Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ARCH_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="surface surface-hover p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-zinc-800" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech Stack Strip */}
        <div className="p-6 bg-stone-50 border border-stone-200 rounded-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 text-center mb-4">
            Under the Hood Technologies & Integrations
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_STACK.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-xs font-mono text-stone-700 shadow-2xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
