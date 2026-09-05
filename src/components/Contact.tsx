import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [usecase, setUsecase] = useState('SailAnchor (Document RAG)')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
      setTimeout(() => setIsSubmitted(false), 6000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl mb-4">
            Contact & Enterprise Support
          </h2>
          <p className="text-sm text-stone-500">
            Have questions about SailAnchor, SailTask, enterprise licensing, or on-prem deployment? Our team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Let's talk AI solutions</h3>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                Whether you need assistance building custom agent workflows, configuring FAISS vector stores, or discussing custom enterprise SLAs, reach out anytime.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 text-zinc-900 rounded-xl shrink-0 border border-stone-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Email Support</h4>
                  <p className="text-xs text-stone-600 mt-0.5">support@mindharbor.ai</p>
                  {/* <p className="text-[11px] text-stone-400 mt-0.5">Enterprise SLA: Under 2 hours response</p> */}
                </div>
              </div>

              {/* Direct Phone Line (Commented out for now)
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 text-zinc-900 rounded-xl shrink-0 border border-stone-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Direct Phone Line</h4>
                  <p className="text-xs text-stone-600 mt-0.5">+1 (800) 555-0199</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Mon–Fri, 9am – 6pm EST</p>
                </div>
              </div>
              */}

              {/* Headquarters Address (Commented out for now)
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 text-zinc-900 rounded-xl shrink-0 border border-stone-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 text-sm">Headquarters</h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    MindHarborAI Corp.<br />
                    100 Pine Street, Suite 1250<br />
                    San Francisco, CA 94111
                  </p>
                </div>
              </div>
              */}
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
            <h3 className="text-base font-bold text-zinc-900 mb-6">Send us a message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-zinc-900">Message Received!</h4>
                <p className="text-xs text-stone-500 max-w-sm">
                  Thank you for reaching out to MindHarborAI. An engineer or sales specialist will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5" htmlFor="email">
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5" htmlFor="usecase">
                    Product of Interest
                  </label>
                  <select
                    id="usecase"
                    value={usecase}
                    onChange={(e) => setUsecase(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                  >
                    <option value="SailAnchor (Document RAG)">SailAnchor (Document RAG & Q&A)</option>
                    <option value="SailTask (Autonomous Agent)">SailTask (Autonomous Workflows)</option>
                    <option value="Both Engines / Full Suite">Both Engines / Full MindHarborAI Suite</option>
                    <option value="Custom On-Premise Deployment">Custom On-Premise / Air-Gapped Deployment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1.5" htmlFor="message">
                    Message / Project Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                    placeholder="Tell us about your document volume or agent requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center !py-2.5 !text-xs"
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
