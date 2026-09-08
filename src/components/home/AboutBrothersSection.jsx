import React from 'react';
import dosBrosImg from '../../assets/DosBros.png';
import { CalendarOutlined } from '@ant-design/icons';

export default function AboutBrothersSection() {
  const imageSrc = typeof dosBrosImg === 'object' ? dosBrosImg.src : dosBrosImg;

  return (
    <section id="about-brothers" className="relative bg-neutral-950 py-20 sm:py-24 lg:py-28 overflow-hidden select-none border-b border-neutral-800/80">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Simple Clean Story Content (No Card Container) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* ABOUT US Badge: Centered on Mobile, Left-aligned on Desktop */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>ABOUT US</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Two brothers&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                from Morris
              </span>
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              <p>
                We are Reyes and Mariano. We are brothers, we live in Morris, and we started Dos Bros because we thought people around here deserved better than driving somewhere and giving up a whole day.
              </p>

              <p>
                We are not a franchise. There is no call center. When you message Dos Bros, you are talking to one of us. When we show up at your place, it is us doing the work, not a rotating crew who has never seen your vehicle before.
              </p>

              <p>
                Morris is a small town. About five thousand people. That means we run into our customers at the grocery store, at the gas station, everywhere. Which is honestly the best accountability there is. You cannot do a rushed job on somebody's truck and then bump into them on Atlantic Avenue on Tuesday.
              </p>

              <p className="text-white font-medium">
                We take a lot of pride in the work. Every vehicle gets the same attention whether it is a show car or a farm truck with 200,000 miles on it.
              </p>
            </div>

            {/* CTA Button: Book Reyes */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <a
                href="#contact-booking"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/25 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
              >
                <CalendarOutlined className="text-sm" />
                <span>Book Reyes</span>
              </a>
            </div>

          </div>

          {/* Right Column: Modern Animated Rectangle Image Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-md lg:max-w-none h-full">
              
              {/* Sleek Gradient Ambient Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600/30 via-amber-500/20 to-red-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 group-hover:blur-2xl transition duration-500" />

              {/* Main Image Container Card */}
              <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[560px] rounded-3xl bg-neutral-900 border border-neutral-800/90 overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:border-red-500/40 flex flex-col">
                
                {/* Image positioned top so faces are never cropped */}
                <div className="w-full h-full flex-1 overflow-hidden bg-neutral-950 relative">
                  <img
                    src={imageSrc}
                    alt="Reyes and Mariano - Founders of Dos Bros Auto Detailing"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Glassmorphic Caption Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-2xl bg-neutral-950/85 border border-neutral-800/80 backdrop-blur-md flex items-center justify-between shadow-2xl">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <h3 className="font-['Outfit'] text-sm sm:text-base font-bold text-white leading-tight">
                        Reyes & Mariano
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-400 font-medium pt-0.5">
                      Founders & Mobile Detailers
                    </p>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-[10px] sm:text-[11px] font-bold text-red-400 uppercase tracking-wider">
                    Morris, MN
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
