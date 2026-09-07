import React from 'react';
import { Check } from 'lucide-react';

const tableRows = [
  {
    bring: "All equipment and tools",
    need: "An outdoor water spigot",
  },
  {
    bring: "All products and chemicals",
    need: "A standard power outlet",
  },
  {
    bring: "Extractors and steam",
    need: "Room to work around the vehicle",
  },
  {
    bring: "Compressed air",
    need: null,
  },
  {
    bring: "Everything else",
    need: null,
  },
];

export default function WhatWeBringSection() {
  return (
    <section id="what-we-bring" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-24 overflow-hidden select-none border-t border-neutral-900/80">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[350px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-10 sm:space-y-12">

        {/* 1. Centered Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-normal text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="tracking-wider uppercase">WHAT WE BRING AND WHAT WE NEED</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-['Outfit'] font-normal tracking-tight leading-tight">
            What We Bring, and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 font-normal">
              What We Need From You
            </span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            Everything travels with us. Extractors, steam, compressed air, all the products, all the tools, all the towels. You do not need to supply anything except two things.
          </p>
        </div>

        {/* 2. Sleek Minimal Comparison Table */}
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-md overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/80">
                <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-[10px] sm:text-xs font-normal text-neutral-300 uppercase tracking-wider w-1/2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>We bring</span>
                  </div>
                </th>
                <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-[10px] sm:text-xs font-normal text-amber-300/90 uppercase tracking-wider w-1/2 bg-amber-950/10 border-l border-neutral-800/80">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>We need from you</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {tableRows.map((row, index) => (
                <tr 
                  key={index}
                  className="hover:bg-neutral-800/20 transition-colors group"
                >
                  {/* Left Column: We bring */}
                  <td className="py-3.5 sm:py-4 px-4 sm:px-6 align-top">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400" />
                      </div>
                      <span className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                        {row.bring}
                      </span>
                    </div>
                  </td>

                  {/* Right Column: We need from you */}
                  <td className="py-3.5 sm:py-4 px-4 sm:px-6 align-top bg-amber-950/5 border-l border-neutral-800/80 group-hover:bg-amber-950/10 transition-colors">
                    {row.need ? (
                      <div className="flex items-start gap-2.5 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                        </div>
                        <span className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                          {row.need}
                        </span>
                      </div>
                    ) : (
                      <span className="text-neutral-500 font-light text-xs sm:text-sm pl-6 sm:pl-8 select-none">
                        —
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3. Sleek Explanatory Callout Card Below Table */}
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-900/30 p-5 sm:p-7 lg:p-8 space-y-3.5">
          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            Most homes, shops, and business lots already have all three. If you are not sure what you have, tell us where the vehicle sits when you ask for a quote and we will work it out before you book. It is a much better conversation to have then than when we are already in your driveway.
          </p>
          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            If you are on a farm site or a work lot with no spigot nearby, tell us that too. There is usually a way around it.
          </p>
        </div>

      </div>
    </section>
  );
}
