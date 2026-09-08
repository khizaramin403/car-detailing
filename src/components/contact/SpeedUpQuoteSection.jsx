import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

const tableData = [
  {
    helpful: 'What you drive',
    why: 'Vehicle size affects the price, so a truck and a sedan are not the same quote'
  },
  {
    helpful: 'Your town',
    why: 'Tells us straight away whether travel applies'
  },
  {
    helpful: 'A photo or two of the inside',
    why: 'This is the big one. We can price a real vehicle far better than a description.'
  },
  {
    helpful: 'Pets, smokers, or spills',
    why: 'Pet hair, odor, and heavy stains take extra time and we would rather plan for it than surprise you'
  },
  {
    helpful: 'When you are hoping to book',
    why: 'We book out, especially in spring'
  }
];

export default function SpeedUpQuoteSection() {
  return (
    <section className="relative bg-neutral-950 py-12 sm:py-16 lg:py-20 border-t border-neutral-900/80 overflow-hidden select-none">
      
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-8 sm:space-y-10">
        
        {/* 1. Header */}
        <div className="text-center space-y-2.5 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-normal text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="tracking-wider uppercase">Speed Up Your Quote</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            What to Tell Us for a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Faster Answer
            </span>
          </h2>

          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mx-auto" />

          <p className="text-xs sm:text-sm lg:text-[15px] text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto pt-1">
            You do not need any of this to get a price, but the more you give us, the more accurate the first number is.
          </p>

        </div>

        {/* 2. Sleek Minimal Comparison Table (Responsive on all screens) */}
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-md overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/80">
                <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-[10px] sm:text-xs font-normal text-neutral-300 uppercase tracking-wider w-[40%] sm:w-[32%]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Helpful</span>
                  </div>
                </th>
                <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-[10px] sm:text-xs font-normal text-amber-300/90 uppercase tracking-wider w-[60%] sm:w-[68%] bg-amber-950/10 border-l border-neutral-800/80">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span>Why</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {tableData.map((row, index) => (
                <tr 
                  key={index}
                  className="hover:bg-neutral-800/20 transition-colors group"
                >
                  {/* Left Column: Helpful */}
                  <td className="py-3.5 sm:py-4 px-4 sm:px-6 align-top">
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80 shrink-0 mt-2 sm:mt-2.5" />
                      <span className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed">
                        {row.helpful}
                      </span>
                    </div>
                  </td>

                  {/* Right Column: Why */}
                  <td className="py-3.5 sm:py-4 px-4 sm:px-6 align-top bg-amber-950/5 border-l border-neutral-800/80 group-hover:bg-amber-950/10 transition-colors">
                    <span className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {row.why}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3. Sleek Explanatory Callout Note Below Table */}
        {/* <div className="rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-900/30 p-4 sm:p-6 text-center"> */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            {/* <Camera className="w-4 h-4 text-red-400 shrink-0" /> */}
            <span className='text-center'>
              Honestly, a couple of quick phone photos of the interior does more than anything else on this list.
            </span>
          {/* </div> */}
        </div>

      </div>

    </section>
  );
}
