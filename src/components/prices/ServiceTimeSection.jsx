import React from 'react';
import { Clock, CheckCircle2, Home } from 'lucide-react';

const timeData = [
  { package: 'Express Exterior', time: '1 to 1.5 hours' },
  { package: 'Express Interior', time: '2 to 3 hours' },
  { package: 'Express Full Detail', time: '3 to 4.5 hours' },
  { package: 'Executive Exterior', time: '1.5 to 2.5 hours' },
  { package: 'Executive Interior', time: '3 to 5 hours' },
  { package: 'Executive Full Detail', time: '5 to 7 hours' }
];

export default function ServiceTimeSection() {
  return (
    <section id="service-time" className="relative bg-neutral-950 py-12 sm:py-16 lg:py-20 border-t border-neutral-900 overflow-hidden select-none">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-amber-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-medium text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="tracking-widest uppercase">REALISTIC TIMELINES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-normal text-white font-['Outfit'] tracking-tight leading-tight">
            How Long Will We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 font-normal">
              Be There?
            </span>
          </h2>

          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mx-auto" />

          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl mx-auto pt-0.5">
            Something worth knowing before you book anything with anyone.
          </p>
        </div>

        {/* 2-Column Time Table */}
        <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-md overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/80">
                <th className="py-3 px-4 sm:px-6 text-[10.5px] sm:text-xs font-normal text-neutral-400 uppercase tracking-wider w-[50%]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Package</span>
                  </div>
                </th>
                <th className="py-3 px-4 sm:px-6 text-[10.5px] sm:text-xs font-normal text-amber-300 uppercase tracking-wider w-[50%] bg-amber-950/15 border-l border-neutral-800/80">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Time on site</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 text-xs sm:text-[13px]">
              {timeData.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-800/20 transition-colors">
                  <td className="py-3 sm:py-3.5 px-4 sm:px-6 font-medium text-white">
                    {row.package}
                  </td>
                  <td className="py-3 sm:py-3.5 px-4 sm:px-6 font-mono font-light text-neutral-200 bg-amber-950/5 border-l border-neutral-800/80">
                    {row.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Explanatory Notes */}
        <div className="rounded-2xl border border-neutral-800/90 bg-neutral-900/30 p-4 sm:p-6 space-y-3">
          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            <span className="text-white font-normal">Larger vehicles sit at the top of those ranges.</span> If somebody quotes you a deep interior clean and says an hour, they are doing a vacuum and a wipe down. That might be exactly what you want, and there is nothing wrong with it. Just know what you are buying.
          </p>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-300/90 font-light pt-1 border-t border-neutral-800/70">
            <Home className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              You do not need to be home for any of it. Plenty of our customers head to work and come back to a finished vehicle.
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
