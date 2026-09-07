import React, { useState } from 'react';
import { 
  CalendarOutlined, 
  ClockCircleOutlined, 
  PhoneOutlined
} from '@ant-design/icons';
import { 
  Sparkles, 
  Droplets, 
  Armchair, 
  Zap, 
  Layers, 
  Wrench, 
  Dog, 
  Wind,
  ShieldCheck,
  Star
} from 'lucide-react';

// Swiper React Components & Modules for Mobile Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const expressPackages = [
  {
    name: "Express Exterior",
    price: "$75",
    time: "1 to 1.5 hours",
    bestFor: "Vehicles that get washed regularly and just need a fresh finish",
    tag: "Routine Wash",
    icon: <Droplets className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    featured: false
  },
  {
    name: "Express Interior",
    price: "$195",
    time: "2 to 3 hours",
    bestFor: "Keeping the inside fresh between deep cleans",
    tag: "Cabin Refresh",
    icon: <Armchair className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    featured: false
  },
  {
    name: "Express Full Detail",
    price: "$245",
    time: "3 to 4.5 hours",
    bestFor: "A complete refresh at the best value. Save 25 dollars.",
    tag: "Best Value • Save $25",
    icon: <Sparkles className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    featured: true,
    badge: "Save $25"
  }
];

const executivePackages = [
  {
    name: "Executive Exterior",
    price: "$100",
    time: "1.5 to 2.5 hours",
    bestFor: "Restoring gloss and pulling out embedded contaminants",
    tag: "Clay & Decon",
    icon: <Droplets className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    featured: false
  },
  {
    name: "Executive Interior",
    price: "$255",
    time: "3 to 5 hours",
    bestFor: "Built-up dirt, stains, and grime that a normal clean will not touch",
    tag: "Deep Steam & Shampoo",
    icon: <Armchair className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    featured: false
  },
  {
    name: "Executive Full Detail",
    price: "$330",
    time: "5 to 7 hours",
    bestFor: "The complete job. Cleanest, best looking, best protected.",
    tag: "Ultimate Protection",
    icon: <Sparkles className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    featured: true,
    badge: "Most Thorough"
  }
];

const vehicleSizes = [
  { type: "Sedan or coupe", add: "Base price", isBase: true },
  { type: "Mid-size SUV or truck", add: "+$20", isBase: false },
  { type: "3-row or XL SUV", add: "+$35", isBase: false },
  { type: "Full-size truck", add: "+$40", isBase: false },
  { type: "Van or Sprinter", add: "+$50", isBase: false },
  { type: "Oversized", add: "Custom quote", isBase: false }
];

const addOnsList = [
  { name: "Engine Bay Detail", price: "$50", icon: <Wrench className="w-4 h-4 text-[#fb2c36]" /> },
  { name: "Pet Hair Removal", price: "From $30", icon: <Dog className="w-4 h-4 text-[#fb2c36]" /> },
  { name: "Heavy Stain Removal", price: "From $25", icon: <Layers className="w-4 h-4 text-[#fb2c36]" /> },
  { name: "Odor Treatment", price: "From $30", icon: <Wind className="w-4 h-4 text-[#fb2c36]" /> }
];

// Reusable Package Card Component
function PackageCard({ pkg }) {
  return (
    <div
      className={`w-full h-full min-h-[420px] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 backdrop-blur-md ${
        pkg.featured
          ? 'bg-zinc-900/90 border-2 border-red-500/60 shadow-xl shadow-red-600/10'
          : 'bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/80 shadow-lg'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4 min-h-[40px]">
          <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
            {pkg.icon}
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            {pkg.badge && (
              <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                {pkg.badge}
              </span>
            )}
            <span className="text-[11px] font-semibold text-zinc-400 px-2.5 py-0.5 rounded-lg bg-zinc-950/80 border border-zinc-800">
              {pkg.tag}
            </span>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white font-['Outfit'] mb-2">
          {pkg.name}
        </h4>

        <div className="flex items-baseline gap-1.5 pb-4 mb-5 border-b border-zinc-800/80">
          <span className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
            {pkg.price}
          </span>
          <span className="text-xs text-zinc-400 font-medium">starting at</span>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
            <ClockCircleOutlined className="text-red-400 text-xs" />
            <span>Service time: <strong className="text-white">{pkg.time}</strong></span>
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
              Best for:
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed min-h-[40px] sm:min-h-[44px]">
              {pkg.bestFor}
            </p>
          </div>
        </div>
      </div>

      <a
        href="/contact"
        className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 mt-auto ${
          pkg.featured
            ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-600/30'
            : 'bg-zinc-950 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800'
        }`}
      >
        <CalendarOutlined />
        <span>Book Package</span>
      </a>
    </div>
  );
}

