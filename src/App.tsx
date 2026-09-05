import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import CompanyInfo from './components/CompanyInfo'
import Playground from './components/Playground'
import Features from './components/Features'
import Architecture from './components/Architecture'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50/40 text-zinc-900 overflow-x-hidden font-sans selection:bg-stone-200">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <CompanyInfo />
        <Playground />
        <Features />
        <Architecture />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
