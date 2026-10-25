import React, { useState, useEffect } from 'react'
import { ZoomIn, X, Sparkles, CheckCircle2, Instagram, ArrowUpRight } from 'lucide-react'

export default function Gallery({ onRequestDesign }) {
  const [selectedItem, setSelectedItem] = useState(null)

  // Real client artwork from Ink IT Tattoo Studio
  const portfolioItems = [
    {
      id: 1,
      title: 'Sacred Dharmachakra Mandala',
      category: 'Geometric & Spiritual',
      placement: 'Forearm',
      status: 'Fresh Studio Work',
      description: 'Intricate eight-spoked Wheel of Dharma (Dharmachakra) mandala framed by classical floral filigree. High-precision single-needle linework with symmetrical balance tailored to the forearm musculature.',
      imageUrl: '/portfolio/Tattoo_1.png',
      technique: 'Single-Needle 3RL • Symmetrical Linework',
    },
    {
      id: 2,
      title: 'Graceful Rising Phoenix',
      category: 'Fine Line & Illustrative',
      placement: 'Forearm / Inner Arm',
      status: 'Original Ink IT Artwork',
      description: 'Dynamic soaring phoenix silhouette with soft gradient shading on the wings and delicate flowing plumage. Symbolizes rebirth, resilience, and personal transformation.',
      imageUrl: '/portfolio/Tattoo_2.png',
      technique: 'Fine Line Contour • Soft Grey-Wash Shading',
    },
    {
      id: 3,
      title: 'Minimalist Botanical Phoenix',
      category: 'Fine Line & Minimalist',
      placement: 'Inner Wrist / Lower Forearm',
      status: 'Original Ink IT Artwork',
      description: 'Ultra-delicate single-needle silhouette of a stylized phoenix flowing into subtle botanical leaf accents. Crafted with surgical precision to age gracefully on sensitive wrist skin.',
      imageUrl: '/portfolio/Tattoo_3.png',
      technique: 'Single-Needle Micro Line • Botanical Contour',
    },
  ]

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedItem(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="gallery" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ink IT Studio Originals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Featured Client Artwork
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
              Authentic custom designs created right here at our Kasba Peth studio in Pune. Click any piece for high-resolution inspection and design details.
            </p>
          </div>

          {/* Instagram Link CTA */}
          <a
            href="https://www.instagram.com/inkit_tattoostudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white transition-all shadow-sm group self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
            <span>Follow @inkit_tattoostudio</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>

        {/* Gallery Grid Featuring Real Studio Works */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900/90 border border-zinc-800 hover:border-rose-500/50 transition-all duration-300 cursor-pointer flex flex-col shadow-xl"
            >
              {/* Image Container with Zoom Preview Effect */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md bg-zinc-950/85 text-rose-300 border border-rose-500/30">
                    {item.status}
                  </span>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-rose-600/95 text-white flex items-center justify-center shadow-xl backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {/* Placement Tag (Bottom of Image) */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                  <span className="font-semibold bg-zinc-900/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-zinc-800">
                    {item.placement}
                  </span>
                  <span className="text-zinc-400 text-[11px] bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800/60">
                    Custom Stencil
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-zinc-900">
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-rose-400">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-medium">Click to inspect</span>
                  <span className="text-rose-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Consultation & Instagram Promo Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 p-[2px] shadow-lg shadow-rose-950/40 shrink-0 hidden sm:flex">
              <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center text-rose-400">
                <Instagram className="w-7 h-7" />
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white">Want to see more fresh client tattoos & piercings?</h4>
              <p className="text-xs text-zinc-400 max-w-xl">
                Browse our daily stories, process reels, and client feedback on Instagram, or bring your own reference to our Kasba Peth studio.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="https://www.instagram.com/inkit_tattoostudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-xs font-bold uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Instagram className="w-4 h-4 text-rose-400" />
              <span>@inkit_tattoostudio</span>
            </a>

            <button
              onClick={() => onRequestDesign && onRequestDesign('Custom Tattoo Idea')}
              className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-rose-950/40"
            >
              Contact Studio
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Display */}
            <div className="md:w-1/2 bg-zinc-900 relative flex items-center justify-center overflow-hidden min-h-[350px] md:min-h-full">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-contain md:object-cover max-h-[50vh] md:max-h-none"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-zinc-950/80 text-rose-300 border border-rose-500/30">
                  {selectedItem.status}
                </span>
              </div>
            </div>

            {/* Modal Details Panel */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-2.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                  {selectedItem.category}
                </div>

                <h3 className="text-2xl font-black text-white leading-snug">
                  {selectedItem.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {selectedItem.description}
                </p>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold block">Placement</span>
                    <span className="text-sm font-bold text-zinc-200 mt-0.5 block">{selectedItem.placement}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold block">Design Type</span>
                    <span className="text-sm font-bold text-zinc-200 mt-0.5 block">Custom Concept</span>
                  </div>
                </div>

                {/* Technique & Hygiene Confirmation */}
                <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2 text-xs">
                  <div className="text-zinc-300 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                    <span>Technique: {selectedItem.technique}</span>
                  </div>
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Inked at Ink IT Tattoo Studio, Kasba Peth, Pune</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-900 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    const idea = selectedItem.title
                    setSelectedItem(null)
                    if (onRequestDesign) onRequestDesign(idea)
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-rose-950/40"
                >
                  Inquire For Similar Piece
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-semibold transition-colors"
                >
                  Close Preview
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  )
}
