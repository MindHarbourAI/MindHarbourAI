import { X, ShieldCheck, FileText, Lock } from 'lucide-react'

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'privacy' | 'terms' | 'dpa' | null
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen || !type) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-stone-200">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              {type === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {type === 'terms' && <FileText className="w-5 h-5" />}
              {type === 'dpa' && <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 leading-none">
                {type === 'privacy' && 'Privacy Policy (Indian DPDP Act & IT Act Compliant)'}
                {type === 'terms' && 'Terms of Service & Jurisdiction (Laws of India)'}
                {type === 'dpa' && 'Data Processing Agreement (DPDP Act 2023)'}
              </h3>
              <p className="text-xs text-stone-500 mt-1">Last updated: August 2026 · MindHarborAI Technologies Pvt. Ltd.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-zinc-900 hover:bg-stone-200/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-stone-600 leading-relaxed font-sans">

          {type === 'privacy' && (
            <>
              <section className="space-y-3">
                <h4 className="text-base font-bold text-zinc-900">1. Introduction & Governing Law</h4>
                <p>
                  MindHarborAI (operated by <strong>MindHarborAI Technologies Pvt. Ltd.</strong>) is committed to protecting the privacy of users in India and worldwide. This Privacy Policy is formulated in accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the <strong>Information Technology Act, 2000</strong>.
                </p>
              </section>

              <section className="space-y-3">
                <h4 className="text-base font-bold text-zinc-900">2. Information We Collect</h4>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Account Credentials:</strong> User names, email addresses, salted password hashes, and user settings.</li>
                  <li><strong>Billing Records:</strong> INR (₹) transaction logs processed securely via RBI-compliant aggregators (Razorpay / UPI / NetBanking / Cards).</li>
                  <li><strong>Document & Knowledge Data:</strong> Private enterprise documents, text chunks, vector embeddings, and conversation logs.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h4 className="text-base font-bold text-zinc-900">3. Rights of Data Principals in India</h4>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Right to Summary:</strong> Request information regarding processed personal data.</li>
                  <li><strong>Right to Correction & Erasure:</strong> Request update or permanent deletion of uploaded data.</li>
                  <li><strong>Right of Grievance Redressal:</strong> Address concerns to our designated Grievance Officer.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h4 className="text-base font-bold text-zinc-900">4. Statutory Grievance Redressal Officer</h4>
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1 text-xs">
                  <p><strong>Grievance Officer:</strong> Legal & Compliance Officer</p>
                  <p><strong>Entity:</strong> MindHarborAI Technologies Pvt. Ltd.</p>
                  <p><strong>Email:</strong> <a href="mailto:support@mindharbor.ai" className="text-blue-600 underline">support@mindharbor.ai</a> / <a href="mailto:mindharbourai@gmail.com" className="text-blue-600 underline">mindharbourai@gmail.com</a></p>
                  <p><strong>Response Timeline:</strong> Acknowledged within 24 hours, resolved within 15 days.</p>
                </div>
              </section>
            </>
          )}

          {type === 'terms' && (
            <>
              <section className="space-y-3">
                <h4 className="text-base font-bold text-zinc-900">1. Acceptance & Exclusive Jurisdiction</h4>
                <p>
                  These Terms of Service govern your use of the MindHarborAI platform. Governed by the <strong>laws of India</strong>. Courts at Bengaluru, Karnataka, India shall have exclusive jurisdiction over all legal disputes.
                </p>
              </section>

              <section className="space-y-3">
                <h4 className="text-base font-bold text-zinc-900">2. IP Ownership & Consumer Guarantee</h4>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Users retain 100% ownership of uploaded documents and data.</li>
                  <li>Subscriptions include 14-day free trials or refunds per Indian Consumer Protection Rules, 2020.</li>
                </ul>
              </section>
            </>
          )}

          {type === 'dpa' && (
            <>
              <section className="space-y-3">
                <h4 className="text-base font-bold text-zinc-900">Data Processing Agreement (DPDP Act 2023)</h4>
                <p>
                  Applies to enterprise customer data under the Indian Digital Personal Data Protection Act, 2023. Customer acts as Data Fiduciary and MindHarborAI acts as Data Processor with AES-256 encryption and tenant isolation.
                </p>
              </section>
            </>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-200 flex justify-end bg-stone-50">
          <button
            onClick={onClose}
            className="btn-primary !py-2 !px-4 !text-xs"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  )
}
