import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, X } from 'lucide-react';

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

      </div>
    </section>
  );
}
