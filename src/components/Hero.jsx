import React from 'react'
import { Sparkles, ArrowRight, ShieldCheck, Star, Award, Compass, Heart, ExternalLink } from 'lucide-react'

export default function Hero({ onExplorePortfolio, onBookConsultation, onOpenEstimator }) {
  const googleReviewsUrl = "https://www.google.com/search?q=inkit+tattoo+studio+pune+reviews#lrd=0x3bc2c1004ec5d36f:0x7554e7f7bd025b1a,1"

  const stats = [
    { label: 'Years of Artistry', value: '2 Years', icon: Award },
    { label: 'Custom Inks Done', value: '5,000+', icon: Sparkles },
    { label: 'Sterile & Certified', value: '100%', icon: ShieldCheck },
    { label: 'Customer Rating', value: '4.9 ★', icon: Star, link: googleReviewsUrl },
  ]

  const featuredTags = [
    'Fine Line & Micro Realism',
    'Custom Sleeve Concepts',
    'Portraits & Blackwork',
    'Professional Body Piercing',
  ]

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 transition-colors duration-200">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-rose-600/15 via-red-600/10 to-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-rose-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>Ink IT Tattoo Studio • Kasba Peth, Pune</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white tracking-tight leading-[1.12]">
              Custom Tattoos <br />
              Crafted With <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600 dark:from-rose-400 dark:via-amber-300 dark:to-rose-500 bg-clip-text text-transparent">
                Precision & Soul.
              </span>
            </h1>

            {/* Description */}
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Pune’s premier studio for bespoke tattoo design, intricate fine-line realism, bold blackwork, and hygienic body piercing. Each piece is custom-tailored to tell your personal narrative.
            </p>

            {/* Specialty Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {featuredTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onExplorePortfolio}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-500 hover:to-red-500 shadow-xl shadow-rose-950/20 dark:shadow-rose-950/50 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-zinc-800 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Estimate Tattoo Cost</span>
              </button>
            </div>

            {/* Hygiene Promise Micro-bar */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Hospital-Grade Sterilization</span>
              </div>
              <span className="text-zinc-400 dark:text-zinc-700">•</span>
              <span>100% Single-Use Cartridges</span>
            </div>
          </div>

          {/* Right Column: Visual Showcase Art Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Border Box */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-rose-500/30 via-zinc-200 dark:via-zinc-800 to-zinc-300 dark:to-zinc-900 shadow-2xl shadow-rose-950/20">
                <div className="rounded-[22px] bg-white dark:bg-zinc-950 p-6 space-y-5 overflow-hidden relative border border-zinc-200 dark:border-zinc-800/80">
                  
                  {/* Studio Showcase Header with Real Logo */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
                    <div className="flex items-center gap-3">
                      <div className="bg-white px-2 py-1 rounded-lg border border-zinc-200 dark:border-white/20 shadow-sm flex items-center justify-center">
                        <img 
                          src="/logo.png" 
                          alt="Ink IT Tattoo Studio" 
                          className="h-6 w-auto object-contain" 
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white tracking-wide">Ink IT Tattoo Studio</h4>
                        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Master Artist & Piercer</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Studio Open
                    </span>
                  </div>

                  {/* Real Studio Artwork Showcase Card */}
                  <div className="relative h-64 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col justify-end p-5 group shadow-md">
                    
                    {/* Real Tattoo Photo Background */}
                    <img 
                      src="/portfolio/Tattoo_2.png" 
                      alt="Rising Phoenix by Ink IT Tattoo Studio" 
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:scale-105 transition-transform duration-700" 
                    />

                    {/* Gradient Darkening for Readable Typography */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                    
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-1 z-10">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-200 uppercase bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">Original Studio Art</span>
                      <span className="text-xs font-mono font-bold text-rose-400">1413 Kasba Peth</span>
                    </div>

                    <div className="relative z-10 space-y-1.5">
                      <div className="inline-block px-2.5 py-0.5 rounded bg-rose-600 text-[10px] font-bold uppercase tracking-wider text-white">
                        Featured Piece
                      </div>
                      <h3 className="text-base font-bold text-white">
                        Fine Line Rising Phoenix
                      </h3>
                      <p className="text-xs text-zinc-200">
                        Inked with precision needle contours and flowing feather gradients at Ink IT Studio.
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bar */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Consultation</p>
                      <p className="text-sm font-bold text-zinc-900 dark:text-white mt-0.5">Free 1-on-1 Concept</p>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Location</p>
                      <p className="text-sm font-bold text-zinc-900 dark:text-white mt-0.5">Near Shaniwar Wada</p>
                    </div>
                  </div>

                  {/* Neatly Integrated Google Reviews Hyperlink Card */}
                  <a
                    href={googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 flex items-center justify-between gap-3 transition-all group shadow-sm"
                    title="Read Ink IT Tattoo Studio Reviews on Google"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-1.5">
                        <div className="w-7 h-7 rounded-full bg-rose-500/20 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[10px] font-bold text-rose-500 dark:text-rose-400 shadow-sm">★</div>
                        <div className="w-7 h-7 rounded-full bg-amber-500/20 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[10px] font-bold text-amber-500 dark:text-amber-400 shadow-sm">★</div>
                        <div className="w-7 h-7 rounded-full bg-emerald-500/20 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[10px] font-bold text-emerald-500 dark:text-emerald-400 shadow-sm">★</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                          <span>Pune's Trusted Studio</span>
                          <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                        </div>
                        <div className="text-[11px] text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                          Hundreds of 5-Star Reviews on Google &rarr;
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20 shrink-0 group-hover:scale-105 transition-transform">
                      4.9 ★
                    </span>
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row (with 2 Years updated) */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            const content = (
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all h-full shadow-sm">
                <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 dark:text-rose-400 border border-rose-500/20 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight flex items-center gap-1.5">
                    <span>{stat.value}</span>
                    {stat.link && <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{stat.label}</div>
                </div>
              </div>
            )

            return stat.link ? (
              <a
                key={idx}
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                title="View Google Reviews"
              >
                {content}
              </a>
            ) : (
              <div key={idx}>{content}</div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
