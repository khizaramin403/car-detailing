import React from 'react';
import { 
  CalendarOutlined, 
  PhoneOutlined 
} from '@ant-design/icons';
import { 
  MapPin, 
  Navigation, 
  Compass, 
  Waves, 
  Sun, 
  CornerDownRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

// Swiper React Components & Modules for Small Screen Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const serviceRegions = [
  {
    region: "Stevens County and right around Morris",
    icon: <MapPin className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "Primary Home Base",
    badge: "0 Miles Added",
    towns: ["Morris", "Hancock", "Alberta", "Chokio", "Donnelly", "Cyrus"]
  },
  {
    region: "North and northeast",
    icon: <Navigation className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "North Highway Corridors",
    towns: ["Hoffman", "Kensington", "Barrett", "Elbow Lake", "Herman", "Ashby", "Evansville", "Brandon"]
  },
  {
    region: "East and lake country",
    icon: <Waves className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "Lake Country Lakes & Cabins",
    towns: ["Starbuck", "Glenwood", "Lowry", "Villard", "Farwell", "Alexandria", "Osakis"]
  },
  {
    region: "South and southeast",
    icon: <Compass className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "South County Corridors",
    towns: ["Benson", "Kerkhoven", "Murdock", "Danvers", "Clontarf", "Sunburg", "New London", "Spicer"]
  },
  {
    region: "West and southwest",
    icon: <Sun className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "Western Prairie & Farmland",
    towns: ["Wheaton", "Graceville", "Clinton", "Beardsley", "Appleton", "Milan", "Montevideo", "Madison", "Ortonville"]
  },
  {
    region: "Further out",
    icon: <CornerDownRight className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "Extended Travel Area",
    towns: ["Fergus Falls", "Sauk Centre", "Willmar", "Melrose", "Paynesville", "Long Prairie"]
  }
];

function RegionCard({ regionItem }) {
  return (
    <div
      className={`w-full h-full rounded-2xl p-6 sm:p-7 border backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${
        regionItem.badge
          ? 'bg-neutral-900/90 border-red-500/40 shadow-xl shadow-red-600/5 hover:border-red-500/60'
          : 'bg-neutral-950/80 border-neutral-800/90 hover:border-neutral-700/90 hover:bg-neutral-900/70'
      }`}
    >
      <div>
        {/* Region Card Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
            {regionItem.icon}
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            {regionItem.badge && (
              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-red-500/20 text-red-400 border border-red-500/30">
                {regionItem.badge}
              </span>
            )}
            <span className="text-[10px] font-semibold text-neutral-400 px-2.5 py-0.5 rounded-lg bg-neutral-900 border border-neutral-800">
              {regionItem.tag}
            </span>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] mb-4 leading-snug">
          {regionItem.region}
        </h3>

        {/* Town Pills / Chips List */}
        <div className="flex flex-wrap gap-2 pt-1">
          {regionItem.towns.map((town, tIdx) => (
            <span
              key={tIdx}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800/90 hover:border-neutral-700 text-xs text-neutral-200 font-medium transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
              {town}
            </span>
          ))}
        </div>
      </div>

      {/* Status Indicator */}
      <div className="pt-4 mt-6 border-t border-neutral-900 flex items-center gap-2 text-xs font-semibold text-neutral-400">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#fb2c36]" />
        <span className="text-neutral-300">100% Mobile Service</span>
      </div>
    </div>
  );
}

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="relative bg-neutral-900/40 py-20 sm:py-24 lg:py-28 border-b border-neutral-800/80 overflow-hidden select-none">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[350px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>SERVICE AREA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            Towns we serve in <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              West-Central Minnesota
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-1">
            We are based in Morris and we travel. If your town is on this list, we come to you.
          </p>
        </div>

        {/* 1. Desktop & Tablet Large Screen: Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 sm:mb-16">
          {serviceRegions.map((regionItem, index) => (
            <RegionCard key={index} regionItem={regionItem} />
          ))}
        </div>

        {/* 2. Mobile & Small Screen: Swiper.js Carousel */}
        <div className="block md:hidden mb-14 sm:mb-16">
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
              el: '.service-area-pagination',
              bulletClass: 'services-bullet',
              bulletActiveClass: 'services-bullet-active',
            }}
            spaceBetween={16}
            slidesPerView={1}
            className="!pb-0"
          >
            {serviceRegions.map((regionItem, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <RegionCard regionItem={regionItem} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Swiper Pagination Dots Container */}
          <div className="service-area-pagination flex items-center justify-center gap-2 mt-6" />
        </div>

        <div className="flex justify-center">
                          <a
                            href="#contact-booking"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/25 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
                          >
                            <CalendarOutlined className="text-sm" />
                            <span>Get My Free Quote</span>
                          </a>
                        </div>

        {/* Bottom Consultation Banner */}
        {/* <div className="relative rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] leading-tight">
                Not sure if we reach you?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                Send your town with your quote request and we will tell you straight away.
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
        </div> */}

      </div>
    </section>
  );
}
