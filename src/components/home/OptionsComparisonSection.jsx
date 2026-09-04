import React, { useState } from 'react';
import { CalendarOutlined, PhoneOutlined } from '@ant-design/icons';
import { ArrowRight, Check, Sparkles, X } from 'lucide-react';

// Swiper React Components & Modules for Small Screen Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const optionsData = [
  {
    id: "diy",
    title: "Do it yourself",
    subtitle: "Rewarding, if you actually have the Saturday.",
    badge: null,
    time: "3 to 5 hours, plus setup and cleanup",
    vehicle: "In your driveway all afternoon",
    removes: "Surface dirt, mostly",
    saltOdor: "Rarely, without the right equipment",
    equipment: "Extractor, steamer, products, a lot of towels",
    cost: "200 dollars or more in gear, then your Saturday",
    duration: "A few weeks"
  },
  {
    id: "automatic",
    title: "Automatic car wash",
    subtitle: "Fast and cheap. Exterior only.",
    badge: null,
    time: "About 10 minutes",
    vehicle: "Back in ten minutes",
    removes: "Exterior surface only",
    saltOdor: "No",
    equipment: "None",
    cost: "10 to 15 dollars a visit",
    duration: "Days"
  },
  {
    id: "dropoff",
    title: "Drop it off somewhere",
    subtitle: "Real detailing, but the day belongs to the shop.",
    badge: null,
    time: "Drop off, arrange a ride, come back",
    vehicle: "Gone for several hours",
    removes: "Full detail",
    saltOdor: "Yes",
    equipment: "None",
    cost: "Varies",
    duration: "Months"
  },
  {
    id: "dosbros",
    title: "Dos Bros comes to you",
    subtitle: "Full detail. Done in your driveway while you carry on.",
    badge: "OURS",
    time: "None. Carry on with your day.",
    vehicle: "Never leaves home",
    removes: "Full detail",
    saltOdor: "Yes",
    equipment: "None",
    cost: "From 75 dollars",
    duration: "Months"
  }
];

const detailVsWashData = [
  {
    feature: "Loose interior dirt",
    quickClean: "Vacuum reaches what it can reach",
    properDetail: "Compressed air blows it out of seams and vents first, then it gets extracted"
  },
  {
    feature: "Salt stains in carpet",
    quickClean: "Wiped down. Comes back in a week.",
    properDetail: "Hot water extraction pulls the salt out of the fiber"
  },
  {
    feature: "Vents, seams, cracks",
    quickClean: "Usually skipped",
    properDetail: "Detail brushes and air, done deliberately"
  },
  {
    feature: "Seats and carpet",
    quickClean: "Spot wiped",
    properDetail: "Shampoo and extraction"
  },
  {
    feature: "Exterior contamination",
    quickClean: "Soap and rinse",
    properDetail: "Iron remover and clay mitt pull out what is bonded to the paint"
  },
  {
    feature: "Protection applied",
    quickClean: "None",
    properDetail: "Spray wax or sealant, lasts months"
  },
  {
    feature: "Time on the vehicle",
    quickClean: "Minutes",
    properDetail: "Hours"
  },
  {
    feature: "How long the result lasts",
    quickClean: "Days",
    properDetail: "Months"
  }
];

