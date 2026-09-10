import React from 'react';
import { 
  MessageSquare, 
  HelpCircle, 
  Tag, 
  CheckCircle2 
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const stepsData = [
  {
    step: '01',
    title: 'We get back to you',
    description: 'Usually the same day. If you send it late in the evening it might be the next morning.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'We might ask a couple of questions',
    description: 'If we need a photo or a bit more detail about the condition, we will ask. It helps us give you a real price instead of a vague range.',
    icon: HelpCircle,
  },
  {
    step: '03',
    title: 'You get a straight price',
    description: 'Package, vehicle size, any add-ons, and travel if it applies. All of it, upfront, before you commit to anything.',
    icon: Tag,
  },
  {
    step: '04',
    title: 'You decide',
    description: 'If it works, we book a day. If it does not, that is completely fine and we will not chase you about it.',
    icon: CheckCircle2,
  },
];

export default function WhatHappensNextSection() {
  return (
    <section className="relative bg-neutral-950 py-12 sm:py-16 lg:py-20 border-t border-neutral-900/80 overflow-hidden select-none">
      
      {/* Ambient Subtle Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-red-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center space-y-2.5 max-w-3xl mx-auto mb-10 sm:mb-12">
          
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-normal text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="tracking-wide uppercase">What Happens Next</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            What Happens <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-amber-500">After You Send It</span>
          </h2>

          <div className="w-8 h-0.5 bg-linear-to-r from-red-500 to-amber-500 rounded-full mx-auto" />

          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-xl mx-auto pt-1">
            Nobody likes sending a form into a void, so here is exactly what happens.
          </p>

        </div>

        {/* 1. Desktop & Tablet Grid: 4 Equal Minimal Sleek Cards with Home Screen Hover Effects */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stepsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800/80 hover:border-red-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-600/10 backdrop-blur-sm hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-red-500/40 text-red-500 transition-colors shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-neutral-500 group-hover:text-red-400 transition-colors tracking-wider px-2 py-0.5 rounded-md bg-neutral-950/80 border border-neutral-800/80 group-hover:border-red-500/20">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-[17px] font-normal text-white font-['Outfit'] tracking-tight leading-snug group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-neutral-400 group-hover:text-neutral-300 font-light leading-relaxed mt-2 transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-900/80 group-hover:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 group-hover:text-neutral-400 font-light transition-colors">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 group-hover:bg-red-500 transition-all group-hover:scale-125" />
                    <span>Step {item.step} of 04</span>
                  </span>
                  <span className="text-neutral-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300">
                    &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Small Screen (Mobile): Swiper.js Carousel matching Home Page */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.what-happens-pagination',
              bulletClass: 'services-bullet',
              bulletActiveClass: 'services-bullet-active',
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
            }}
            className="what-happens-swiper pb-0!"
          >
            {stepsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <SwiperSlide key={index} className="h-auto! flex">
                  <div className="w-full h-full min-h-55 sm:min-h-60 group relative flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800/80 hover:border-red-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-600/10 backdrop-blur-sm">
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="w-9 h-9 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-red-500/40 text-red-500 transition-colors shadow-inner">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono font-medium text-neutral-500 group-hover:text-red-400 transition-colors tracking-wider px-2 py-0.5 rounded-md bg-neutral-950/80 border border-neutral-800/80 group-hover:border-red-500/20">
                          {item.step}
                        </span>
                      </div>

                      <h3 className="text-base font-normal text-white font-['Outfit'] tracking-tight leading-snug group-hover:text-red-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-neutral-400 group-hover:text-neutral-300 font-light leading-relaxed mt-2 transition-colors">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3.5 mt-3 border-t border-neutral-900/80 group-hover:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 group-hover:text-neutral-400 font-light transition-colors">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 group-hover:bg-red-500 transition-all group-hover:scale-125" />
                        <span>Step {item.step} of 04</span>
                      </span>
                      <span className="text-neutral-500 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Pagination dots */}
          <div className="what-happens-pagination flex items-center justify-center gap-2 mt-6" />
        </div>

      </div>

    </section>
  );
}
