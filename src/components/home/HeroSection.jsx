import React from 'react';
import heroBackground from '../../assets/Background_Herosection.jpeg';
import {
  StarFilled,
  CalendarOutlined,
  PhoneOutlined,
  CarOutlined
} from '@ant-design/icons';
import {
  Sparkles,
  Droplets,
  Armchair,
  Truck,
  Building2,
  Ship
} from 'lucide-react';

const servicesList = [
  {
    title: 'Interior Detailing',
    icon: <Armchair className="w-5 h-5 text-[#fb2c36]" />,
    href: '/services'
  },
  {
    title: 'Exterior & Hand Wash',
    icon: <Droplets className="w-5 h-5 text-[#fb2c36]" />,
    href: '/services'
  },
  {
    title: 'Full Detail Package',
    icon: <Sparkles className="w-5 h-5 text-[#fb2c36]" />,
    href: '/services'
  },
  {
    title: 'Truck & Farm Vehicles',
    icon: <Truck className="w-5 h-5 text-[#fb2c36]" />,
    href: '/services'
  },
  {
    title: 'Fleet & Commercial',
    icon: <Building2 className="w-5 h-5 text-[#fb2c36]" />,
    href: '/services'
  },
  {
    title: 'Boat & Pontoon Detailing',
    icon: <Ship className="w-5 h-5 text-[#fb2c36]" />,
    href: '/services'
  }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950 py-12 sm:py-16 lg:py-20 select-none">

      {/* Background Image with Contrast Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={heroBackground.src || heroBackground}
          alt="Dos Bros Auto Detailing Morris MN"
          className="w-full h-full object-cover object-center opacity-30 brightness-75 scale-105"
          loading="eager"
        />


      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Headline, Bio & Action Buttons (7 to 8 Cols on desktop) */}
          <div className="lg:col-span-7 xl:col-span-8 text-left space-y-6">

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <span className="text-white text-xs sm:text-sm font-semibold">
                5.0 Google Rating
              </span>
            </div>

            {/* Main Headline with Highlight Gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-['Outfit'] leading-[1.12]">
              Mobile Car Detailing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                in Morris, MN
              </span>
            </h1>

            {/* Prominent Subtitle */}
            <p className="text-base sm:text-lg font-medium text-neutral-200 font-['Outfit'] leading-relaxed">
              Two brothers from Morris. We come to you.
            </p>

            {/* Detailed Description */}
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal max-w-2xl">
              Dos Bros Detailing is a trusted mobile car detailing service based right here in Morris, Minnesota. Reyes and Mariano are two brothers from town, and we bring professional interior and exterior detailing straight to your driveway, your workplace, or your farm site. You never have to drop your vehicle off anywhere. We serve Morris and the surrounding communities.
            </p>

            {/* CTA Buttons with Consistent Color Theme */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/20 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
              >
                <CalendarOutlined className="text-sm" />
                <span>Book Your Detailing</span>
              </a>

              <a
                href="tel:3202873573"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 shadow-sm hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-md"
              >
                <PhoneOutlined className="text-red-500 text-sm" />
                <span>Call 320-287-3573</span>
              </a>
            </div>

          </div>

          {/* Right Column: "Our Services Include:" Sidebar Card (Strictly Locked Width) */}
          <div className="lg:col-span-5 xl:col-span-4 w-full flex justify-center lg:justify-end">
            <div 
              className="relative rounded-2xl bg-neutral-950/85 border border-neutral-800/90 p-4 sm:p-5 lg:p-6 shadow-2xl backdrop-blur-xl w-full max-w-[380px]"
              style={{ maxWidth: '380px' }}
            >

              {/* Card Header with Car Icon */}
              <div className="flex items-center gap-2.5 pb-3.5 mb-3 border-b border-neutral-800/80">
                <CarOutlined className="text-white text-base text-red-500" />
                <h3 className="text-sm sm:text-base font-semibold text-white font-['Outfit']">
                  Our Services Include:
                </h3>
              </div>

              {/* Interactive Services List */}
              <div className="space-y-2.5">
                {servicesList.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-neutral-900/70 hover:bg-neutral-800 border border-neutral-800/80 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-600/10 transition-all duration-200 group text-left block"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-950 flex items-center justify-center shrink-0 border border-neutral-800 group-hover:border-red-500/30 transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors flex-1">
                      {service.title}
                    </span>
                    <span className="text-neutral-600 group-hover:text-red-400 group-hover:translate-x-1 transition-all text-xs">
                      →
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
