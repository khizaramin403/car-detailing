import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

const factorsData = [
  {
    what: 'Heavy pet hair',
    why: 'Hair weaves down into the fabric weave rather than sitting on top. Getting it all out is slow, hands-on work.'
  },
  {
    what: 'Set-in stains',
    why: 'Fresh stains lift. Something that has been baking in a hot car since June is a different job.'
  },
  {
    what: 'Strong odor',
    why: 'You have to remove the source, not cover it. Sometimes that means multiple passes.'
  },
  {
    what: 'Years of buildup',
    why: 'A vehicle nobody has cleaned in five years takes real time to bring back.'
  },
  {
    what: 'Sand or heavy mud',
    why: 'Lake sand and thaw mud settle deep and are heavier than road dust.'
  }
];

export default function WhatCanMoveTheNumberSection() {
  return (
    <section id="price-factors" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-24 border-t border-neutral-900 overflow-hidden select-none">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-medium text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="tracking-widest uppercase">UPFRONT POLICY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            What Can Move the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Number
            </span>
          </h2>

          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mx-auto" />

          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl mx-auto pt-0.5">
            Every price on this page is a starting point for a vehicle in average condition. Here is what can push it up, and why.
          </p>
        </div>

        {/* Sleek 2-Column Table */}
        <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-md overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/80">
                <th className="py-3 px-4 sm:px-6 text-[10.5px] sm:text-xs font-normal text-neutral-400 uppercase tracking-wider w-[36%] sm:w-[30%]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>What</span>
                  </div>
                </th>
                <th className="py-3 px-4 sm:px-6 text-[10.5px] sm:text-xs font-normal text-amber-300 uppercase tracking-wider w-[64%] sm:w-[70%] bg-amber-950/15 border-l border-neutral-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>Why it costs more</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 text-xs sm:text-[13px]">
              {factorsData.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-800/20 transition-colors group">
                  {/* Left Column: What */}
                  <td className="py-3.5 sm:py-4 px-4 sm:px-6 align-top">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80 shrink-0 mt-1.5" />
                      <span className="font-normal text-white leading-relaxed">
                        {row.what}
                      </span>
                    </div>
                  </td>

                  {/* Right Column: Why */}
                  <td className="py-3.5 sm:py-4 px-4 sm:px-6 align-top bg-amber-950/5 border-l border-neutral-800/80 group-hover:bg-amber-950/10 transition-colors">
                    <span className="text-neutral-300 font-light leading-relaxed">
                      {row.why}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upfront Guarantee Callout Card */}
        {/* <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/30 p-4 sm:p-6 space-y-2.5"> */}
          <div className="flex items-start gap-3">
            {/* <ShieldCheck className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> */}
            <div className="space-y-1.5 text-center">
              <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed">
                Here is the part that matters. If your vehicle needs more than the starting price covers, Reyes tells you before he starts working, while it is still untouched, and you decide. Never on the invoice at the end.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Honestly, that is the thing that frustrates us most about our own industry. Nobody should find out about extra charges when they are handed the bill.
              </p>
            </div>
          </div>
        {/* </div> */}

      </div>

    </section>
  );
}
