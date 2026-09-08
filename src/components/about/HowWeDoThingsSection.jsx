import React, { useState, useEffect, useRef } from 'react';
import { 
  DollarSign, 
  Phone, 
  SlidersHorizontal, 
  ClipboardCheck 
} from 'lucide-react';
import truckImg from '../../assets/truck-detail.jpg';

const stepsData = [
  {
    number: 1,
    tag: 'UPFRONT PRICING',
    icon: DollarSign,
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    title: 'You hear the price before we start, not after',
    description:
      'Almost every vehicle has something the photos missed. Heavier pet hair than it looked, a stain nobody mentioned, years of dust in places you cannot see. When that happens, we tell you while the vehicle is still untouched and you decide. Honestly, this is the thing that frustrates us most about our own industry. Nobody should find out about extra charges when they are handed the bill.'
  },
  {
    number: 2,
    tag: 'ONE VOICE',
    icon: Phone,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10 border-red-500/20',
    title: 'You are always talking to one of us',
    description:
      'There is no call center and no dispatcher. The person who quotes you is the person who pulls into your driveway. That is not a policy, it is just how a two-person business works, and we think it is better.'
  },
  {
    number: 3,
    tag: 'HONEST SCOPING',
    icon: SlidersHorizontal,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10 border-red-500/20',
    title: 'We will not push you into the bigger package',
    description:
      'If Express does what your vehicle needs, we will tell you Express. Talking somebody into a 330 dollar detail they did not need is a great way to get one job and never get another one. We would rather have you for years.'
  },
  {
    number: 4,
    tag: 'THE WALK-AROUND',
    icon: ClipboardCheck,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    title: 'We finish with you, not before you',
    description:
      'We walk around the vehicle with you before we leave. If something got missed, we fix it right then while we are still there. And we take our mess with us.'
  }
];

