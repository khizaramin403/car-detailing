import React from 'react';
import { 
  Check, 
  X, 
  Droplets, 
  CloudRain, 
  Sparkles 
} from 'lucide-react';

const comparisonData = [
  {
    assumption: 'Mobile means a quick job',
    reality: 'An Executive Full Detail is five to seven hours on site'
  },
  {
    assumption: 'You cannot have real equipment in a truck',
    reality: 'Extractors, steam, compressed air, all of it travels with us'
  },
  {
    assumption: 'It is probably a side hustle',
    reality: 'This is the whole business'
  },
  {
    assumption: 'The results are not the same as a shop',
    reality: 'Same process, same products, your driveway instead of a bay'
  }
];

export default function WhyMobileSection() {
  return (
    <section id="why-mobile" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-28 overflow-hidden select-none border-t border-neutral-900">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[350px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ========================================================================= */}
        {/* 1. Header & Narrative Intro                                               */}
        {/* ========================================================================= */}
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center text-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-semibold text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>WHY WE COME TO YOU</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            Why Mobile, and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Why It Is Not a Compromise
            </span>
          </h2>

          <div className="space-y-3 max-w-5xl text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            <p>
              Here is the thing we kept noticing. Around here, getting a real detail meant dropping your vehicle off somewhere and figuring out a ride. That is half a day gone. If you work a shift, run a farm, or have kids to get around, it is just not realistic. So most people put it off, and the vehicle stays dirty.
            </p>
            <p className="text-neutral-200 font-normal">
              We come to you instead. Your driveway, your work lot, wherever the vehicle sits.
            </p>
            <p className="text-neutral-400">
              Now, a lot of people assume mobile means a lighter version of the real thing. It does not. Here is what we actually run into.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. Sleek Minimal Comparison Table                                         */}
        {/* ========================================================================= */}
        <div className="my-8 sm:my-10 rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-md overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/80">
                <th className="py-3 sm:py-4 px-3.5 sm:px-6 text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-wider w-1/2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                    <span>What people assume</span>
                  </div>
                </th>
                <th className="py-3 sm:py-4 px-3.5 sm:px-6 text-[10px] sm:text-xs font-bold text-red-400 uppercase tracking-wider w-1/2 bg-red-950/20 border-l border-neutral-800/80">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>What it actually is</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {comparisonData.map((item, index) => (
                <tr 
                  key={index}
                  className="hover:bg-neutral-800/30 transition-colors group"
                >
                  {/* Left Column: What people assume */}
                  <td className="py-3.5 sm:py-4 px-3.5 sm:px-6 align-top">
                    <div className="flex items-start gap-2 sm:gap-2.5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-neutral-800/90 text-neutral-400 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-neutral-400" />
                      </div>
                      <span className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                        {item.assumption}
                      </span>
                    </div>
                  </td>

                  {/* Right Column: What it actually is */}
                  <td className="py-3.5 sm:py-4 px-3.5 sm:px-6 align-top bg-red-950/10 border-l border-neutral-800/80 group-hover:bg-red-950/15 transition-colors">
                    <div className="flex items-start gap-2 sm:gap-2.5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400" />
                      </div>
                      <span className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                        {item.reality}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ========================================================================= */}
        {/* 3. Honest Limits Callout Card                                             */}
        {/* ========================================================================= */}
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-800 bg-neutral-900/30 p-5 sm:p-7 lg:p-8 space-y-4">
          
          <div className="space-y-1.5">
            <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.18em] block">
              HONEST TRANSPARENCY
            </span>
            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-['Outfit'] leading-snug">
              We will be straight with you about the limits, though, because pretending there are none would be silly.
            </h3>
          </div>

          {/* 3 Limits Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-1">
            
            <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
                <Droplets className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Water & Power Access</span>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-normal">
                We need access to an outdoor water spigot and a standard power outlet.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
                <CloudRain className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Weather Conditions</span>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-normal">
                Weather can push an exterior job to another day, and we will tell you ahead of time rather than showing up and hoping.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
                <Sparkles className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Heavy Paint Correction</span>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-normal">
                Very heavy paint correction work is genuinely better in a controlled space. If your vehicle needs that, we will say so.
              </p>
            </div>

          </div>

          {/* Bottom Summary Line */}
          <div className="pt-2 border-t border-neutral-800/60 flex items-center gap-2 text-xs sm:text-sm text-neutral-300 font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
            <span>For everything else, mobile is not a trade-off. It is just easier for you.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
