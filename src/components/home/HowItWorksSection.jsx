import React from 'react';
import { 
  CalendarOutlined, 
  PhoneOutlined, 
  ClockCircleOutlined
} from '@ant-design/icons';
import { 
  Truck, 
  Sparkles, 
  Droplet, 
  Plug, 
  Quote, 
  MessageSquare, 
  CheckCircle2
} from 'lucide-react';

// Swiper React Components & Modules for Mobile Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const steps = [
  {
    step: "01",
    title: "1. Send us a few details",
    subtitle: "Quick & Simple Inquiry",
    icon: <MessageSquare className="w-6 h-6 text-[#fb2c36]" strokeWidth={2.2} />,
    description: "Tell us your vehicle, your town, and roughly what you are after. A photo helps if the inside is rough. Reyes usually gets back to you the same day with a price."
  },
  {
    step: "02",
    title: "2. We come to you",
    subtitle: "100% Mobile Service",
    icon: <Truck className="w-6 h-6 text-[#fb2c36]" strokeWidth={2.2} />,
    description: "Driveway, work parking lot, farm site, wherever your vehicle sits. We bring all our own equipment, products, and tools."
  },
  {
    step: "03",
    title: "3. You get it back looking new",
    subtitle: "Complete Walkaround",
    icon: <Sparkles className="w-6 h-6 text-[#fb2c36]" strokeWidth={2.2} />,
    description: "We walk around the vehicle with you before we leave. If something got missed, we fix it right then. And we take our mess with us."
  }
];

// Reusable Step Card Component for Consistent Height & Styling
function StepCard({ item }) {
  return (
    <div className="w-full h-full min-h-[380px] group relative rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800/80 hover:border-red-500/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-red-600/10 backdrop-blur-sm">
      {/* Step Number Watermark Accent */}
      <div className="absolute top-5 right-6 text-3xl sm:text-4xl font-black text-neutral-800 group-hover:text-red-950/60 transition-colors font-['Outfit'] select-none">
        {item.step}
      </div>

      <div>
        {/* Step Icon */}
        <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 mb-6 group-hover:border-[#fb2c36]/40 transition-colors shadow-inner">
          {item.icon}
        </div>

        {/* Step Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mb-3 group-hover:text-red-400 transition-colors">
          {item.title}
        </h3>

        {/* Main Description */}
        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 font-normal">
          {item.description}
        </p>


      </div>

      {/* Step Status Indicator */}
      <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center gap-2 text-xs font-semibold text-neutral-400">
        <CheckCircle2 className="w-4 h-4 text-[#fb2c36]" />
        <span className="text-neutral-300">{item.subtitle}</span>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative bg-neutral-950 py-20 sm:py-24 lg:py-28 overflow-hidden select-none border-b border-neutral-800/80">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            How mobile detailing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              works
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-1">
            You do not have to go anywhere. That is the whole point.
          </p>
        </div>

        {/* 1. Mobile & Extra Small Screens: Swiper.js Carousel */}
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
              el: '.how-it-works-pagination',
              bulletClass: 'services-bullet',
              bulletActiveClass: 'services-bullet-active',
            }}
            spaceBetween={16}
            slidesPerView={1}
            className="!pb-0"
          >
            {steps.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <StepCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Swiper Pagination Dots Container - Centered Below Cards */}
          <div className="how-it-works-pagination flex items-center justify-center gap-2 mt-6" />
        </div>

        {/* 2. Medium, Desktop, Large Screens: 3-Column Progression Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-16">
          {steps.map((item, index) => (
            <StepCard key={index} item={item} />
          ))}
        </div>

        {/* Reyes's Pro Tip Standout Box */}
        {/* <div className="relative rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 p-6 sm:p-8 lg:p-10 mb-14 sm:mb-16 shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="absolute -right-6 -bottom-6 text-neutral-800/20 pointer-events-none">
            <Quote className="w-40 h-40" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center shrink-0">
              <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-[#fb2c36]" />
            </div>

            <div className="space-y-2.5 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-extrabold tracking-wider text-red-400 uppercase">
                <span>REYES'S TIP</span>
              </div>

              <blockquote className="text-sm sm:text-base lg:text-lg text-neutral-200 italic font-medium leading-relaxed">
                "If your floor mats are rubber, leave them in. We can pressure wash those and they come out perfect. Carpet mats are a different story. Hair works its way into carpet fibers and some of it just does not want to leave. If you know your mats are bad, tell me ahead of time so I can plan for the extra work."
              </blockquote>
            </div>
          </div>
        </div> */}

        {/* One thing we need from you & Quote Button */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            <strong className="text-white">One thing we need from you:</strong> Access to an outdoor water spigot and a standard power outlet. Most driveways and shops already have both. If you are not sure, just ask us and we will figure it out together before you book.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact-booking"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/25 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
            >
              <CalendarOutlined className="text-sm" />
              <span>Get My Free Quote</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
