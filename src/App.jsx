import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Estimator from './components/Estimator'
import Aftercare from './components/Aftercare'
import StudioLocation from './components/StudioLocation'
import { MapPin, Phone, Instagram } from 'lucide-react'

export default function App() {
  const [selectedConcept, setSelectedConcept] = useState('')
  const [selectedEstimate, setSelectedEstimate] = useState(null)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleRequestDesign = (designTitle) => {
    setSelectedConcept(designTitle)
    scrollToSection('location')
  }

  const handleSelectEstimate = (estimateData) => {
    setSelectedEstimate(estimateData)
    scrollToSection('location')
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-rose-600 selection:text-white">
      {/* Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Part 1: Hero */}
        <Hero
          onExplorePortfolio={() => scrollToSection('gallery')}
          onOpenEstimator={() => scrollToSection('estimator')}
          onBookConsultation={() => scrollToSection('location')}
        />

        {/* Part 2: Filterable Portfolio & Lightbox Gallery */}
        <Gallery onRequestDesign={handleRequestDesign} />

        {/* Part 3: Simple Price Calculator & Pain Guide */}
        <Estimator onSelectEstimate={handleSelectEstimate} />

        {/* Part 4: Official Studio Aftercare Guide */}
        <Aftercare />

        {/* Part 5: Find Studio & Live Pune Map Location */}
        <StudioLocation />
      </main>

      {/* Studio Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-10 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-white/95 px-2 py-1 rounded-lg border border-white/20 shadow-sm flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Ink IT Tattoo Studio" 
                className="h-5 w-auto object-contain" 
              />
            </div>
            <span className="font-bold text-white uppercase tracking-wider text-sm">Ink IT Tattoo Studio</span>
            <span>• Kasba Peth, Pune</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-rose-500" /> Near Shaniwar Wada</span>
            <a href="tel:+919021209377" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-rose-500" /> +91 90212 09377
            </a>
            <a 
              href="https://www.instagram.com/inkit_tattoostudio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-rose-400 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-rose-500" /> @inkit_tattoostudio
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