export default function OptionsComparisonSection() {
  const [selectedId, setSelectedId] = useState("dosbros");
  const activeOption = optionsData.find(opt => opt.id === selectedId) || optionsData[3];

  return (
    <section id="options-compared" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-24 border-b border-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* ========================================================================= */}
        {/* 1. HEADER (Minimal, clean, generous spacing like Lovable reference)       */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>YOUR OPTIONS COMPARED</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            Your options in Morris, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              honestly compared
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-1">
            We are not going to tell you we are the only choice. You have a few, and they are all reasonable depending on what you actually need.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE OPTIONS COMPARED (Interactive Tabs Left + At A Glance Card Right)  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* Left Column: 4 Clean Minimal Option Selector Cards (38% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {optionsData.map((opt) => {
              const isSelected = selectedId === opt.id;
              const isOurs = opt.badge === "OURS";

              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedId(opt.id)}
                  type="button"
                  className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? isOurs
                        ? "bg-neutral-900 border-red-500/60 shadow-sm"
                        : "bg-neutral-900 border-neutral-700 shadow-sm"
                      : "bg-neutral-900/30 hover:bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700/80"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`text-sm sm:text-base font-semibold font-['Outfit'] transition-colors ${
                        isSelected ? "text-white" : "text-neutral-300"
                      }`}>
                        {opt.title}
                      </h3>
                      {opt.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-600 text-white uppercase tracking-wider">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 font-normal leading-normal">
                      {opt.subtitle}
                    </p>
                  </div>

                  <span className={`text-xs transition-colors shrink-0 ${
                    isSelected ? "text-red-500 font-semibold" : "text-neutral-600"
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Sleek 'AT A GLANCE' Spec Card (62% width on desktop) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl bg-[#0d121c] border border-neutral-800/90 p-5 sm:p-7 lg:p-8 shadow-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-neutral-800/80">
                <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] flex items-center gap-2">
                  {activeOption.title}
                  {activeOption.badge === "OURS" && (
                    <Sparkles className="w-4 h-4 text-red-400" />
                  )}
                </h3>
                <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.2em]">
                  AT A GLANCE
                </span>
              </div>

              {/* Key-Value Spec Rows with subtle dividers */}
              <div className="divide-y divide-neutral-800/70 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-12 py-3 sm:py-3.5 gap-1 sm:gap-4 items-baseline">
                  <span className="sm:col-span-4 text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    YOUR TIME
                  </span>
                  <span className="sm:col-span-8 text-neutral-200 font-normal">
                    {activeOption.time}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-3 sm:py-3.5 gap-1 sm:gap-4 items-baseline">
                  <span className="sm:col-span-4 text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    YOUR VEHICLE
                  </span>
                  <span className="sm:col-span-8 text-neutral-200 font-normal">
                    {activeOption.vehicle}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-3 sm:py-3.5 gap-1 sm:gap-4 items-baseline">
                  <span className="sm:col-span-4 text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    WHAT IT REMOVES
                  </span>
                  <span className="sm:col-span-8 text-neutral-200 font-normal">
                    {activeOption.removes}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-3 sm:py-3.5 gap-1 sm:gap-4 items-baseline">
                  <span className="sm:col-span-4 text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    SALT STAINS, PET HAIR, ODOR
                  </span>
                  <span className="sm:col-span-8 text-neutral-200 font-normal flex items-center gap-1.5">
                    {activeOption.saltOdor === "Yes" ? (
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Yes
                      </span>
                    ) : activeOption.saltOdor === "No" ? (
                      <span className="text-neutral-400 flex items-center gap-1">
                        <X className="w-3.5 h-3.5 text-neutral-500" /> No
                      </span>
                    ) : (
                      <span className="text-amber-400/90 font-medium">
                        {activeOption.saltOdor}
                      </span>
                    )}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-3 sm:py-3.5 gap-1 sm:gap-4 items-baseline">
                  <span className="sm:col-span-4 text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    EQUIPMENT YOU NEED
                  </span>
                  <span className="sm:col-span-8 text-neutral-200 font-normal">
                    {activeOption.equipment}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-3 sm:py-3.5 gap-1 sm:gap-4 items-baseline">
                  <span className="sm:col-span-4 text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    COST
                  </span>
                  <span className="sm:col-span-8 text-neutral-100 font-medium">
                    {activeOption.cost}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 py-3 sm:py-3.5 gap-1 sm:gap-4 items-baseline">
                  <span className="sm:col-span-4 text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    HOW LONG IT LASTS
                  </span>
                  <span className="sm:col-span-8 text-neutral-200 font-normal">
                    {activeOption.duration}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. WHAT SEPARATES A DETAIL FROM A WASH AND VAC (Clean Minimal Table)      */}
        {/* ========================================================================= */}
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase block">
              SIDE-BY-SIDE BREAKDOWN
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit'] tracking-tight">
              What Separates a Detail From a Wash and Vac
            </h3>
          </div>

          {/* Minimalist Desktop & Tablet Comparison Table */}
          <div className="hidden sm:block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/30">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/70">
                  <th className="py-3.5 px-5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider w-[28%]">
                    Treatment Area
                  </th>
                  <th className="py-3.5 px-5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider w-[36%]">
                    A quick clean
                  </th>
                  <th className="py-3.5 px-5 text-[11px] font-bold text-red-400 uppercase tracking-wider w-[36%] bg-red-950/20">
                    A proper detail (Dos Bros)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 text-xs sm:text-sm font-normal">
                {detailVsWashData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-3.5 px-5 font-medium text-neutral-200">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-5 text-neutral-400">
                      {row.quickClean}
                    </td>
                    <td className="py-3.5 px-5 text-neutral-200 bg-red-950/10 font-normal">
                      {row.properDetail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Swiper Carousel (Under 640px) */}
          <div className="block sm:hidden">
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
                el: '.detail-vs-wash-pagination',
                bulletClass: 'services-bullet',
                bulletActiveClass: 'services-bullet-active',
              }}
              spaceBetween={16}
              slidesPerView={1}
              className="!pb-0"
            >
              {detailVsWashData.map((row, idx) => (
                <SwiperSlide key={idx} className="!h-auto flex">
                  <div className="w-full p-5 rounded-2xl border border-neutral-800/90 bg-neutral-900/50 backdrop-blur-sm space-y-3.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-neutral-800/80">
                      <span className="text-sm font-bold text-white font-['Outfit']">
                        {row.feature}
                      </span>
                      <span className="text-[10px] font-semibold text-neutral-400 px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800">
                        #{idx + 1} of {detailVsWashData.length}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/70 space-y-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 block">
                          A quick clean
                        </span>
                        <p className="text-neutral-400 leading-relaxed font-normal">
                          {row.quickClean}
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/25 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                          A proper detail (Dos Bros)
                        </span>
                        <p className="text-neutral-200 leading-relaxed font-normal">
                          {row.properDetail}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper Pagination Dots Container */}
            <div className="detail-vs-wash-pagination flex items-center justify-center gap-2 mt-6" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. ZERO-CLICK BLOCK & VALUE MATH (Clean Bottom 2-Column Card)             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch pt-2">
          
          {/* Left: Zero-click answer block */}
          <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 uppercase tracking-[0.2em] block">
                ZERO-CLICK ANSWER
              </span>

              <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                Is car detailing the same as a car wash?
              </h4>

              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 space-y-2">
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                  <strong className="text-white font-semibold">No.</strong> A car wash cleans the outside surface. Detailing cleans, restores, and protects both the inside and the outside, and the results last months instead of days.
                </p>
              </div>
            </div>

            <span className="text-[11px] text-neutral-400">
              Dos Bros Auto Detailing · Morris, MN
            </span>
          </div>

          {/* Right: Value Math & Honest Recommendation */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-7 lg:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-[11px] font-semibold text-red-400 uppercase tracking-[0.2em] block">
                  RUN THE MATH
                </span>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white font-['Outfit'] leading-snug">
                  Is it worth paying for something you could technically do yourself?
                </h4>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                <p>
                  Fair question. Run the math the other way. A car wash every couple of weeks runs you around 300 dollars a year and your vehicle never actually gets clean inside. One Express Full Detail is 245 dollars and the interior stays right for months. Cost per month of actually clean, the detail wins, and you did not spend a single Saturday on it.
                </p>
                <p className="text-neutral-400 italic">
                  &ldquo;We will say this honestly. If you enjoy detailing your own car, do it. Some people find it relaxing. But if you have been meaning to get to it since April and it is now August, that is what we are for.&rdquo;
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-500 transition-colors cursor-pointer"
              >
                <CalendarOutlined />
                <span>Get My Free Quote</span>
              </a>

              <a
                href="tel:3202873573"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors"
              >
                <PhoneOutlined className="text-red-500" />
                <span>Call 320-287-3573</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
