import React from 'react';
import aboutHeroImg from '../../assets/about/abouthero.webp';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { PhoneOutlined } from '@ant-design/icons';

export default function AboutHeroSection() {
  const imageSrc = typeof aboutHeroImg === 'object' ? aboutHeroImg.src : aboutHeroImg;

  return (
    <section className="relative w-full overflow-hidden select-none bg-neutral-950 ">

      {/* ========================================================
          HERO UPPER SECTION
          Reduced height on small screens (vh) as requested,
          while preserving the exact full view height on larger screens.
          ======================================================== */}
      <div className="relative w-full h-[52dvh] sm:h-[62dvh] md:h-[calc(100dvh-92px)] min-h-90 sm:min-h-105 md:min-h-120 max-h-185 flex flex-col justify-between overflow-hidden">

        {/* HERO BACKGROUND IMAGE
            abouthero.webp covers the hero background, with feathered mask
            and smooth gradient overlay ensuring it blends 100% seamlessly into #0a0a0a */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={imageSrc}
            alt="Dos Bros Detailing Morris Minnesota"
            className="w-full h-full object-cover object-[20%_top] sm:object-[20%_center] lg:object-left select-none"
            style={{
              maskImage: 'linear-gradient(to right, black 30%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.3) 60%, transparent 75%)',
              WebkitMaskImage: 'linear-gradient(to right, black 30%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.3) 60%, transparent 75%)',
            }}  
            loading="eager"
          />

          {/* Desktop Right Gradient Overlay: Guarantees dark background for text with no visible boundary */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-950/50 via-20% to-neutral-950 to-70% hidden lg:block" /> */}

          {/* Mobile / Tablet Vertical Fade: Car on top, dark neutral below */}
          <div className="absolute inset-0 bg-linear-to-b from-neutral-950/15 via-neutral-950/75 to-neutral-950 lg:hidden" />

          {/* Top Vignette (navbar transition) */}
          {/* <div className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-neutral-950 to-transparent" /> */}

          {/* Bottom Vignette (curve divider transition) */}
          {/* <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-neutral-950 to-transparent" /> */}

          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
        </div>

        {/* HERO CONTENT: Vertically Centered with Typography on the Right */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">

            {/* LEFT SPACER (Desktop): Preserves clear view of the vehicle artwork on the left */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-7 pointer-events-none" />

            {/* RIGHT COLUMN: Sleek, Minimal Typography */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center text-center space-y-3 sm:space-y-4 pt-8 sm:pt-14 md:pt-20 lg:pt-0">

              {/* H1: Sleek, Modern, Non-bulky */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white font-['Outfit'] tracking-tight leading-[1.18]">
                About <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-amber-500">Dos Bros Detailing</span>
              </h1>

              {/* Minimal Accent Line */}
              <div className="w-10 h-0.5 bg-linear-to-r from-red-500 via-red-500 to-amber-500 rounded-full" />

              {/* Subhead: Refined, Minimal & Legible */}
              <p className="text-xs sm:text-sm lg:text-base text-neutral-300 font-light leading-relaxed max-w-md">
                Two brothers from Morris, Minnesota, bringing detailing to your driveway
              </p>

              {/* Minimal Downward Indicator */}
              <div className="pt-2 sm:pt-4 animate-bounce">
                <a
                  href="#about-intro"
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
              <linearGradient id="aboutCurveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
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
              stroke="url(#aboutCurveStroke)"
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
      <div id="about-intro" className="relative bg-neutral-950 py-12 sm:py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 sm:space-y-8">

          {/* Intro Content */}
          <p className="text-sm sm:text-base lg:text-[17px] text-neutral-300 font-light leading-5.5!  tracking-wide mb-5.5">
            Dos Bros Detailing is a family-run mobile detailing business based in Morris, Minnesota. Reyes and Mariano are brothers, they live here in town, and they bring interior and exterior detailing directly to your driveway, your workplace, or your farm site. We serve Morris and the surrounding communities, and our customers rate us 5.0 on Google. If you want a free quote on your car, truck, SUV, or work vehicle, send us a message or call{' '}
            <a
              href="tel:3202873573"
              className="text-white hover:text-red-400 font-normal transition-colors underline underline-offset-4 decoration-neutral-700 hover:decoration-red-500"
            >
              320-287-3573
            </a>
            .
          </p>

          {/* Minimal Contact Button */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 px-2">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 hover:border-red-500/50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 max-w-full"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="tel:3202873573"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-neutral-400 hover:text-white bg-transparent hover:bg-neutral-900/60 border border-transparent hover:border-neutral-800 transition-all duration-300 max-w-full"
            >
              <PhoneOutlined className="text-xs text-red-500" />
              <span>Call 320-287-3573</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
