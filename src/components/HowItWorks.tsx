import { Upload, Cpu, MessageSquare } from 'lucide-react'

const STEPS = [
  {
    icon: Upload,
    num: '01',
    title: 'Upload documents or connect APIs',
    desc: 'Upload PDFs, Word files, scanned receipts, or integrate webhooks. Preprocessing, OCR, and table extraction happen automatically.',
  },
  {
    icon: Cpu,
    num: '02',
    title: 'We embed, index, and orchestrate',
    desc: 'Passages are chunked and stored in FAISS vector indices, while agent DAG graphs are configured for task execution.',
  },
  {
    icon: MessageSquare,
    num: '03',
    title: 'Query in plain English & automate',
    desc: 'Ask complex questions with page-exact source citations or trigger multi-step autonomous workflow loops seamlessly.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            From raw files and tasks to actionable intelligence in 3 steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.num} className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg border border-stone-200 bg-stone-50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-zinc-800" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-mono text-stone-400 font-semibold tracking-widest">{s.num}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-stone-500 max-w-md">
            Zero complicated infrastructure. Upload your first document or launch an agent in under 2 minutes.
          </p>
          <a href="#playground" id="how-it-works-cta" className="btn-primary flex-shrink-0">
            Try Live Demo Now
          </a>
        </div>
      </div>
    </section>
  )
}
