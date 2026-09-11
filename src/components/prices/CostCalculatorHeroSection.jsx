import React from 'react';
import calculatorHeroImg from '../../assets/prices/costcalculatorbg.webp';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { PhoneOutlined } from '@ant-design/icons';

export default function CostCalculatorHeroSection() {
  const imageSrc = typeof calculatorHeroImg === 'object' ? calculatorHeroImg.src : calculatorHeroImg;

  return (
    <section className="relative w-full overflow-hidden select-none bg-neutral-950">

      {/* ========================================================
          HERO UPPER SECTION
          Matches exact responsive height and layout of About, Service Area & Contact Hero
          ======================================================== */}
      <div className="relative w-full h-[52dvh] sm:h-[62dvh] md:h-[calc(100dvh-92px)] min-h-[360px] sm:min-h-[420px] md:min-h-[480px] max-h-[740px] flex flex-col justify-between overflow-hidden">

        {/* HERO BACKGROUND IMAGE
            servicearea.jpeg covers the hero background, with feathered mask
            and smooth gradient overlay ensuring it blends 100% seamlessly into #0a0a0a */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={imageSrc}
            alt="Car Detailing Cost Calculator for Morris, MN - Dos Bros Detailing"
            className="w-full h-full object-cover object-[20%_top] sm:object-[20%_center] lg:object-left select-none"
            style={{
              maskImage: 'linear-gradient(to right, black 30%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.3) 60%, transparent 75%)',
              WebkitMaskImage: 'linear-gradient(to right, black 30%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.3) 60%, transparent 75%)',
            }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1072"
          />

          {/* Mobile / Tablet Vertical Fade: Car on top, dark neutral below */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/15 via-neutral-950/75 to-neutral-950 lg:hidden" />

          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
        </div>

        {/* HERO CONTENT: Vertically Centered with Typography on the Right */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">

            {/* LEFT SPACER (Desktop): Preserves clear view of the vehicle artwork on the left */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-7 pointer-events-none" />

            {/* RIGHT COLUMN: Sleek, Minimal Typography Matching About, Service Area & Contact Hero */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center text-center space-y-3 sm:space-y-4 pt-8 sm:pt-14 md:pt-20 lg:pt-0">

              {/* H1: Sleek, Modern, Non-bulky */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white font-['Outfit'] tracking-tight leading-[1.18]">
                Car Detailing Cost Calculator <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                  for Morris, MN
                </span>
              </h1>

              {/* Minimal Accent Line */}
              <div className="w-10 h-0.5 bg-gradient-to-r from-red-500 via-red-500 to-amber-500 rounded-full" />

              {/* Subhead: Refined, Minimal & Legible */}
              <p className="text-xs sm:text-sm lg:text-base text-neutral-300 font-light leading-relaxed max-w-md">
                Get a real starting price in about thirty seconds. No email required.
              </p>

              {/* Minimal Downward Indicator */}
              <div className="pt-2 sm:pt-4 animate-bounce will-change-transform">
                <a
                  href="#calculator-intro"
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-neutral-800/90 hover:border-neutral-700 text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105"
                  aria-label="Scroll to introduction"
                >
                  <ArrowDown className="w-5 h-5 sm:w-7.5 sm:h-7.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM CURVED WAVE DIVIDER (Locked to base of the screen view height) */}
        <div className="relative w-full overflow-hidden shrink-0 leading-none z-20 pointer-events-none -mb-0.5">
          <svg
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-full h-10 sm:h-12 lg:h-14 block"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="calculatorCurveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.3" />
                <stop offset="80%" stopColor="rgba(255, 255, 255, 0.15)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.05)" />
              </linearGradient>
            </defs>

            {/* S-curve matching reference wave trajectory */}
            <path
              d="M0,64 C360,78 720,86 1040,48 C1200,28 1340,12 1440,6 L1440,96 L0,96 Z"
              fill="#0a0a0a"
            />

            {/* Subtle themed stroke along the curve boundary */}
            <path
              d="M0,64 C360,78 720,86 1040,48 C1200,28 1340,12 1440,6"
              stroke="url(#calculatorCurveStroke)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

      </div>

      {/* ========================================================
          INTRO SECTION (BELOW CURVE)
          Spacious, clean, comfortable reading layout with minimal CTA
          ======================================================== */}
      <div id="calculator-intro" className="relative bg-neutral-950 py-12 sm:py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">

          {/* Intro Paragraph 1 */}
          <p className="text-sm sm:text-base lg:text-[17px] text-neutral-300 font-light leading-relaxed tracking-wide">
            Most detailers around here make you call before they will tell you anything about price. We think that is annoying, so we built this instead.
          </p>

          {/* Intro Paragraph 2 */}
          <p className="text-sm sm:text-base lg:text-[17px] text-neutral-300 font-light leading-relaxed tracking-wide">
            Answer five quick questions about your vehicle and where you are, and you will get a starting price plus how long we will be there. No email, no phone number, no signing up for anything. Just the number.
          </p>

          {/* Intro Paragraph 3 with Call / Text Link */}
          <p className="text-sm sm:text-base lg:text-[17px] text-neutral-300 font-light leading-relaxed tracking-wide">
            If you would rather skip it and talk to a person, call or text{' '}
            <a
              href="tel:3202873573"
              className="text-white hover:text-red-400 font-normal transition-colors underline underline-offset-4 decoration-neutral-700 hover:decoration-red-500"
            >
              320-287-3573
            </a>
            .
          </p>

          {/* Minimal Action & Phone Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-2 pt-3 sm:pt-4">
            <a
              href="#cost-calculator"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 hover:border-red-500/50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 max-w-full"
            >
              <span>Calculate Starting Price</span>
              <ArrowDown className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="tel:3202873573"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-neutral-400 hover:text-white bg-transparent hover:bg-neutral-900/60 border border-transparent hover:border-neutral-800 transition-all duration-300 max-w-full"
            >
              <PhoneOutlined className="text-xs text-red-500" />
              <span>Call or Text 320-287-3573</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
