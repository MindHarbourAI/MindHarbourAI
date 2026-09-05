import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import logoImage from '../../logoImage.png'

const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Live Demo', href: '#playground' },
  { label: 'Features', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <img src={logoImage} alt="MindHarborAI Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-zinc-900 tracking-tight">MindHarbor<span className="text-blue-600">AI</span></span>
            </div>
            <span className="text-[9.5px] text-stone-400 font-medium tracking-wide">Enterprise AI Suite</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-medium text-stone-500 hover:text-zinc-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="text-xs font-medium text-stone-600 hover:text-zinc-900 transition-colors"
          >
            Contact Team
          </a>
          <a href="#playground" className="btn-primary !py-2 !px-3.5 !text-xs">
            Try Demo <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-stone-600 hover:text-zinc-900 transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-5 flex flex-col gap-4 shadow-sm">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-stone-600 hover:text-zinc-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-secondary !text-sm text-center justify-center"
            >
              Contact Team
            </a>
            <a
              href="#playground"
              onClick={() => setMobileOpen(false)}
              className="btn-primary !text-sm text-center justify-center"
            >
              Try Live Demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
