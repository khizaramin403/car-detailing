import React from 'react';
import { 
  CalendarOutlined, 
  PhoneOutlined, 
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { 
  Armchair, 
  Droplets, 
  Sparkles, 
  Truck, 
  Building2, 
  Ship,
  Wrench,
  Dog,
  Wind,
  Layers,
  Sun,
  Repeat
} from 'lucide-react';

// Swiper React Components & Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const mainServices = [
  {
    title: "Interior Detailing",
    icon: <Armchair className="w-6 h-6" color="#fb2c36" strokeWidth={2.2} />,
    tag: "Deep Cabin Refresh",
    description: "Full vacuum, all surfaces wiped down, mats, cup holders, door panels, interior glass, and the cracks most people forget. Step up to Executive and you get steam cleaning, carpet and seat shampoo with extraction, stain treatment, and leather conditioning.",
    href: "/services"
  },
  {
    title: "Exterior Detailing and Hand Car Wash",
    icon: <Droplets className="w-6 h-6" color="#fb2c36" strokeWidth={2.2} />,
    tag: "Paint & Wheel Care",
    description: "Foam pre-soak, hand car wash, deep wheel and tire cleaning, bug and tar removal, tire shine, exterior glass, and spray wax protection. Executive adds iron remover, clay mitt decontamination, and detailed work on trim, grille, emblems, and door jambs.",
    href: "/services"
  },
  {
    title: "Full Detail",
    icon: <Sparkles className="w-6 h-6" color="#fb2c36" strokeWidth={2.2} />,
    tag: "Save $25 Bundled",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/30",
    description: "Interior and exterior together. Bundled, so you save 25 dollars.",
    href: "/services"
  },
  {
    title: "Truck and Farm Vehicle Detailing",
    icon: <Truck className="w-6 h-6" color="#fb2c36" strokeWidth={2.2} />,
    tag: "Heavy Duty & Dust",
    description: "Built around what gravel roads, field dust, and daily work actually do to a cab.",
    href: "/services"
  },
  {
    title: "Fleet and Commercial Detailing",
    icon: <Building2 className="w-6 h-6" color="#fb2c36" strokeWidth={2.2} />,
    tag: "On-Site Service",
    description: "Recurring schedules for businesses running more than one vehicle. We come to your lot.",
    href: "/services"
  },
  {
    title: "Boat and Pontoon Detailing",
    icon: <Ship className="w-6 h-6" color="#fb2c36" strokeWidth={2.2} />,
    tag: "Lake Country Ready",
    description: "Seasonal work for lake country. Sand, wet gear, and the smell that comes with both.",
    href: "/services"
  }
];

const addOns = [
  {
    title: "Engine Bay Detail",
    price: "$50",
    icon: <Wrench className="w-4 h-4 text-[#fb2c36]" />
  },
  {
    title: "Pet Hair Removal",
    price: "From $30",
    icon: <Dog className="w-4 h-4 text-[#fb2c36]" />
  },
  {
    title: "Odor Treatment",
    price: "From $30",
    icon: <Wind className="w-4 h-4 text-[#fb2c36]" />
  },
  {
    title: "Heavy Stain Removal",
    price: "From $25",
    icon: <Layers className="w-4 h-4 text-[#fb2c36]" />
  },
  {
    title: "Headlight Restoration",
    price: "Priced per vehicle",
    icon: <Sun className="w-4 h-4 text-[#fb2c36]" />
  },
  {
    title: "Maintenance Programs",
    price: "Recurring details",
    icon: <Repeat className="w-4 h-4 text-[#fb2c36]" />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-neutral-950 py-20 sm:py-24 overflow-hidden select-none">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            Our Car Detailing Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              in Morris, MN
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-1">
            Some vehicles need a quick refresh. Others need everything pulled apart and brought back to life. We handle both, and we tell you honestly which one your vehicle actually needs.
          </p>
        </div>

        {/* Modern Swiper Carousel Container with Centered Left/Right Navigation Buttons */}
        <div className="relative mb-16 px-1 sm:px-4">
          
          {/* Swiper Left Navigation Button - Hidden on Mobile, Centered on Tablet/Desktop */}
          <button
            type="button"
            className="services-swiper-prev hidden sm:flex absolute left-0 sm:-left-3 lg:-left-5 top-[45%] -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neutral-900/95 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-red-500/60 items-center justify-center transition-all shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Previous service"
          >
            <LeftOutlined className="text-sm" />
          </button>

          {/* Swiper Right Navigation Button - Hidden on Mobile, Centered on Tablet/Desktop */}
          <button
            type="button"
            className="services-swiper-next hidden sm:flex absolute right-0 sm:-right-3 lg:-right-5 top-[45%] -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neutral-900/95 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-red-500/60 items-center justify-center transition-all shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95 focus:outline-none"
            aria-label="Next service"
          >
            <RightOutlined className="text-sm" />
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            speed={700}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.services-swiper-pagination',
              bulletClass: 'services-bullet',
              bulletActiveClass: 'services-bullet-active',
            }}
            navigation={{
              prevEl: '.services-swiper-prev',
              nextEl: '.services-swiper-next',
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="services-swiper !pb-2"
          >
            {mainServices.map((service, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="w-full h-full min-h-[360px] sm:min-h-[380px] group relative rounded-2xl bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800/80 hover:border-red-500/40 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-red-600/10 backdrop-blur-sm">
                  <div className="flex-1 flex flex-col">
                    {/* Card Top Row: Icon + Tag */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-[#fb2c36]/40 transition-colors shadow-inner">
                        {service.icon}
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${service.badgeColor || 'bg-neutral-950/80 text-neutral-400 border-neutral-800'}`}>
                        {service.tag}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-red-400 transition-colors mb-3 leading-snug">
                      {service.title}
                    </h3>

                    {/* What it covers */}
                    <div className="space-y-1.5 mb-6 flex-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                        What it covers:
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <a
                    href={service.href}
                    className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors mt-auto"
                  >
                    <span>Explore Package</span>
                    <span className="text-neutral-500 group-hover:text-[#fb2c36] group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots Container - Centered Below Swiper */}
          <div className="services-swiper-pagination flex items-center justify-center gap-2 mt-8" />
        </div>

        {/* Add-ons & Extra Services Sub-Section */}
        <div className="rounded-2xl bg-neutral-900/60 border border-neutral-800/80 p-6 sm:p-8 mb-16 backdrop-blur-md">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
              Popular Add-Ons & Specialized Upgrades
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Customize your detail package with targeted vehicle treatments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {addOns.map((addon, index) => (
              <div 
                key={index}
                className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-red-500/30 transition-all text-center flex flex-col items-center justify-center space-y-2 group"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {addon.icon}
                </div>
                <span className="text-xs font-semibold text-neutral-200 leading-tight block">
                  {addon.title}
                </span>
                <span className="text-[11px] font-semibold text-red-400 block">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation & Quote Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] leading-tight">
                Not sure which one fits?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                Just tell us what your vehicle looks like right now. We will point you at the right package instead of the expensive one.
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