export default function HowWeDoThingsSection() {
  const truckImgSrc = typeof truckImg === 'object' ? truckImg.src : truckImg;
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback for environments without IntersectionObserver
      setVisibleItems({
        header: true,
        'step-1': true,
        'step-2': true,
        'step-3': true,
        'step-4': true,
        'why-matters': true,
        'truck-banner': true
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-scroll-id');
            if (id) {
              setVisibleItems((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const sectionEl = sectionRef.current;
    if (sectionEl) {
      const targets = sectionEl.querySelectorAll('[data-scroll-id]');
      targets.forEach((target) => observer.observe(target));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="how-we-do-things" 
      className="relative bg-neutral-950 py-16 sm:py-20 lg:py-28 overflow-hidden select-none border-t border-neutral-900"
    >
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[350px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. Header & Title with Scroll Animation                                   */}
        {/* ========================================================================= */}
        <div 
          data-scroll-id="header"
          className={`text-center space-y-4 sm:space-y-5 max-w-2xl mx-auto transition-all duration-700 ease-out transform ${
            visibleItems['header']
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-semibold text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>HOW WE DO THINGS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            How We Do{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Things
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            We are pretty particular about a few things.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. Responsive Timeline: Desktop Alternating | Mobile Left-Aligned Line    */}
        {/* ========================================================================= */}
        <div className="relative">
          
          {/* DESKTOP CENTER DASHED LINE (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0 border-r-2 border-dashed border-neutral-800 pointer-events-none" />

          {/* MOBILE & TABLET LEFT DASHED LINE (Hidden on Desktop) */}
          <div className="block lg:hidden absolute left-4 sm:left-6 top-4 bottom-4 w-0 border-r-2 border-dashed border-neutral-800 pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {stepsData.map((step, idx) => {
              const isEven = idx % 2 === 1; // 0: Left, 1: Right, 2: Left, 3: Right
              const IconComponent = step.icon;
              const stepId = `step-${step.number}`;
              const isVisible = !!visibleItems[stepId];

              return (
                <div 
                  key={step.number}
                  data-scroll-id={stepId}
                  className="relative flex flex-col lg:flex-row items-center w-full"
                >
                  {/* =============================================================== */}
                  {/* DESKTOP LAYOUT (lg+)                                            */}
                  {/* =============================================================== */}
                  
                  {/* Left Column (Desktop - Steps 1 & 3) */}
                  <div className={`hidden lg:flex w-1/2 pr-10 xl:pr-14 ${isEven ? 'invisible pointer-events-none' : 'justify-end'}`}>
                    {!isEven && (
                      <div 
                        className={`w-full max-w-md rounded-2xl sm:rounded-3xl bg-neutral-900/40 border border-neutral-800/80 p-5 sm:p-6 backdrop-blur-sm shadow-xl hover:border-neutral-700/80 transition-all duration-700 ease-out text-left transform ${
                          isVisible
                            ? 'opacity-100 translate-x-0 translate-y-0'
                            : 'opacity-0 -translate-x-10 translate-y-4'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 pb-2.5">
                          <div className={`w-7 h-7 rounded-lg ${step.iconBg} border flex items-center justify-center shrink-0`}>
                            <IconComponent className={`w-3.5 h-3.5 ${step.iconColor}`} />
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.18em]">
                            {step.tag}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed pt-2">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Node Badge (Desktop lg+) */}
                  <div 
                    className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full text-white text-xs font-bold font-['Outfit'] items-center justify-center transition-all duration-500 ease-out transform ${
                      isVisible 
                        ? 'scale-100 opacity-100 bg-neutral-900 border-2 border-red-500 shadow-lg shadow-red-500/20' 
                        : 'scale-50 opacity-0 bg-neutral-950 border-2 border-neutral-800'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Right Column (Desktop - Steps 2 & 4) */}
                  <div className={`hidden lg:flex w-1/2 pl-10 xl:pl-14 ${!isEven ? 'invisible pointer-events-none' : 'justify-start'}`}>
                    {isEven && (
                      <div 
                        className={`w-full max-w-md rounded-2xl sm:rounded-3xl bg-neutral-900/40 border border-neutral-800/80 p-5 sm:p-6 backdrop-blur-sm shadow-xl hover:border-neutral-700/80 transition-all duration-700 ease-out text-left transform ${
                          isVisible
                            ? 'opacity-100 translate-x-0 translate-y-0'
                            : 'opacity-0 translate-x-10 translate-y-4'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 pb-2.5">
                          <div className={`w-7 h-7 rounded-lg ${step.iconBg} border flex items-center justify-center shrink-0`}>
                            <IconComponent className={`w-3.5 h-3.5 ${step.iconColor}`} />
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.18em]">
                            {step.tag}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed pt-2">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* =============================================================== */}
                  {/* MOBILE & TABLET LAYOUT (< lg) with Scroll Animation             */}
                  {/* =============================================================== */}
                  <div className="lg:hidden w-full relative pl-12 sm:pl-16">
                    {/* Node on left line */}
                    <div 
                      className={`absolute left-4 sm:left-6 -translate-x-1/2 top-4 z-10 w-8 h-8 rounded-full text-white text-xs font-bold font-['Outfit'] flex items-center justify-center transition-all duration-500 ease-out transform ${
                        isVisible
                          ? 'scale-100 opacity-100 bg-neutral-900 border-2 border-red-500 shadow-md shadow-red-500/25'
                          : 'scale-50 opacity-0 bg-neutral-950 border-2 border-neutral-800'
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Card to right of line */}
                    <div 
                      className={`w-full rounded-2xl bg-neutral-900/40 border border-neutral-800/80 p-5 backdrop-blur-sm shadow-xl text-left transition-all duration-700 ease-out transform ${
                        isVisible
                          ? 'opacity-100 translate-y-0 translate-x-0'
                          : 'opacity-0 translate-y-6 translate-x-3'
                      }`}
                    >
                      <div className="flex items-center gap-2 pb-2">
                        <div className={`w-6 h-6 rounded-lg ${step.iconBg} border flex items-center justify-center shrink-0`}>
                          <IconComponent className={`w-3 h-3 ${step.iconColor}`} />
                        </div>
                        <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.18em]">
                          {step.tag}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit'] leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed pt-2">
                        {step.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>


        {/* ========================================================================= */}
        {/* 4. Truck Details Image Card with Scroll Animation                         */}
        {/* ========================================================================= */}
        {/* <div 
          data-scroll-id="truck-banner"
          className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800/90 max-w-3xl mx-auto shadow-2xl h-[220px] sm:h-[280px] md:h-[340px] group transition-all duration-800 ease-out transform ${
            visibleItems['truck-banner']
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-[0.98]'
          }`}
        >
          <img
            src={truckImgSrc}
            alt="Dos Bros Mobile Detailing Truck in Morris, MN"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/40 to-transparent pointer-events-none" />

          
          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 max-w-md space-y-1.5 z-10">
            <span className="text-[10px] sm:text-[11px] font-bold text-red-400 uppercase tracking-[0.22em] block">
              TWO PEOPLE · WE LIVE HERE
            </span>
            <h4 className="text-base sm:text-xl lg:text-2xl font-bold text-white font-['Outfit'] leading-tight drop-shadow-md">
              Our name is on every vehicle that leaves.
            </h4>
          </div>
        </div> */}

      </div>
    </section>
  );
}
