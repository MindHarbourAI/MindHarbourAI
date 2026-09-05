import { useState } from 'react'
import { ArrowRight, ArrowUpRight, FileText, Bot, Search, CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react'

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'sailanchor' | 'sailtask'>('sailanchor')

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Subtle warm radial background gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[520px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(24,24,27,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <span className="badge">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block animate-pulse" />
            MindHarborAI Suite 2.0 · SailAnchor & SailTask Engines
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-[58px] font-bold leading-[1.1] tracking-tight text-zinc-900 max-w-4xl mx-auto mb-6">
          Turn enterprise documents & complex tasks into <span className="text-zinc-900 underline decoration-stone-300 underline-offset-8">intelligent AI systems</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-center text-stone-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          MindHarborAI powers your team with <strong>SailAnchor</strong> for source-cited document Q&A and <strong>SailTask</strong> for autonomous multi-step agent workflows.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
          <a href="#products" id="hero-primary-cta" className="btn-primary">
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#playground" id="hero-secondary-cta" className="btn-secondary">
            Try Interactive Demo
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Interactive App Window Mockup */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-stone-200 shadow-xl shadow-stone-200/50">
          {/* Window Chrome Header */}
          <div className="bg-stone-50 border-b border-stone-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-stone-300" />
              <div className="w-3 h-3 rounded-full bg-stone-300" />
              <div className="w-3 h-3 rounded-full bg-stone-300" />
            </div>
            <div className="flex-1 mx-4">
              <div className="h-6 rounded-md bg-white border border-stone-200 flex items-center px-3 max-w-sm mx-auto justify-between text-xs text-stone-400 font-mono">
                <span>app.mindharbor.ai / {activeTab}</span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-stone-400">v2.4.0</span>
            </div>
          </div>

          {/* App Body */}
          <div className="bg-white grid grid-cols-1 md:grid-cols-[230px_1fr] divide-y md:divide-y-0 md:divide-x divide-stone-100 min-h-[380px]">
            {/* Sidebar */}
            <div className="bg-stone-50/80 p-4 flex flex-col justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-3 px-2">Engines</p>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => setActiveTab('sailanchor')}
                    className={`px-3 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2.5 transition-all text-left ${
                      activeTab === 'sailanchor'
                        ? 'bg-zinc-900 text-white shadow-sm'
                        : 'text-stone-600 hover:bg-stone-200/60'
                    }`}
                  >
                    <FileText className={`w-4 h-4 ${activeTab === 'sailanchor' ? 'text-blue-400' : 'text-stone-400'}`} />
                    <div>
                      <div className="font-semibold">SailAnchor</div>
                      <div className="text-[10px] opacity-70">Document RAG & Q&A</div>
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveTab('sailtask')}
                    className={`px-3 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2.5 transition-all text-left ${
                      activeTab === 'sailtask'
                        ? 'bg-zinc-900 text-white shadow-sm'
                        : 'text-stone-600 hover:bg-stone-200/60'
                    }`}
                  >
                    <Bot className={`w-4 h-4 ${activeTab === 'sailtask' ? 'text-emerald-400' : 'text-stone-400'}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">SailTask</span>
                        <span className="text-[8px] font-bold uppercase tracking-wider px-1 py-0.5 rounded bg-purple-100 text-purple-700 leading-none">Soon</span>
                      </div>
                      <div className="text-[10px] opacity-70">Autonomous Agent</div>
                    </div>
                  </button>
                </div>

                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-2 px-2">Knowledge Index</p>
                  <div className="space-y-1">
                    <div className="px-2.5 py-1.5 rounded text-[11px] text-stone-500 font-mono flex items-center gap-2">
                      <span className="text-zinc-400">📄</span> Q3_Financials.pdf
                    </div>
                    <div className="px-2.5 py-1.5 rounded text-[11px] text-stone-500 font-mono flex items-center gap-2">
                      <span className="text-zinc-400">📄</span> Security_Audit_2026.pdf
                    </div>
                    <div className="px-2.5 py-1.5 rounded text-[11px] text-stone-500 font-mono flex items-center gap-2">
                      <span className="text-zinc-400">📄</span> API_Spec_v2.docx
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-white border border-stone-200 rounded-lg text-[11px] text-stone-500">
                <span className="font-semibold text-zinc-900 block mb-0.5">FAISS Vector Store</span>
                12,480 chunks indexed with BGE embeddings.
              </div>
            </div>

            {/* Main Interactive Workspace Area */}
            <div className="flex flex-col bg-white">
              {activeTab === 'sailanchor' ? (
                /* SailAnchor Mockup */
                <div className="flex-1 flex flex-col justify-between p-5 space-y-4">
                  <div className="space-y-4">
                    {/* User Query */}
                    <div className="flex justify-end">
                      <div className="max-w-xs sm:max-w-sm bg-blue-600 text-white text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tr-xs shadow-sm">
                        What key compliance risks and budget reserves were identified in the Q3 report?
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex gap-3 items-start max-w-lg">
                      <div className="w-7 h-7 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0 text-white font-bold text-xs mt-0.5 shadow-sm">
                        ⚓
                      </div>
                      <div>
                        <div className="bg-stone-50 border border-stone-200 text-stone-800 text-xs sm:text-sm px-4 py-3 rounded-2xl rounded-tl-xs leading-relaxed">
                          The Q3 Audit highlighted <span className="font-semibold text-zinc-900">3 critical compliance items</span>:
                          <ul className="list-disc ml-4 mt-1.5 space-y-1 text-xs text-stone-700">
                            <li>APAC regional cloud data residency audit requirement</li>
                            <li>Infrastructure expenditure increase of <span className="font-semibold text-zinc-900">14.2%</span></li>
                            <li>Recommended contingency allocation of <span className="font-semibold text-zinc-900">$180,000</span></li>
                          </ul>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className="text-[10px] text-stone-400 font-medium">Exact Source Citations:</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-stone-600 font-mono">
                            Q3_Financials.pdf · p.18
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-stone-600 font-mono">
                            Security_Audit.pdf · p.42
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="pt-2">
                    <div className="flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 shadow-inner">
                      <Search className="w-4 h-4 text-stone-400" />
                      <span className="text-stone-400 text-xs flex-1">Ask any question across your uploaded documents...</span>
                      <div className="w-6 h-6 rounded-md bg-zinc-900 text-white flex items-center justify-center text-xs">
                        ↵
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* SailTask Mockup */
                <div className="flex-1 flex flex-col justify-between p-5 space-y-4">
                  <div className="space-y-4">
                    {/* Task Title */}
                    <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                      <div>
                        <span className="text-xs font-bold text-zinc-900">Agent Task #4092</span>
                        <p className="text-[11px] text-stone-500">Automated Financial & Security Reconciliation</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                        Task Executing (3/3 steps)
                      </span>
                    </div>

                    {/* Step log */}
                    <div className="space-y-2.5 font-mono text-xs">
                      <div className="flex items-center gap-2 text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Step 1: Extract unstructured financial table data (BGE Embeddings)</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Step 2: Cross-check against internal policy constraints via LLM Reranker</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-900 bg-blue-50/50 p-2.5 rounded-lg border border-blue-200">
                        <Zap className="w-4 h-4 text-blue-600 shrink-0 animate-bounce" />
                        <span className="font-medium">Step 3: Generate summary report & dispatch webhook alert</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-stone-900 text-stone-200 rounded-xl font-mono text-[11px]">
                    <div className="text-stone-400 mb-1">// Execution Log Output</div>
                    <div className="text-emerald-400">✓ Task completed in 840ms. 0 errors. Output saved to /export/audit_report.json</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12">
          {[
            'Source-Cited Answers',
            'FAISS & Dense Embeddings',
            'Autonomous Agent Loops',
            'GDPR & On-Prem Ready',
          ].map((t, i, arr) => (
            <div key={t} className="flex items-center gap-4">
              <span className="text-xs font-medium text-stone-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700" />
                {t}
              </span>
              {i < arr.length - 1 && <span className="hidden sm:block w-px h-3 bg-stone-200" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
