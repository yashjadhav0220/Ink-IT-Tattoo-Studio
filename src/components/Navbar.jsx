import React, { useState, useEffect } from 'react'
import { Menu, X, MapPin, Phone } from 'lucide-react'

export default function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Portfolio', target: 'gallery' },
    { label: 'Cost Calculator', target: 'estimator' },
    { label: 'After Care', target: 'aftercare' },
    { label: 'Find Studio', target: 'location' },
  ]

  // Track the section currently visible in the viewport (Scrollspy)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160 // offset for navbar height + breathing room

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].target
        const el = document.getElementById(sectionId)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId)
          return
        }
      }
      setActiveSection('hero')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (target) => {
    setActiveSection(target)
    setMobileMenuOpen(false)
    if (onNavigate) onNavigate(target)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/85 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Studio Branding */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Real Logo Image Container */}
            <div className="bg-white/95 px-2.5 py-1.5 rounded-xl shadow-md border border-white/20 group-hover:scale-105 transition-transform flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Ink IT Tattoo Studio Logo" 
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-wider text-white uppercase">
                  Tattoo Studio
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Pune
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                <span>Kasba Peth, Near Shaniwar Wada</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links with Active Box Highlight */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target
              return (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className={`text-sm tracking-wide transition-all duration-200 px-3.5 py-1.5 rounded-lg ${
                    isActive
                      ? 'border border-white text-white font-semibold bg-white/10 shadow-sm'
                      : 'text-zinc-300 hover:text-white border border-transparent hover:border-zinc-800'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('location')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 shadow-md shadow-rose-950/30 transition-all hover:shadow-rose-900/50 hover:scale-[1.02]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact / Visit Studio</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target
            return (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-all ${
                  isActive
                    ? 'border border-white text-white font-bold bg-white/10'
                    : 'text-zinc-300 hover:bg-zinc-900 hover:text-white border border-transparent'
                }`}
              >
                {link.label}
              </button>
            )
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('location')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-rose-600 hover:bg-rose-500 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              Contact / Visit Studio
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
