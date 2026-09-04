import React from 'react';
import { 
  CalendarOutlined, 
  PhoneOutlined
} from '@ant-design/icons';
import { 
  Car, 
  Truck, 
  Tractor, 
  Building2, 
  Ship, 
  Sparkles, 
  Compass, 
  Maximize2,
  Users
} from 'lucide-react';

// Swiper React Components & Modules for Small Screen Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const vehicleTypesData = [
  {
    type: "Sedans and coupes",
    icon: <Car className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "Highway miles on 28, 59, and 9. Winter salt. Everyday use.",
    focus: "Salt stain removal, full interior, exterior decontamination",
    tag: "Commuter"
  },
  {
    type: "Mid-size SUVs",
    icon: <Car className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "Family use, groceries, school runs, weekend hauling",
    focus: "Interior detail, stain treatment, surfaces and vents",
    tag: "Family Daily"
  },
  {
    type: "3-row and XL SUVs",
    icon: <Users className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "Kids, sports gear, food, pet hair, and a lot of seats",
    focus: "Deep interior, carpet and seat extraction, odor treatment",
    tag: "Multi-Passenger"
  },
  {
    type: "Pickups and full-size trucks",
    icon: <Truck className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "Gravel township roads, hauling, dust everywhere",
    focus: "Cab dust, mats, door jambs, full exterior",
    tag: "Daily Hauler"
  },
  {
    type: "Farm and work trucks",
    icon: <Tractor className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "Field and feedlot dust, harvest season, spring mud",
    focus: "Heavy interior extraction, cab surfaces, deep exterior work",
    tag: "Heavy Work",
    badge: "Locals' Favorite"
  },
  {
    type: "Work vans and Sprinters",
    icon: <Truck className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "All-day use, tools sliding around, shared drivers",
    focus: "Recurring maintenance detail, cargo area, high-touch surfaces",
    tag: "Trade & Cargo"
  },
  {
    type: "Fleet vehicles",
    icon: <Building2 className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "Sitting in a lot all day, multiple drivers, no clear owner",
    focus: "Scheduled recurring service so nothing gets away from you",
    tag: "Commercial"
  },
  {
    type: "Weekend and show vehicles",
    icon: <Sparkles className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "Sit all winter, then get driven hard",
    focus: "Executive full detail, paint decontamination, protection",
    tag: "Enthusiast"
  },
  {
    type: "Boats and pontoons",
    icon: <Ship className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "Sand, wet gear, fishing equipment, lake country",
    focus: "Interior extraction, odor treatment, full wipe-down",
    tag: "Marine"
  },
  {
    type: "RVs and campers",
    icon: <Compass className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "Seasonal storage, road grime, long spells parked",
    focus: "Custom quote based on size and condition",
    tag: "Recreational"
  },
  {
    type: "Oversized",
    icon: <Maximize2 className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    dealsWith: "Anything bigger than the above",
    focus: "Custom quote",
    tag: "Custom Spec"
  }
];

// Reusable Vehicle Card Component for Small Screen Carousel
function VehicleCard({ v }) {
  return (
    <div
      className={`w-full h-full min-h-[260px] rounded-2xl p-5 sm:p-6 border backdrop-blur-md flex flex-col justify-between transition-all ${
        v.badge 
          ? 'bg-neutral-900/90 border-red-500/50 shadow-lg shadow-red-600/10' 
          : 'bg-neutral-950/80 border-neutral-800/90 hover:border-neutral-700'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
            {v.icon}
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            {v.badge && (
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-red-500/20 text-red-400 border border-red-500/30">
                {v.badge}
              </span>
            )}
            <span className="text-[10px] font-semibold text-neutral-400 px-2 py-0.5 rounded-lg bg-neutral-900 border border-neutral-800">
              {v.tag}
            </span>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-3">
          {v.type}
        </h3>

        <div className="space-y-2.5 text-xs">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-0.5">
              What it deals with:
            </span>
            <p className="text-neutral-300 leading-relaxed">
              {v.dealsWith}
            </p>
          </div>

          <div className="pt-2 border-t border-neutral-900">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-0.5">
              Detail Focus:
            </span>
            <p className="text-neutral-200 font-medium leading-relaxed">
              {v.focus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VehicleTypesSection() {
  return (
    <section id="vehicle-types" className="relative bg-neutral-900/40 py-20 sm:py-24 lg:py-28 border-y border-neutral-800/80 overflow-hidden select-none">
      
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[300px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>VEHICLE TYPES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            What we see on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              vehicles around Morris
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-1">
            Here is what most people do not realize. A commuter sedan and a farm truck get dirty in completely different ways. Same town, same roads, totally different problem. So we do not treat them the same.
          </p>
        </div>

        {/* 1. Desktop & Tablet Large Screen: Table View */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-md mb-14 sm:mb-16 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/90 text-[11px] font-extrabold uppercase tracking-wider text-neutral-400">
                <th className="py-4 px-6 w-1/4">Vehicle</th>
                <th className="py-4 px-6 w-3/8">What it deals with around Morris</th>
                <th className="py-4 px-6 w-3/8">What the detail focuses on</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 text-xs sm:text-sm">
              {vehicleTypesData.map((v, i) => (
                <tr 
                  key={i}
                  className={`hover:bg-neutral-900/40 transition-colors ${v.badge ? 'bg-red-950/10' : ''}`}
                >
                  <td className="py-4 px-6 font-bold text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                        {v.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-['Outfit'] text-sm sm:text-base font-bold text-white">
                            {v.type}
                          </span>
                          {v.badge && (
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-red-500/20 text-red-400 border border-red-500/30">
                              {v.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-neutral-500 block">
                          {v.tag}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-6 text-neutral-300 leading-relaxed">
                    {v.dealsWith}
                  </td>

                  <td className="py-4 px-6 text-neutral-200 leading-relaxed font-medium">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-neutral-900/80 border border-neutral-800/80 text-neutral-300">
                      {v.focus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2. Mobile & Extra Small Screen: Swiper.js Carousel */}
        <div className="block lg:hidden mb-14 sm:mb-16">
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
              el: '.vehicle-types-pagination',
              bulletClass: 'services-bullet',
              bulletActiveClass: 'services-bullet-active',
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="!pb-0"
          >
            {vehicleTypesData.map((v, i) => (
              <SwiperSlide key={i} className="!h-auto flex">
                <VehicleCard v={v} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Swiper Pagination Dots Container - Centered Below Cards */}
          <div className="vehicle-types-pagination flex items-center justify-center gap-2 mt-6" />
        </div>

        {/* Bottom Farm Truck Highlight & Consultation Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400">
                <Tractor className="w-3.5 h-3.5 text-red-500" />
                <span>Farm & Gravel Specialists</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] leading-tight">
                Farm trucks are the ones we get asked about most.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                And honestly, they are our favorite ones to do. The before and after on a truck that has been running gravel all summer is something else.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-600/20 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
              >
                <CalendarOutlined className="text-sm" />
                <span>Get My Free Quote</span>
              </a>

              <a
                href="tel:3202873573"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <PhoneOutlined className="text-red-500 text-sm" />
                <span>Call 320-287-3573</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
