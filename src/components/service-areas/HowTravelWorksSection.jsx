import React from 'react';

export default function HowTravelWorksSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-neutral-950 overflow-hidden select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/60 to-neutral-950 border border-neutral-800/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md overflow-hidden">
          
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/10 blur-[110px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-5 sm:space-y-6">
            
            <div className="flex items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[11px] font-normal text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="tracking-wider uppercase">HOW TRAVEL WORKS</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Do You Charge Extra to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
                Come to My Town?
              </span>
            </h2>

            <div className="w-12 h-px bg-gradient-to-r from-red-500/70 via-red-500/50 to-amber-500/40 rounded-full" />

            <div className="space-y-3.5 text-xs sm:text-sm lg:text-[15px] text-neutral-300 font-light leading-relaxed">
              <p>
                <span className="text-neutral-100 font-normal">Short answer:</span> Not if you are within about 20 miles of Morris. Beyond that there is a small travel fee to cover fuel and time. We always confirm it with your quote before you book, so nothing changes on the day.
              </p>
              <p className="text-neutral-400 font-light">
                That is the whole policy. No mileage math, no surprise line item at the end.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
