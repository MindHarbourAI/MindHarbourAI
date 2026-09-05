import { useState } from 'react'
import { FileText, Bot, Play, RefreshCw, CheckCircle2, Search, ArrowRight, Shield, Zap } from 'lucide-react'

const SAILANCHOR_PRESETS = [
  {
    label: 'Q3 Financial & Compliance Risks',
    question: 'What are the main financial risks and required capital reserves for Q3?',
    answer: 'According to page 14 & 22 of Q3_Report.pdf, the primary risks are APAC cloud compliance costs (+14.2%) and engineering team expansion delays. The board recommends reserving $180,000 in contingency capital.',
    citations: ['Q3_Report.pdf · p.14', 'Q3_Report.pdf · p.22'],
  },
  {
    label: 'SOC2 Data Residency Policy',
    question: 'Where is customer data stored and how is encryption managed?',
    answer: 'As specified in Security_Policy_v2.pdf, customer data is encrypted at rest using AES-256 and in transit via TLS 1.3. EU customer vectors reside strictly in Frankfurt (eu-central-1).',
    citations: ['Security_Policy_v2.pdf · p.7', 'Compliance_SLA.pdf · p.3'],
  },
  {
    label: 'API Rate Limits & Quotas',
    question: 'What are the throughput limits for batch document ingestion?',
    answer: 'Per API_Reference.docx (p.11), Pro tier supports up to 250 parallel document chunks/sec with auto-scaling FAISS index synchronization.',
    citations: ['API_Reference.docx · p.11'],
  },
]

const SAILTASK_PRESETS = [
  {
    title: 'Financial PDF Audit & GL Mapping',
    desc: 'Extract invoice line items, perform tax validation, and output accounting JSON.',
    steps: [
      'Initializing Document Layout OCR...',
      'Segmenting tables into structured JSON schemas...',
      'Verifying tax calculations against compliance rules...',
      'Task Finished: 100% verified. JSON output ready.',
    ],
  },
  {
    title: 'Automated Vulnerability Scan & Alert',
    desc: 'Analyze codebase pull requests, flag security bugs, and ping Slack webhook.',
    steps: [
      'Scanning AST tree for unparsed input parameters...',
      'Detected potential SQL injection vulnerability in user_auth.py:42',
      'Generating patch pull request & severity rating (HIGH)...',
      'Alert dispatched to Slack #security-alerts.',
    ],
  },
  {
    title: 'Multi-Language API Spec Generator',
    desc: 'Parse OpenAPI schemas and automatically generate TypeScript & Python SDKs.',
    steps: [
      'Loading openapi.yaml specification...',
      'Validating endpoint parameters and response interfaces...',
      'Generating TypeScript interfaces and Python dataclasses...',
      'Build succeeded: SDK artifacts packaged to /dist.',
    ],
  },
]

