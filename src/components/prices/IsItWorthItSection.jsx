import React from 'react';
import { Calculator, TrendingUp, HeartHandshake } from 'lucide-react';

const valueStories = [
  {
    icon: <Calculator className="w-5 h-5 text-red-500" />,
    tag: 'The Real Math',
    title: 'Car Wash Math vs Real Detailing',
    p1: 'Run the math against a car wash. Say you go every couple of weeks at twelve dollars. That is around 300 dollars a year, and your interior never actually gets clean because a car wash does not touch the inside at all.',
    p2: 'An Express Full Detail is 245 dollars and the interior stays right for months. Cost per month of actually clean, the detail wins comfortably, and you did not spend a single Saturday on it.'
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-amber-400" />,
    tag: 'Trade-in & Resale',
    title: 'The Value Dealers Actually Look At',
    p1: 'There is a second thing people underestimate. Interior condition is the first thing a dealer looks at on a trade-in and the first thing a private buyer notices when they open a door.',
    p2: 'Salt-stained carpet and a cracked dash both read as a vehicle that was not looked after, whether that is fair or not. Detailing before you sell is one of the better returns you can get on a few hundred dollars.'
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
    tag: 'Honest Advice',
    title: 'If You Enjoy Doing It, Do It',
    p1: 'That said, if you enjoy detailing your own car, do it. Some people find it genuinely relaxing.',
    p2: 'But if you have been meaning to get to it since April and it is now August, that is what we are for.'
  }
];

export default function IsItWorthItSection() {
  return (
    <section id="worth-it" className="relative bg-neutral-950 py-12 sm:py-16 lg:py-20 border-t border-neutral-900 overflow-hidden select-none">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-medium text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="tracking-widest uppercase">HONEST PERSPECTIVE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-normal text-white font-['Outfit'] tracking-tight leading-tight">
            Is Detailing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 font-normal">
              Worth the Money?
            </span>
          </h2>

          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mx-auto" />

          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-xl mx-auto pt-0.5">
            Fair question and we would rather answer it honestly than sell you something.
          </p>
        </div>

        {/* 3 Value Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {valueStories.map((card, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-neutral-800/90 bg-neutral-900/40 p-5 sm:p-6 space-y-3.5 flex flex-col justify-between hover:border-neutral-700/80 transition-all backdrop-blur-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <span className="text-[10.5px] font-mono font-light text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded-md border border-neutral-800">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-normal text-white font-['Outfit'] leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-[12.5px] text-neutral-300 font-light leading-relaxed">
                  {card.p1}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800/70">
                <p className="text-xs sm:text-[12.5px] text-neutral-400 font-light leading-relaxed">
                  {card.p2}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
