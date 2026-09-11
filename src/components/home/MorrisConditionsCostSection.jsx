import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';

// Swiper React Components & Modules for Small Screen Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const costTableData = [
  {
    factor: "Winter road salt",
    whatItDoes: "Tracked in, dries into carpet",
    effect: "White staining, fiber damage",
    impact: "Interior looks years older than it is"
  },
  {
    factor: "Gravel and field dust",
    whatItDoes: "Settles into vents, fabric, seams",
    effect: "Ground-in grit, dull surfaces",
    impact: "Harder to remove each season it sits"
  },
  {
    factor: "Pet hair",
    whatItDoes: "Weaves into upholstery",
    effect: "Embedded, resists vacuuming",
    impact: "Gets noticed on every trade-in"
  },
  {
    factor: "Prairie sun",
    whatItDoes: "UV on dash, seats, and trim",
    effect: "Fading, drying, cracking",
    impact: "Permanent once it starts"
  },
  {
    factor: "Spring thaw mud",
    whatItDoes: "Under mats and in seams",
    effect: "Moisture held against carpet",
    impact: "Odor and staining that spreads"
  }
];

// Reusable Cost Matrix Card Component for Small Screens
function CostCard({ row }) {
  return (
    <div className="w-full h-full min-h-[220px] rounded-2xl p-5 sm:p-6 border border-neutral-800 bg-neutral-900/80 backdrop-blur-md flex flex-col justify-between shadow-lg hover:border-red-500/30 transition-all">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
            {row.factor}
          </h4>
          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-red-500/10 text-red-400 border border-red-500/20">
            Cost Factor
          </span>
        </div>

        <div className="space-y-2.5 text-xs">
          <div>
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-0.5">
              What it does:
            </span>
            <p className="text-neutral-300 leading-relaxed">{row.whatItDoes}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-0.5">
              Effect on vehicle:
            </span>
            <span className="inline-block px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-200 font-medium">
              {row.effect}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 mt-3 border-t border-neutral-800/80">
        <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-0.5">
          Impact over time:
        </span>
        <p className="text-xs sm:text-sm text-red-400 font-semibold">{row.impact}</p>
      </div>
    </div>
  );
}

export default function MorrisConditionsCostSection() {
  return (
    <section id="conditions-cost" className="relative bg-neutral-950 py-18 sm:py-22 lg:py-26 border-b border-neutral-800/80 select-none overflow-hidden">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>WHAT CONDITIONS COST YOU</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            What Morris Conditions <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
              Actually Cost You
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto">
            None of this happens overnight. That is exactly the problem. It happens slowly enough that you stop noticing, and then one day you go to trade the vehicle in and it looks ten years old inside.
          </p>
        </div>

        {/* Table on Desktop & Tablet */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-md shadow-2xl">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/90 text-[11px] font-extrabold uppercase tracking-wider text-neutral-400">
                <th className="py-4 px-6 w-1/4">Local factor</th>
                <th className="py-4 px-6 w-1/4">What it does</th>
                <th className="py-4 px-6 w-1/4">Effect on the vehicle</th>
                <th className="py-4 px-6 w-1/4">Impact over time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {costTableData.map((row, i) => (
                <tr key={i} className="hover:bg-neutral-900/40 transition-colors">
                  <td className="py-4 px-6 font-bold text-white">
                    <span className="font-['Outfit'] text-sm sm:text-base font-bold text-white block">
                      {row.factor}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-neutral-300">
                    {row.whatItDoes}
                  </td>
                  <td className="py-4 px-6 text-neutral-200 font-medium">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-neutral-900/80 border border-neutral-800/80 text-neutral-300">
                      {row.effect}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-red-400 font-semibold">
                    {row.impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small / Mobile Screen: Swiper.js Carousel (< 768px) */}
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
              el: '.cost-matrix-pagination',
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
            className="!pb-0"
          >
            {costTableData.map((row, i) => (
              <SwiperSlide key={i} className="!h-auto flex">
                <CostCard row={row} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Swiper Custom Pagination Dots Container */}
          <div className="cost-matrix-pagination flex items-center justify-center gap-2 mt-6" />
        </div>

        {/* Centered Get My Free Quote Button */}
        <div className="flex justify-center pt-2">
          <a
            href="#contact-booking"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/25 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
          >
            {/* <CalendarOutlined className="text-sm" /> */}
            <span>Get My Free Quote</span>
          </a>
        </div>

      </div>
    </section>
  );
}
