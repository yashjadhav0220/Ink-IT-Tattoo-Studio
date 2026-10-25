import React from 'react'
import { Sparkles, ShieldCheck, Zap, Scissors, ArrowRight, CheckCircle2, Clock, Eye } from 'lucide-react'

export default function Services({ onBookService, onOpenCalculator }) {
  const services = [
    {
      id: 'tattoos',
      badge: 'Signature Craft',
      title: 'Custom Tattoo Artistry',
      icon: Sparkles,
      iconColor: 'text-rose-500',
      badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
      tagline: 'Precision linework, sacred geometry & bespoke concepts',
      features: [
        'Single-needle fine line, micro-realism, and mandala dotwork',
        'Transparent ₹750/sq. in pricing formula',
        'Custom anatomy stencil tailored to muscle curvature',
        '100% single-use sterile cartridges & premium vegan pigments',
      ],
      ctaText: 'Calculate Cost',
      ctaAction: onOpenCalculator,
    },
    {
      id: 'removal',
      badge: 'Skin Restoration',
      title: 'Laser Tattoo Removal',
      icon: Zap,
      iconColor: 'text-amber-500',
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      tagline: 'Safe pigment breakdown & cover-up lightening',
      features: [
        'Complete removal or partial fading for fresh cover-ups',
        'Advanced non-scarring laser pulse technology',
        'Safe for sensitive skin with rapid recovery intervals',
        'Free pre-treatment patch evaluation at our Pune studio',
      ],
      ctaText: 'Inquire About Removal',
      ctaAction: onBookService,
    },
    {
      id: 'piercing',
      badge: 'Certified Piercer',
      title: 'Professional Body Piercing',
      icon: Scissors,
      iconColor: 'text-emerald-500',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      tagline: 'Implant-grade titanium jewelry & sterile technique',
      features: [
        '100% ASTM F-136 implant-grade titanium studs (hypoallergenic)',
        'Single-use sterile hollow needle (clamp-free technique for less trauma)',
        'Ear curation (Helix, Tragus, Conch, Industrial), Septum, Nostril, & Navel',
        'Comprehensive aftercare spray guidance included',
      ],
      ctaText: 'Visit for Piercing',
      ctaAction: onBookService,
    },
  ]

  return (
    <section id="services" className="py-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Studio Services & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Comprehensive Body Art & Skin Care
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            From your first custom tattoo sketch to professional sterile piercings and laser removal, Ink IT Studio provides end-to-end artistry under strict hospital-grade hygiene standards.
          </p>
        </div>

        {/* Services 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.id}
                className="rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 p-7 flex flex-col justify-between shadow-lg dark:shadow-xl hover:border-rose-500/40 transition-all duration-300 group"
              >
                <div className="space-y-5">
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${svc.iconColor}`} />
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${svc.badgeColor}`}>
                      {svc.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                      {svc.tagline}
                    </p>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <button
                    onClick={svc.ctaAction}
                    className="w-full py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Laser Removal Spotlight Highlight Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-zinc-100 to-rose-500/10 dark:from-amber-500/5 dark:via-zinc-900/60 dark:to-rose-500/5 border border-amber-500/30 dark:border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 hidden sm:flex">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                Have an old or faded tattoo you want to cover up?
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-2xl mt-0.5">
                Our laser lightening sessions can fade dark pigments in 2–3 sessions so you can get a brand-new, colorful custom design without visible ink bleed-through.
              </p>
            </div>
          </div>
          
          <button
            onClick={onBookService}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-md shadow-amber-950/20"
          >
            Consult For Removal
          </button>
        </div>

      </div>
    </section>
  )
}

