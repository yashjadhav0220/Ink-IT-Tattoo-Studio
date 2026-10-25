import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Estimator from './components/Estimator'
import Aftercare from './components/Aftercare'
import StudioLocation from './components/StudioLocation'
import { MapPin, Phone, Instagram } from 'lucide-react'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('inkit_theme') || 'dark'
  })
  const [selectedConcept, setSelectedConcept] = useState('')
  const [selectedEstimate, setSelectedEstimate] = useState(null)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('inkit_theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans selection:bg-rose-600 selection:text-white transition-colors duration-200">
      {/* Navigation with Theme Switcher */}
      <Navbar
        onNavigate={scrollToSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplorePortfolio={() => scrollToSection('gallery')}
          onOpenEstimator={() => scrollToSection('estimator')}
          onBookConsultation={() => scrollToSection('location')}
        />

        {/* Studio Services (Tattoos, Laser Removal & Piercing) */}
        <Services
          onBookService={() => scrollToSection('location')}
          onOpenCalculator={() => scrollToSection('estimator')}
        />

        {/* Filterable Portfolio & Piercing Lightbox Gallery */}
        <Gallery onRequestDesign={handleRequestDesign} />

        {/* Simple Price Calculator & Pain Guide */}
        <Estimator onSelectEstimate={handleSelectEstimate} />

        {/* Official Studio Aftercare Guide */}
        <Aftercare />

        {/* Find Studio & Live Pune Map Location */}
        <StudioLocation />
      </main>

      {/* Studio Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-10 text-xs text-zinc-500 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-white/95 px-2 py-1 rounded-lg border border-zinc-200 dark:border-white/20 shadow-sm flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Ink IT Tattoo Studio" 
                className="h-5 w-auto object-contain" 
              />
            </div>
            <span className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider text-sm">
              Ink IT Tattoo Studio
            </span>
            <span>• Kasba Peth, Pune</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" /> Near Shaniwar Wada
            </span>
            <a href="tel:+919021209377" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-rose-500" /> +91 90212 09377
            </a>
            <a 
              href="https://www.instagram.com/inkit_tattoostudio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-rose-500 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-rose-500" /> @inkit_tattoostudio
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
