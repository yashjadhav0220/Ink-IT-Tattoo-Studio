import React, { useState } from 'react'
import { MapPin, Phone, Clock, Navigation, ExternalLink, Instagram, CheckCircle2, Copy, Check } from 'lucide-react'

export default function StudioLocation() {
  const [copied, setCopied] = useState(false)

  const studioAddress = "1413, Kasba Peth, Shivaji Maharaj Road, Near Shaniwar Wada, Pune, Maharashtra 411011"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Ink It Tattoo Studio 1413 Kasba Peth Shivaji Maharaj Road Near Shaniwar Wada Pune"
  )}`

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(studioAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="location" className="py-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold tracking-wide">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kasba Peth, Pune</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Find Ink IT Tattoo Studio
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Located in the cultural core of Pune right next to the historic Shaniwar Wada. Walk in for 1-on-1 design consultations or call ahead to secure your session.
          </p>
        </div>

        {/* Location Grid: Details on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-lg dark:shadow-xl">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 dark:text-rose-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white">Studio Address</h3>
                    <p className="text-xs text-rose-600 dark:text-rose-400 font-medium">Near Shaniwar Wada</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors text-xs flex items-center gap-1.5"
                  title="Copy full address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-50 dark:bg-zinc-950 p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800/80">
                <strong className="text-zinc-900 dark:text-white block mb-0.5">Ink IT Tattoo Studio</strong>
                1413, Kasba Peth, Shivaji Maharaj Road,<br />
                Opposite / Near Shaniwar Wada,<br />
                Pune, Maharashtra – 411011
              </div>

              {/* Driving Directions Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-rose-950/20 dark:shadow-rose-950/40 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
              </a>
            </div>

            {/* Timings & Contact Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-lg dark:shadow-xl">
              
              {/* Timings */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 dark:text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Studio Timings</h4>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300">
                    <strong className="text-amber-600 dark:text-amber-300">11:00 AM – 9:00 PM</strong> • Open All Days
                  </p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Walk-ins welcome, prior call recommended</p>
                </div>
              </div>

              {/* Direct Call Lines */}
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80 space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 block">
                  Direct Studio Lines:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="tel:+919021209377"
                    className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
                    <span>+91 90212 09377</span>
                  </a>
                  <a
                    href="tel:+918668263522"
                    className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-black dark:hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
                    <span>+91 86682 63522</span>
                  </a>
                </div>
              </div>

              {/* Instagram Follow */}
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/inkit_tattoostudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                    <span>DM on Instagram (@inkit_tattoostudio)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                </a>
              </div>

            </div>

          </div>

          {/* Interactive Google Map Embed Column (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg dark:shadow-2xl relative min-h-[420px] flex flex-col">
            
            {/* Map Top Bar */}
            <div className="bg-zinc-50 dark:bg-zinc-950/95 px-5 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs z-10">
              <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-zinc-900 dark:text-white">Live Pune Studio Map</span>
                <span className="text-zinc-500">• Kasba Peth Pin</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-semibold flex items-center gap-1"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Maps iFrame Centered at Kasba Peth / Shaniwar Wada Pune */}
            <div className="flex-1 w-full relative">
              <iframe
                title="Ink IT Tattoo Studio Location Map"
                src="https://maps.google.com/maps?q=1413%2C+Kasba+Peth%2C+Shivaji+Maharaj+Road%2C+Near+Shaniwar+Wada%2C+Pune%2C+Maharashtra+411011&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[400px] border-0 filter contrast-[1.05]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Bottom Landmark Footer */}
            <div className="bg-zinc-50 dark:bg-zinc-950/95 px-5 py-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Landmark: Near Shaniwar Wada Delhi Gate</span>
              </div>
              <span className="text-zinc-500 text-[11px]">Two-wheeler parking available outside</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
