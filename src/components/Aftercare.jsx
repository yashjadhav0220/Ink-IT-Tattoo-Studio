import React, { useState } from 'react'
import { 
  ShieldCheck, AlertTriangle, Droplets, Sun, Sparkles, 
  CheckCircle2, XCircle, Clock, HeartHandshake, PhoneCall 
} from 'lucide-react'

export default function Aftercare() {
  const [activeTab, setActiveTab] = useState('first-day')

  const criticalDoNots = [
    {
      title: 'No Oil, Vaseline or Unapproved Products',
      desc: 'Never apply petroleum jelly, baby oil, or random lotions. They clog pores, trap bacteria, cause rashes, and fade ink.',
    },
    {
      title: 'Never Scratch or Peel Dead Skin',
      desc: 'Peeling flakey skin or picking scabs pulls fresh ink out of the dermis, leaving permanent faded or patchy spots.',
    },
    {
      title: 'No Swimming Pools or Sea Water',
      desc: 'Chlorine and ocean bacteria can cause severe infections. Quick daily showers are fine, but do not soak or submerge.',
    },
    {
      title: 'Do Not Re-Wrap the Tattoo',
      desc: 'Once the initial cling wrap is removed after 1 hour, never re-bandage. The tattoo needs oxygen to heal cleanly.',
    },
    {
      title: 'Avoid Tight Clothing & Strenuous Workouts',
      desc: 'Friction from tight garments and heavy stretching during gym workouts stresses the healing skin.',
    },
    {
      title: 'Avoid Direct Sunlight',
      desc: 'UV rays directly burn fresh skin and quickly degrade pigment saturation.',
    },
  ]

  return (
    <section id="aftercare" className="py-20 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400 text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
            <span>Official Studio Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Tattoo Aftercare Guide
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Aftercare starts the moment your session is finished. Following these exact instructions ensures vibrant color, crisp linework, and a healthy heal.
          </p>
          <div className="inline-block p-2.5 px-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-amber-300 font-medium">
            ⚠️ Wash your hands thoroughly before touching your tattoo (avoid touching whenever possible).
          </div>
        </div>

        {/* Phase Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setActiveTab('first-day')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'first-day'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-950'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              1. First Day Care
            </button>
            <button
              onClick={() => setActiveTab('everyday')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'everyday'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-950'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              2. Next Days & Everyday
            </button>
            <button
              onClick={() => setActiveTab('cream-care')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'cream-care'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-950'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              3. Cream & Long-Term
            </button>
          </div>
        </div>

        {/* Tab 1: First Day Protocol */}
        {activeTab === 'first-day' && (
          <div className="max-w-4xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">First Day: Initial 24 Hours</h3>
                <p className="text-xs text-zinc-400">Critical steps immediately upon leaving the studio.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Step 1 • Cling Wrap
                </span>
                <h4 className="text-sm font-bold text-white">Remove Wrap After 1 Hour</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Once you reach home or your room, gently remove the cling wrap. Do not leave it on longer than instructed, and never re-wrap the tattoo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Step 2 • Gentle Wash
                </span>
                <h4 className="text-sm font-bold text-white">Dove Soap Foam Only</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Gently wash the tattoo using Dove soap foam to clean plasma and excess ink. <strong className="text-rose-300">Do not apply any bar soap or antiseptic liquids directly to the tattoo.</strong>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  Step 3 • Air Drying
                </span>
                <h4 className="text-sm font-bold text-white">Air Dry for 20 Minutes</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Allow the tattoo to naturally air dry for 20 minutes. Do not rub with bath towels, which harbor lint and bacteria.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Step 4 • Golden Rule
                </span>
                <h4 className="text-sm font-bold text-white">Never Re-Wrap in Any Way</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Keeping a tattoo sealed suffocates healing tissue and traps moisture, which leads to ink loss and potential infection.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Everyday / Week 1 */}
        {activeTab === 'everyday' && (
          <div className="max-w-4xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Next Days & Everyday Care (Week 1)</h3>
                <p className="text-xs text-zinc-400">Protecting your healing skin during the critical initial days.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Water Exposure (First Week)
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Do not apply water as much as possible for 1 week. Quick daily showers are fine, but do not let water soak into the tattoo. Dry it immediately after washing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Itching & Soreness is Normal
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  For the first few days, your skin may feel itchy, tight, or sore. This is a natural healing response. <strong className="text-rose-400">Never scratch it; scratching permanently damages the ink layer.</strong>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Clothing & Physical Workouts
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Do not wear tight clothing over the tattoo. Avoid stressing or overstretching the tattooed skin with heavy gym workouts or vigorous friction.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Sunlight & Environment
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Avoid direct sunlight completely while healing. Do not touch the tattoo or allow pets, dirt, or dust near the open skin.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Cream & Long-Term Care */}
        {activeTab === 'cream-care' && (
          <div className="max-w-4xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Cream Application & Long-Term Healing</h3>
                <p className="text-xs text-zinc-400">Proper moisture routine for weeks 2 to 4.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white">When to Start Applying Cream</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Apply cream <strong className="text-white">after 1 week</strong> (suggested as per artist) or <strong className="text-white">2 to 3 times a day</strong>. Always apply cream approximately 30 minutes after washing and thoroughly drying your tattoo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white">Apply a Thin Layer Only</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Always use a very thin layer of cream. Putting on too thick of a layer suffocates the skin and prevents it from breathing, which delays healing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <h4 className="text-sm font-bold text-white">Weeks 2–3 Transition to Moisturizer</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Continue applying the recommended tattoo cream for 2 to 3 weeks, then transition to a gentle fragrance-free body moisturizer until the skin is fully healed and smooth.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Critical "Strictly Avoid" Checklist (From Studio Board) */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <XCircle className="w-5 h-5 text-rose-500" />
            <h3 className="text-xl font-bold text-white">Strict Rules: Things to Avoid</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {criticalDoNots.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-2"
              >
                <h4 className="text-sm font-bold text-rose-300 flex items-start gap-2">
                  <span className="text-rose-500 font-black">✕</span>
                  <span>{item.title}</span>
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed pl-5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Health, Infection Notice & Studio Policies */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Infection Signs & Action Card */}
          <div className="p-6 rounded-3xl bg-zinc-900 border border-amber-500/30 space-y-4">
            <div className="flex items-center gap-2.5 text-amber-400">
              <AlertTriangle className="w-5 h-5" />
              <h4 className="text-base font-bold text-white">Infection Recognition</h4>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              A tattoo that isn’t properly cared for can develop an infection. Infected skin will feel <strong className="text-amber-300">red, unusually warm to touch, intensely painful, and may leak pus</strong>.
            </p>
            <div className="pt-2 border-t border-zinc-800 text-xs text-zinc-400 space-y-1">
              <p>• In case of any sign of infection, <strong className="text-white">contact the studio immediately</strong>.</p>
              <p>• If symptoms worsen, contact your medical doctor without delay.</p>
            </div>
          </div>

          {/* Touch-up & Studio Responsibility Card */}
          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-rose-400">
                <HeartHandshake className="w-5 h-5" />
                <h4 className="text-base font-bold text-white">Studio Policy & Touch-Ups</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                If a touch-up is required later on, <strong className="text-zinc-200">it will be chargeable as per the size of the tattoo</strong>.
              </p>
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400">
                <strong className="text-zinc-300 block mb-0.5">Important Disclaimer:</strong>
                We do not take any responsibility if the above aftercare instructions are not strictly followed.
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span className="font-semibold text-rose-400">Thank you for choosing Ink IT Tattoo Studio!</span>
              <a
                href="#booking"
                className="text-white hover:text-rose-400 font-bold underline transition-colors"
              >
                Questions? Contact Us &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

