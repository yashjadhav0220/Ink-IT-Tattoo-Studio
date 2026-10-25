import React, { useState } from 'react'
import { Calculator, Sparkles, Check, ArrowRight, ShieldCheck, Flame, Info, HelpCircle } from 'lucide-react'

export default function Estimator({ onSelectEstimate }) {
  const [width, setWidth] = useState(3)
  const [height, setHeight] = useState(3)

  const RATE_PER_SQ_INCH = 750

  const area = width * height
  const totalPrice = area * RATE_PER_SQ_INCH
  const formattedPrice = totalPrice.toLocaleString('en-IN')

  // Real-world physical size comparison
  const getSizeComparison = (sqInches) => {
    if (sqInches <= 4) return 'Approx. Coin / Minimalist Symbol'
    if (sqInches <= 7) return 'Approx. Credit Card / Wrist Size'
    if (sqInches <= 16) return 'Approx. Palm / Inner Forearm Size'
    if (sqInches <= 28) return 'Approx. Outer Bicep / Calf Piece'
    return 'Approx. Half-Sleeve / Shoulder / Rib Piece'
  }

  const presets = [
    { label: 'Minimalist (2" × 2")', w: 2, h: 2 },
    { label: 'Wrist / Collar (3" × 2")', w: 3, h: 2 },
    { label: 'Palm / Forearm (4" × 4")', w: 4, h: 4 },
    { label: 'Half-Arm (4" × 7")', w: 4, h: 7 },
  ]

  const painZones = [
    {
      level: 'Mild / Easy',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      dotColor: 'bg-emerald-400',
      areas: 'Forearm, Outer Bicep, Thigh, Shoulder',
      note: 'Best for first-timers. Feels like light scratching.',
    },
    {
      level: 'Moderate',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      dotColor: 'bg-amber-400',
      areas: 'Inner Bicep, Calf, Wrist, Upper Back',
      note: 'Noticeable vibration and mild pinching sensation.',
    },
    {
      level: 'Spicy / Intense',
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      dotColor: 'bg-rose-500',
      areas: 'Ribs, Spine, Neck, Sternum, Fingers',
      note: 'Higher sensitivity near bones and nerve endings.',
    },
  ]

  const handleBookEstimate = () => {
    if (onSelectEstimate) {
      onSelectEstimate({
        width,
        height,
        area,
        estimatedPrice: totalPrice,
        summary: `${width}" × ${height}" (${area} sq. in) - ₹${formattedPrice}`,
      })
    }
  }

  return (
    <section id="estimator" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs font-semibold tracking-wide">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tattoo Price Calculator
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            At Ink IT Tattoo Studio, pricing is straightforward: <span className="text-white font-semibold">₹750 per square inch</span>. Adjust the dimensions below to get an instant estimate for your next tattoo.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-7 shadow-xl">
            
            {/* Quick Presets */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-3">
                Quick Size Presets:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {presets.map((p, idx) => {
                  const isActive = width === p.w && height === p.h
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setWidth(p.w)
                        setHeight(p.h)
                      }}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                        isActive
                          ? 'bg-rose-600 text-white shadow-md shadow-rose-950'
                          : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-700/60'
                      }`}
                    >
                      {p.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Width Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-200">Width (Inches)</span>
                <span className="text-base font-bold text-rose-400 bg-zinc-950 px-3 py-1 rounded-lg border border-zinc-800">
                  {width} in
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>1 inch (Tiny)</span>
                <span>5 inches</span>
                <span>10 inches (Large)</span>
              </div>
            </div>

            {/* Height Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-zinc-200">Height (Inches)</span>
                <span className="text-base font-bold text-rose-400 bg-zinc-950 px-3 py-1 rounded-lg border border-zinc-800">
                  {height} in
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>1 inch</span>
                <span>6 inches</span>
                <span>12 inches (Full Piece)</span>
              </div>
            </div>

            {/* Studio Note */}
            <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-2.5 text-xs text-zinc-400">
              <Info className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>
                Standard rate: <strong className="text-zinc-200">₹750/sq. in</strong>. Includes sterile single-use needle cartridge, premium vegan inks, and post-session aftercare instructions.
              </span>
            </div>

          </div>

          {/* Results & Visual Scale (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Price Output Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-rose-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs uppercase font-bold tracking-widest text-zinc-400">Estimated Cost</span>
              
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ₹{formattedPrice}
                </span>
                <span className="text-xs text-zinc-400">est.*</span>
              </div>

              {/* Area Breakdown Pill */}
              <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-300">
                <div>
                  <span className="text-zinc-500 block">Total Area</span>
                  <span className="font-semibold text-white">{area} Square Inches</span>
                </div>
                <div className="text-right">
                  <span className="text-zinc-500 block">Rate Applied</span>
                  <span className="font-semibold text-rose-400">₹750 / sq. in</span>
                </div>
              </div>

              {/* Real World Comparison Label */}
              <div className="mt-4 py-2 px-3 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{getSizeComparison(area)}</span>
              </div>

              {/* Book CTA */}
              <button
                onClick={handleBookEstimate}
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-rose-950/50 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book For This Estimated Size</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Interactive Visual Scale Preview Box */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 text-center space-y-3">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                Visual Scale Preview (Relative)
              </span>
              
              <div className="h-44 flex items-center justify-center bg-zinc-950 rounded-2xl border border-zinc-800/80 p-4 overflow-hidden relative">
                {/* Scaled Preview Rectangle */}
                <div
                  style={{
                    width: `${Math.min(100, Math.max(25, (width / 10) * 100))}%`,
                    height: `${Math.min(100, Math.max(25, (height / 12) * 100))}%`,
                  }}
                  className="rounded-xl border-2 border-dashed border-rose-500 bg-rose-500/10 flex flex-col items-center justify-center p-2 transition-all duration-300 shadow-inner"
                >
                  <span className="text-xs font-bold text-white">
                    {width}" × {height}"
                  </span>
                  <span className="text-[10px] text-rose-300 font-mono">
                    {area} sq. in
                  </span>
                </div>
              </div>
              
              <p className="text-[11px] text-zinc-500">
                Box scales live as dimensions adjust. Exact placement will be finalized with your artist stencil.
              </p>
            </div>

          </div>

        </div>

        {/* First-Timer Pain Scale Guide (Directly Beneath) */}
        <div className="mt-16 max-w-5xl mx-auto pt-12 border-t border-zinc-900">
          <div className="flex items-center gap-2 mb-6">
            <Flame className="w-5 h-5 text-rose-500" />
            <h3 className="text-xl font-bold text-white">First-Timer Tattoo Pain Scale Guide</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {painZones.map((zone, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${zone.color} flex items-center gap-1.5`}>
                    <span className={`w-2 h-2 rounded-full ${zone.dotColor}`} />
                    {zone.level}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-xs uppercase font-semibold text-zinc-400">Typical Placements:</h4>
                  <p className="text-sm font-semibold text-zinc-100 mt-1">{zone.areas}</p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-2">
                  {zone.note}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

