import { Check, Mail } from 'lucide-react'

interface Plan {
  name: string
  originalPrice?: string
  price: string
  discountBadge?: string
  desc: string
  features: string[]
  cta: string
  highlighted: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Free',
    price: '0',
    desc: 'For individual developers exploring document Q&A and basic agents.',
    features: [
      '1 Knowledge Base',
      '3 Documents (PDF/DOCX)',
      '150 queries / month',
      'Standard FAISS vector search',
      'Community Discord support',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Starter',
    originalPrice: '699',
    price: '399',
    discountBadge: 'BETA OFFER',
    desc: 'For early-stage startups and small teams.',
    features: [
      '3 Knowledge Bases',
      '40 Documents',
      '3,500 queries / month',
      'Dense-sparse hybrid search',
      'SailTask (Up to 5 active workflows)',
      'Email support',
    ],
    cta: 'Choose Starter',
    highlighted: false,
  },
  {
    name: 'Pro',
    originalPrice: '2,499',
    price: '1,999',
    discountBadge: 'SAVE ₹500',
    desc: 'For growing professional teams with heavy document & workflow needs.',
    features: [
      '10 Knowledge Bases',
      '160 Documents',
      '25,000 queries / month',
      'Multimodal RAG & semantic cache',
      'SailTask Agent loops & retries',
      'Priority email & chat support',
    ],
    cta: 'Choose Pro',
    highlighted: true,
  },
  {
    name: 'Growth',
    originalPrice: '7,999',
    price: '6,999',
    discountBadge: 'SAVE ₹1,000',
    desc: 'For scale-ups requiring high throughput and custom integrations.',
    features: [
      '25 Knowledge Bases',
      '250 Documents',
      '75,000 queries / month',
      'Agentic workflow orchestration',
      'REST API access & webhooks',
      'Dedicated Slack support channel',
    ],
    cta: 'Choose Growth',
    highlighted: false,
  },
]

export default function Pricing() {
  const enterpriseSubject = encodeURIComponent("MindHarborAI Enterprise Inquiry")
  const enterpriseBody = encodeURIComponent(
    "Hello MindHarborAI Team,\n\n" +
    "I would like to request more information about the MindHarborAI Enterprise Deployment (SailAnchor & SailTask).\n\n" +
    "Name: \n" +
    "Company / Organization: \n" +
    "Job Title / Role: \n" +
    "Estimated Users / Volume: \n" +
    "Deployment Preference (On-Premise / Isolated Cloud / Dedicated SLA): \n" +
    "Custom Requirements:\n" +
    "- \n\n" +
    "Best regards,\n"
  )

  return (
    <section id="pricing" className="py-24 px-6 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <p className="section-label mb-0">Pricing</p>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              ⚡ Public Beta Special Discount
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Transparent pricing with Public Beta launch discounts
          </h2>
          <p className="text-stone-500 text-sm mt-3">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-6 flex flex-col justify-between ${
                p.highlighted
                  ? 'bg-zinc-900 border border-zinc-800 text-white shadow-xl'
                  : 'bg-white border border-stone-200 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-semibold ${p.highlighted ? 'text-white' : 'text-zinc-900'}`}>
                    {p.name}
                  </span>
                  {p.highlighted ? (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white/10 text-white border border-white/20">
                      Popular
                    </span>
                  ) : p.discountBadge ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {p.discountBadge}
                    </span>
                  ) : null}
                </div>

                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  {p.originalPrice && (
                    <span className={`text-base font-medium line-through ${p.highlighted ? 'text-stone-400' : 'text-stone-400'}`}>
                      ₹{p.originalPrice}
                    </span>
                  )}
                  <span className={`text-3xl font-bold ${p.highlighted ? 'text-white' : 'text-zinc-900'}`}>
                    ₹{p.price}
                  </span>
                  <span className={`text-xs ${p.highlighted ? 'text-stone-400' : 'text-stone-500'}`}>/ month</span>
                </div>
                <p className={`text-xs leading-relaxed mb-6 ${p.highlighted ? 'text-stone-400' : 'text-stone-500'}`}>
                  {p.desc}
                </p>

                <a
                  href="#contact"
                  className={`w-full mb-6 ${
                    p.highlighted
                      ? 'btn-primary justify-center !bg-white !text-zinc-900 hover:!bg-stone-100'
                      : 'btn-secondary justify-center'
                  }`}
                >
                  {p.cta}
                </a>

                <ul className="flex flex-col gap-3 pt-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.highlighted ? 'text-emerald-400' : 'text-zinc-700'}`}
                        strokeWidth={2}
                      />
                      <span className={p.highlighted ? 'text-stone-300' : 'text-stone-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Banner Box (Commented out for now)
        <div className="mt-8 p-6 md:p-8 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Enterprise Plan</span>
              <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-semibold">On-Prem & Custom SLA</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-2xl">
              Need air-gapped on-premise installation, custom SSO/SAML integrations, dedicated SLAs, or data residency (EU / US / India)?
            </p>
          </div>
          <a
            href={`mailto:hello@mindharbor.ai?subject=${enterpriseSubject}&body=${enterpriseBody}`}
            className="btn-primary !bg-blue-700 hover:!bg-blue-800 flex-shrink-0 !text-xs !py-2.5 !px-5"
          >
            <Mail className="w-4 h-4" /> Contact Enterprise Sales
          </a>
        </div>
        */}
      </div>
    </section>
  )
}
