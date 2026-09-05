import { useState } from 'react'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'What is the relationship between MindHarborAI, SailAnchor, and SailTask?',
    a: 'MindHarborAI is the parent AI infrastructure platform. SailAnchor is our specialized Retrieval-Augmented Generation (RAG) engine for document search & Q&A, while SailTask is our autonomous AI agent engine for multi-step task execution.',
  },
  {
    q: 'What file formats can SailAnchor ingest?',
    a: 'SailAnchor supports PDF (both standard text and scanned documents via integrated OCR), DOCX, TXT, and Markdown. Support for XLSX, CSV, and web URL scraping is available in Pro & Growth plans.',
  },
  {
    q: 'Can I host MindHarborAI on-premise or in an isolated private cloud?',
    a: 'Yes. MindHarborAI is designed with a private-by-default architecture. We offer Docker Compose and Kubernetes manifests to deploy SailAnchor and SailTask entirely on your own AWS/GCP/Azure tenant or local hardware with Ollama.',
  },
  {
    q: 'How does SailAnchor prevent LLM hallucinations?',
    a: 'SailAnchor uses a two-stage retrieval process (FAISS dense vector search followed by a cross-encoder reranker). Answers are synthesized strictly from retrieved passages, and every statement includes page-exact source citations.',
  },
  {
    q: 'Which LLM providers are supported?',
    a: 'MindHarborAI supports OpenAI (GPT-4o, GPT-4 Turbo), Google Gemini 1.5, Anthropic Claude, and local models via Ollama (Llama 3, Mistral, Qwen). You can switch models at any time without re-indexing your document vectors.',
  },
  {
    q: 'Is there an API for programmatic integration?',
    a: 'Yes. Growth and Enterprise plans include REST APIs with API key authentication, webhooks, and Python/TypeScript SDK bindings for automated ingestion and task execution.',
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-6 group cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-zinc-800 group-hover:text-zinc-900 transition-colors">
          {q}
        </span>
        <Plus
          className={`w-4 h-4 text-stone-400 flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-45 text-zinc-900' : ''
          }`}
        />
      </button>
      {open && <p className="text-xs sm:text-sm text-stone-500 leading-relaxed pb-5">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 border-t border-stone-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-14">
        {/* Left column */}
        <div>
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Frequently asked questions</h2>
          <p className="text-sm text-stone-500 mt-3 leading-relaxed">
            Have a custom requirement or technical question?{' '}
            <a
              href="mailto:support@mindharbor.ai"
              className="text-zinc-700 hover:text-zinc-900 underline underline-offset-2 transition-colors font-medium"
            >
              Contact support.
            </a>
          </p>
        </div>

        {/* Right accordion */}
        <div>
          {FAQS.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