export default function PricingSection() {
  const [activeKey, setActiveKey] = useState('executive'); // Default: 'executive'

  return (
    <section id="pricing" className="relative bg-neutral-900/50 py-20 sm:py-24 lg:py-28 border-y border-zinc-800/80 overflow-hidden select-none">
      
      {/* Zinc Ambient Glow Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>PACKAGES AND PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            Our Packages and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              what they start at
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-1">
            Most detailers around here make you call before they will tell you anything about price. We think that is annoying. Here is what we charge.
          </p>

          {/* Sleek Segmented Tabs Navigation (Zero Layout Shift, No Wrap, Smooth Transitions) */}
          <div className="pt-4 sm:pt-6 flex justify-center w-full max-w-full px-2">
            <div className="inline-flex items-center p-1 sm:p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 backdrop-blur-md shadow-xl gap-1 sm:gap-2 max-w-full overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveKey('express')}
                className={`whitespace-nowrap px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold font-['Outfit'] transition-colors duration-150 cursor-pointer border select-none focus:outline-none ${
                  activeKey === 'express'
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md shadow-red-600/25 border-red-500/40'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60 border-transparent'
                }`}
              >
                Express Series
              </button>

              <button
                type="button"
                onClick={() => setActiveKey('executive')}
                className={`whitespace-nowrap px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold font-['Outfit'] transition-colors duration-150 cursor-pointer border select-none focus:outline-none ${
                  activeKey === 'executive'
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md shadow-red-600/25 border-red-500/40'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60 border-transparent'
                }`}
              >
                Executive Series
              </button>

              <button
                type="button"
                onClick={() => setActiveKey('all')}
                className={`whitespace-nowrap px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold font-['Outfit'] transition-colors duration-150 cursor-pointer border select-none focus:outline-none ${
                  activeKey === 'all'
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md shadow-red-600/25 border-red-500/40'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60 border-transparent'
                }`}
              >
                All Series
              </button>
            </div>
          </div>
        </div>

        {/* Tab Panels Container with key={activeKey} for smooth fade transitions */}
        <div key={activeKey} className="tab-fade-in min-h-[480px]">
          {/* 1. Tab Content: Express Series */}
          {activeKey === 'express' && (
            <div className="mb-16 sm:mb-20">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-1">
                  Maintenance Tier
                </span>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Routine maintenance to keep a vehicle looking its best.
                </p>
              </div>

              {/* Mobile View: Swiper Carousel */}
              <div className="block md:hidden">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  speed={600}
                  autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  pagination={{
                    clickable: true,
                    el: '.pricing-express-pagination',
                    bulletClass: 'services-bullet',
                    bulletActiveClass: 'services-bullet-active',
                  }}
                  spaceBetween={16}
                  slidesPerView={1}
                  className="pricing-swiper !pb-0"
                >
                  {expressPackages.map((pkg, idx) => (
                    <SwiperSlide key={idx} className="!h-auto flex">
                      <PackageCard pkg={pkg} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Pagination Dots - Positioned Below Card */}
                <div className="pricing-express-pagination flex items-center justify-center gap-2 mt-6" />
              </div>

              {/* Tablet & Desktop View: 3 Columns Grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
                {expressPackages.map((pkg, idx) => (
                  <PackageCard key={idx} pkg={pkg} />
                ))}
              </div>
            </div>
          )}

          {/* 2. Tab Content: Executive Series */}
          {activeKey === 'executive' && (
            <div className="mb-16 sm:mb-20">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Restoration & Deep Clean
                </span>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Deeper cleaning and restoration.
                </p>
              </div>

              {/* Mobile View: Swiper Carousel */}
              <div className="block md:hidden">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  speed={600}
                  autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  pagination={{
                    clickable: true,
                    el: '.pricing-executive-pagination',
                    bulletClass: 'services-bullet',
                    bulletActiveClass: 'services-bullet-active',
                  }}
                  spaceBetween={16}
                  slidesPerView={1}
                  className="pricing-swiper !pb-0"
                >
                  {executivePackages.map((pkg, idx) => (
                    <SwiperSlide key={idx} className="!h-auto flex">
                      <PackageCard pkg={pkg} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Pagination Dots - Positioned Below Card */}
                <div className="pricing-executive-pagination flex items-center justify-center gap-2 mt-6" />
              </div>

              {/* Tablet & Desktop View: 3 Columns Grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
                {executivePackages.map((pkg, idx) => (
                  <PackageCard key={idx} pkg={pkg} />
                ))}
              </div>
            </div>
          )}

          {/* 3. Tab Content: All Series */}
          {activeKey === 'all' && (
            <div className="mb-16 sm:mb-20 space-y-14">
              
              {/* Express Block inside All Series */}
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-zinc-800 mb-6">
                  <Zap className="w-4 h-4 text-red-500" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                    Express Series
                  </h3>
                  <span className="text-xs text-zinc-400 ml-auto">
                    Routine maintenance
                  </span>
                </div>

                {/* Mobile View */}
                <div className="block md:hidden">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    pagination={{
                      clickable: true,
                      el: '.pricing-all-express-pagination',
                      bulletClass: 'services-bullet',
                      bulletActiveClass: 'services-bullet-active',
                    }}
                    spaceBetween={16}
                    slidesPerView={1}
                    className="pricing-swiper !pb-0"
                  >
                    {expressPackages.map((pkg, idx) => (
                      <SwiperSlide key={idx} className="!h-auto flex">
                        <PackageCard pkg={pkg} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="pricing-all-express-pagination flex items-center justify-center gap-2 mt-6" />
                </div>

                {/* Desktop View */}
                <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
                  {expressPackages.map((pkg, idx) => (
                    <PackageCard key={idx} pkg={pkg} />
                  ))}
                </div>
              </div>

              {/* Executive Block inside All Series */}
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-zinc-800 mb-6">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                    Executive Series
                  </h3>
                  <span className="text-xs text-zinc-400 ml-auto">
                    Deeper cleaning & restoration
                  </span>
                </div>

                {/* Mobile View */}
                <div className="block md:hidden">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    pagination={{
                      clickable: true,
                      el: '.pricing-all-exec-pagination',
                      bulletClass: 'services-bullet',
                      bulletActiveClass: 'services-bullet-active',
                    }}
                    spaceBetween={16}
                    slidesPerView={1}
                    className="pricing-swiper !pb-0"
                  >
                    {executivePackages.map((pkg, idx) => (
                      <SwiperSlide key={idx} className="!h-auto flex">
                        <PackageCard pkg={pkg} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="pricing-all-exec-pagination flex items-center justify-center gap-2 mt-6" />
                </div>

                {/* Desktop View */}
                <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
                  {executivePackages.map((pkg, idx) => (
                    <PackageCard key={idx} pkg={pkg} />
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* 4. Vehicle Size & Add-Ons Surcharges (Side-by-Side Tables) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
          
          {/* Vehicle Size Table */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                  Vehicle Size
                </h3>
                <span className="text-xs font-semibold text-zinc-400 px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800">
                  Added to the base price.
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Adjusted based on physical cabin and body surface area.
              </p>

              <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/70">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800 bg-zinc-900/90 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      <th className="py-3 px-4">Vehicle type</th>
                      <th className="py-3 px-4 text-right">Add</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60">
                    {vehicleSizes.map((v, idx) => (
                      <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-zinc-200">
                          {v.type}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <span className={`font-bold ${
                            v.isBase 
                              ? 'text-zinc-400 font-medium' 
                              : v.add === 'Custom quote'
                                ? 'text-amber-400'
                                : 'text-red-400 font-extrabold'
                          }`}>
                            {v.add}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Add-Ons Table */}
          <div className="lg:col-span-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                  Add-Ons
                </h3>
                <span className="text-xs font-semibold text-red-400 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                  Targeted Extras
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Specialized treatments available with any package.
              </p>

              <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/70">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800 bg-zinc-900/90 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                      <th className="py-3 px-4">Add-on</th>
                      <th className="py-3 px-4 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60">
                    {addOnsList.map((addon, idx) => (
                      <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-zinc-200">
                          <div className="flex items-center gap-2.5">
                            {addon.icon}
                            <span>{addon.name}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-right font-extrabold text-white">
                          {addon.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        {/* <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-semibold text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Zero-Click Answer</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-['Outfit'] tracking-tight leading-snug">
              How is a quote built? <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                Base package, plus vehicle size, plus any add-ons. That is it.
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal max-w-3xl mx-auto">
              Here is the honest part. These are starting prices for a vehicle in average condition. Heavy pet hair, deep stains, or years of buildup can move the number. When that happens, Reyes tells you before he starts working, not after he finishes. We are pretty particular about that. Nobody likes a surprise on the invoice.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-600/20 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
              >
                <CalendarOutlined className="text-sm" />
                <span>Get My Free Quote</span>
              </a>

              <a
                href="tel:3202873573"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <PhoneOutlined className="text-red-500 text-sm" />
                <span>Call 320-287-3573</span>
              </a>
            </div>

          </div>
        </div> */}

      </div>
    </section>
  );
}