export default function Playground() {
  const [activeEngine, setActiveEngine] = useState<'sailanchor' | 'sailtask'>('sailanchor')

  // SailAnchor state
  const [anchorQuery, setAnchorQuery] = useState(SAILANCHOR_PRESETS[0].question)
  const [anchorPresetIdx, setAnchorPresetIdx] = useState(0)
  const [anchorLoading, setAnchorLoading] = useState(false)
  const [anchorResult, setAnchorResult] = useState(SAILANCHOR_PRESETS[0])

  // SailTask state
  const [taskPresetIdx, setTaskPresetIdx] = useState(0)
  const [selectedBackend, setSelectedBackend] = useState('OpenAI GPT-4o')
  const [taskRunning, setTaskRunning] = useState(false)
  const [taskCompleted, setTaskCompleted] = useState(true)

  const handleAnchorSearch = (presetIdx?: number) => {
    const idx = presetIdx !== undefined ? presetIdx : anchorPresetIdx
    setAnchorLoading(true)
    setTimeout(() => {
      setAnchorResult(SAILANCHOR_PRESETS[idx])
      setAnchorLoading(false)
    }, 600)
  }

  const handleTaskRun = () => {
    setTaskRunning(true)
    setTaskCompleted(false)
    setTimeout(() => {
      setTaskRunning(false)
      setTaskCompleted(true)
    }, 1200)
  }

  return (
    <section id="playground" className="py-24 px-6 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="section-label mb-3">Live Interactive Demo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Test MindHarborAI engines in real time
          </h2>
          <p className="text-stone-500 text-sm mt-3">
            Experience how SailAnchor retrieves cited answers and how SailTask executes autonomous workflows.
          </p>
        </div>

        {/* Interactive Container Card */}
        <div className="bg-white border border-stone-200 rounded-2xl shadow-lg shadow-stone-200/40 overflow-hidden">
          {/* Tab Selection Switcher */}
          <div className="bg-stone-50 border-b border-stone-200 p-2 flex flex-wrap gap-2 justify-center sm:justify-start">
            <button
              onClick={() => setActiveEngine('sailanchor')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeEngine === 'sailanchor'
                  ? 'bg-white text-zinc-900 shadow-sm border border-stone-200'
                  : 'text-stone-500 hover:text-zinc-900 hover:bg-stone-100'
              }`}
            >
              <FileText className="w-4 h-4 text-blue-600" />
              SailAnchor (Document RAG Demo)
            </button>
            <button
              onClick={() => setActiveEngine('sailtask')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeEngine === 'sailtask'
                  ? 'bg-white text-zinc-900 shadow-sm border border-stone-200'
                  : 'text-stone-500 hover:text-zinc-900 hover:bg-stone-100'
              }`}
            >
              <Bot className="w-4 h-4 text-emerald-600" />
              SailTask (Agent Workflow Demo)
              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 leading-none ml-1">
                Coming Soon
              </span>
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="p-6 md:p-8">
            {activeEngine === 'sailanchor' ? (
              /* SailAnchor Playground */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Controls */}
                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                      Sample Document Queries
                    </label>
                    <div className="space-y-2">
                      {SAILANCHOR_PRESETS.map((p, idx) => (
                        <button
                          key={p.label}
                          onClick={() => {
                            setAnchorPresetIdx(idx)
                            setAnchorQuery(p.question)
                            handleAnchorSearch(idx)
                          }}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                            anchorPresetIdx === idx
                              ? 'border-blue-500 bg-blue-50/40 font-semibold text-zinc-900'
                              : 'border-stone-200 hover:border-stone-300 text-stone-600 hover:bg-stone-50'
                          }`}
                        >
                          <div className="font-semibold text-zinc-900 mb-0.5">{p.label}</div>
                          <div className="text-[11px] text-stone-500 line-clamp-1">{p.question}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                      Custom Query Input
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={anchorQuery}
                        onChange={(e) => setAnchorQuery(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-blue-500 pr-20"
                        placeholder="Type any document query..."
                      />
                      <button
                        onClick={() => handleAnchorSearch()}
                        disabled={anchorLoading}
                        className="absolute right-1.5 top-1.5 bottom-1.5 btn-primary !py-1 !px-3 !text-xs"
                      >
                        {anchorLoading ? 'Searching...' : 'Search'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Result Output */}
                <div className="lg:col-span-7 bg-stone-50 border border-stone-200 rounded-xl p-6 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        <span className="text-xs font-mono font-bold text-zinc-900">SailAnchor RAG Result</span>
                      </div>
                      <span className="text-[11px] font-mono text-stone-400">FAISS Index · BGE Reranked</span>
                    </div>

                    {anchorLoading ? (
                      <div className="py-12 flex flex-col items-center justify-center gap-3 text-stone-400">
                        <RefreshCw className="w-6 h-6 animate-spin text-blue-600" />
                        <span className="text-xs font-mono">Running vector similarity search & reranking...</span>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <span className="text-[11px] uppercase tracking-widest text-stone-400 font-semibold block mb-1">
                            Synthesized Answer
                          </span>
                          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                            {anchorResult.answer}
                          </p>
                        </div>

                        <div>
                          <span className="text-[11px] uppercase tracking-widest text-stone-400 font-semibold block mb-2">
                            Source Citations (Page-Exact)
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {anchorResult.citations.map((c) => (
                              <span
                                key={c}
                                className="px-3 py-1 rounded-lg bg-stone-200/70 border border-stone-300 text-stone-700 text-xs font-mono"
                              >
                                📄 {c}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                    <span>Latency: 380ms</span>
                    <span>Confidence Score: 0.982</span>
                  </div>
                </div>
              </div>
            ) : (
              /* SailTask Playground */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Task Setup */}
                <div className="lg:col-span-5 space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                      Select Workflow Template
                    </label>
                    <div className="space-y-2">
                      {SAILTASK_PRESETS.map((t, idx) => (
                        <button
                          key={t.title}
                          onClick={() => {
                            setTaskPresetIdx(idx)
                            setTaskCompleted(true)
                          }}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                            taskPresetIdx === idx
                              ? 'border-emerald-500 bg-emerald-50/40 font-semibold text-zinc-900'
                              : 'border-stone-200 hover:border-stone-300 text-stone-600 hover:bg-stone-50'
                          }`}
                        >
                          <div className="font-semibold text-zinc-900 mb-0.5">{t.title}</div>
                          <div className="text-[11px] text-stone-500">{t.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                      LLM Backend
                    </label>
                    <select
                      value={selectedBackend}
                      onChange={(e) => setSelectedBackend(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-emerald-500"
                    >
                      <option value="OpenAI GPT-4o">OpenAI GPT-4o (Cloud API)</option>
                      <option value="Google Gemini 1.5 Flash">Google Gemini 1.5 Flash</option>
                      <option value="Local Ollama Llama 3">Local Ollama Llama 3 (On-Prem / Private)</option>
                    </select>
                  </div>

                  <button
                    onClick={handleTaskRun}
                    disabled={taskRunning}
                    className="btn-primary w-full justify-center !py-2.5 !text-xs !bg-zinc-900"
                  >
                    {taskRunning ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                        Executing Agent Steps...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-white" />
                        Execute Workflow ({selectedBackend.split(' ')[0]})
                      </>
                    )}
                  </button>
                </div>

                {/* Right Agent Execution Console */}
                <div className="lg:col-span-7 bg-zinc-900 text-stone-100 rounded-xl p-6 flex flex-col justify-between font-mono min-h-[300px] border border-zinc-800">
                  <div>
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-bold text-white">SailTask Execution Console</span>
                      </div>
                      <span className="text-[11px] text-zinc-400">{selectedBackend}</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      {SAILTASK_PRESETS[taskPresetIdx].steps.map((step, i) => (
                        <div
                          key={step}
                          className={`flex items-start gap-2.5 p-2.5 rounded-lg border ${
                            i === SAILTASK_PRESETS[taskPresetIdx].steps.length - 1
                              ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                              : 'bg-zinc-850/60 border-zinc-800 text-zinc-300'
                          }`}
                        >
                          <span className="text-zinc-500 font-bold">[{i + 1}]</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                    <span>Status: {taskRunning ? 'RUNNING' : 'COMPLETED'}</span>
                    <span>Memory: 42MB · Parallel Threads: 4</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
