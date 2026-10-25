import React, { useState, useEffect } from 'react'
import { Menu, X, MapPin, Phone, Sun, Moon } from 'lucide-react'

export default function Navbar({ onNavigate, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Services', target: 'services' },
    { label: 'Portfolio', target: 'gallery' },
    { label: 'Cost Calculator', target: 'estimator' },
    { label: 'After Care', target: 'aftercare' },
    { label: 'Find Studio', target: 'location' },
  ]

  // Track the section currently visible in the viewport (Scrollspy)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160

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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 dark:bg-zinc-950/85 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Studio Branding */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Real Logo Image Container */}
            <div className="bg-white px-2.5 py-1.5 rounded-xl shadow-md border border-zinc-200 dark:border-white/20 group-hover:scale-105 transition-transform flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Ink IT Tattoo Studio Logo" 
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-wider text-zinc-900 dark:text-white uppercase">
                  Tattoo Studio
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                  Pune
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                <MapPin className="w-3 h-3 text-rose-500 dark:text-rose-400 shrink-0" />
                <span>Kasba Peth, Near Shaniwar Wada</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links with Active Box Highlight */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target
              return (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className={`text-sm tracking-wide transition-all duration-200 px-3 py-1.5 rounded-lg ${
                    isActive
                      ? 'border border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold bg-zinc-100 dark:bg-white/10 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white border border-transparent hover:border-zinc-300 dark:hover:border-zinc-800'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Right Action Button & Theme Changer */}
          <div className="hidden md:flex items-center gap-3">
            {/* Sun / Moon Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all shadow-sm"
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 transition-transform rotate-0 hover:-rotate-12" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('location')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 shadow-md shadow-rose-950/20 transition-all hover:shadow-rose-900/40 hover:scale-[1.02]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact Studio</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle & Theme Icon */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target
            return (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-all ${
                  isActive
                    ? 'border border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-bold bg-zinc-100 dark:bg-white/10'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white border border-transparent'
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
              Contact Studio
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
