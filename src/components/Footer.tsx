import { useState } from 'react'
import logoImage from '../../logoImage.png'
import { PRODUCT_URLS } from '../config/urls'
import LegalModal from './LegalModal'

const LINKS = {
  Products: [
    { label: 'SailAnchor RAG Engine', href: PRODUCT_URLS.sailanchor, external: true },
    { label: 'SailTask Agent Workflows (Coming Soon)', href: PRODUCT_URLS.sailtask, external: true },
    { label: 'Live Interactive Demo', href: '#playground', external: false },
  ],
  Platform: [
    { label: 'About MindHarborAI', href: '#about', external: false },
    { label: 'Capabilities & Features', href: '#features', external: false },
    { label: 'System Architecture', href: '#architecture', external: false },
    { label: 'How It Works', href: '#how-it-works', external: false },
    { label: 'FAQ', href: '#faq', external: false },
  ],
  Company: [
    { label: 'Company Overview', href: '#about', external: false },
    { label: 'Contact & Support', href: '#contact', external: false },
  ],
  // Legal: [
  //   { label: 'Privacy Policy', href: '#privacy', external: false, legalType: 'privacy' },
  //   { label: 'Terms of Service', href: '#terms', external: false, legalType: 'terms' },
  //   { label: 'Security & Compliance', href: '#dpa', external: false, legalType: 'dpa' },
  // ],
}

export default function Footer() {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'dpa' | null>(null)

  return (
    <>
      <footer className="border-t border-stone-200 py-14 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          {/* Top row */}
          <div className="grid grid-cols-2 md:grid-cols-[1.2fr_repeat(4,auto)] gap-x-12 gap-y-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                  <img src={logoImage} alt="MindHarborAI Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold text-zinc-900 tracking-tight">MindHarbor<span className="text-blue-600">AI</span></span>
                </div>
              </a>
              <p className="text-xs text-stone-500 leading-relaxed max-w-[240px]">
                Next-generation enterprise AI suite combining SailAnchor document RAG and SailTask autonomous workflow agents.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(LINKS).map(([heading, items]) => (
              <div key={heading}>
                <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-widest mb-4">
                  {heading}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item: any) => (
                    <li key={item.label}>
                      {item.legalType ? (
                        <button
                          type="button"
                          onClick={() => setLegalType(item.legalType)}
                          className="text-xs text-stone-600 hover:text-zinc-900 transition-colors cursor-pointer text-left"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="text-xs text-stone-600 hover:text-zinc-900 transition-colors"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-stone-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
            <p>© 2026 MindHarborAI Technologies Pvt. Ltd. All rights reserved.</p>
            <p className="font-mono text-[11px] text-stone-400">
              Powered by SailAnchor RAG · FAISS · BGE Embeddings · SailTask Agents
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Documents Modal */}
      <LegalModal
        isOpen={!!legalType}
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </>
  )
}
