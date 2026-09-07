import React from 'react';
import { Package, Truck, Compass, Sparkles, Check, Camera, CheckCircle2 } from 'lucide-react';

const quoteParts = [
  {
    icon: <Package className="w-4 h-4 text-red-500" />,
    part: 'Base package',
    meaning: 'Interior, exterior, or both. Express for maintenance, Executive for a deep clean.'
  },
  {
    icon: <Truck className="w-4 h-4 text-amber-400" />,
    part: 'Vehicle size',
    meaning: 'A full-size truck takes longer than a sedan. Bigger vehicle, higher price.'
  },
  {
    icon: <Compass className="w-4 h-4 text-red-400" />,
    part: 'Travel',
    meaning: 'Nothing within about 20 miles of Morris. Beyond that a small fee covers fuel and time.'
  },
  {
    icon: <Sparkles className="w-4 h-4 text-amber-500" />,
    part: 'Add-ons',
    meaning: 'Pet hair, odor, heavy stains, engine bay. Only if you need them.'
  }
];

const comparisonData = [
  {
    feature: 'For',
    express: 'Vehicles kept up reasonably well',
    executive: 'Vehicles that have gotten away from you'
  },
  {
    feature: 'Interior',
    express: 'Full vacuum, all surfaces, mats, glass, crevices',
    executive: 'All of that plus steam, carpet and seat shampoo with extraction, stain treatment, leather conditioning'
  },
  {
    feature: 'Exterior',
    express: 'Hand wash, wheels and tires, bug removal, tire shine, spray wax',
    executive: 'All of that plus iron remover, clay mitt decontamination, detailed trim, grille, emblems, door jambs'
  },
  {
    feature: 'The difference',
    express: 'Cleans what is on the surface',
    executive: 'Pulls out what is embedded'
  }
];

export default function HowQuoteIsBuiltSection() {
  return (
    <section id="quote-built" className="relative bg-neutral-950 py-12 sm:py-16 lg:py-20 border-t border-neutral-900 overflow-hidden select-none">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-red-600/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-amber-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* PART 1: THE FOUR BUILDING BLOCKS                                          */}
        {/* ========================================================================= */}
        <div className="space-y-6 sm:space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-medium text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="tracking-widest uppercase">TRANSPARENT PRICING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-normal text-white font-['Outfit'] tracking-tight leading-tight">
              How a Detailing Quote Is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 font-normal">
                Built
              </span>
            </h2>

            <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mx-auto" />

            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed pt-0.5">
              There is no mystery to this. Four things go into every price we give.
            </p>
          </div>

          {/* 4 Building Block Cards (2x2 on mobile, 4-col on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            {quoteParts.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-4 sm:p-4.5 space-y-2.5 hover:border-neutral-700/80 transition-all backdrop-blur-sm"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-[13px] font-medium text-white font-['Outfit']">
                    {item.part}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-400 font-light leading-relaxed">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          {/* Summary Note */}
          <div className="rounded-xl border border-neutral-800/70 bg-neutral-900/30 py-2.5 px-4 text-center">
            <p className="text-xs text-neutral-300 font-light">
              <span className="text-white font-medium">Add those four together and that is your price.</span> Nothing else gets tacked on.
            </p>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* PART 2: EXPRESS OR EXECUTIVE COMPARISON TABLE                             */}
        {/* ========================================================================= */}
        <div className="space-y-6 sm:space-y-7 pt-4 border-t border-neutral-900/90">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-normal text-white font-['Outfit'] tracking-tight">
              Express or{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 font-normal">
                Executive?
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl mx-auto">
              The honest answer is that most people need Express more often than they think, and Executive less often than they fear.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-md overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/80">
                  <th className="py-3 px-3.5 sm:px-5 text-[10.5px] sm:text-xs font-normal text-neutral-400 uppercase tracking-wider w-[22%] sm:w-[20%]">
                    Feature
                  </th>
                  <th className="py-3 px-3.5 sm:px-5 text-[10.5px] sm:text-xs font-normal text-neutral-200 uppercase tracking-wider w-[39%] sm:w-[40%] border-l border-neutral-800/80">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>Express</span>
                    </div>
                  </th>
                  <th className="py-3 px-3.5 sm:px-5 text-[10.5px] sm:text-xs font-normal text-amber-300 uppercase tracking-wider w-[39%] sm:w-[40%] bg-amber-950/15 border-l border-neutral-800/80">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>Executive</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 text-xs sm:text-[13px]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-800/20 transition-colors">
                    {/* Feature Name */}
                    <td className="py-3 sm:py-3.5 px-3.5 sm:px-5 font-medium text-white align-top">
                      {row.feature}
                    </td>
                    {/* Express */}
                    <td className="py-3 sm:py-3.5 px-3.5 sm:px-5 text-neutral-300 font-light leading-relaxed border-l border-neutral-800/80 align-top">
                      {row.express}
                    </td>
                    {/* Executive */}
                    <td className="py-3 sm:py-3.5 px-3.5 sm:px-5 text-neutral-200 font-light leading-relaxed bg-amber-950/5 border-l border-neutral-800/80 align-top">
                      {row.executive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Explanatory Callout Card */}
          <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/30 p-4 sm:p-5 space-y-2">
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              <span className="text-white font-normal">The real dividing line is extraction.</span> If dirt has worked down into the carpet fibers, wiping and vacuuming will not reach it. That is what Executive is for.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-300/90 font-light pt-0.5">
              <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                Not sure which one you need? Send us a photo. We will tell you honestly, and it is usually the cheaper one.
              </span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
