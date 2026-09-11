import React from 'react';
import { 
  CalendarOutlined 
} from '@ant-design/icons';
import { 
  MapPin, 
  Navigation, 
  Compass, 
  Waves, 
  Sun, 
  CornerDownRight 
} from 'lucide-react';

const serviceRegions = [
  {
    region: "Stevens County and right around Morris",
    icon: <MapPin className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    towns: ["Morris", "Hancock", "Alberta", "Chokio", "Donnelly", "Cyrus"]
  },
  {
    region: "North and northeast",
    icon: <Navigation className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    towns: ["Hoffman", "Kensington", "Barrett", "Elbow Lake", "Herman", "Ashby", "Evansville", "Brandon"]
  },
  {
    region: "East and lake country",
    icon: <Waves className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    towns: ["Starbuck", "Glenwood", "Lowry", "Villard", "Farwell", "Alexandria", "Osakis"]
  },
  {
    region: "South and southeast",
    icon: <Compass className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    towns: ["Benson", "Kerkhoven", "Murdock", "Danvers", "Clontarf", "Sunburg", "New London", "Spicer"]
  },
  {
    region: "West and southwest",
    icon: <Sun className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    towns: ["Wheaton", "Graceville", "Clinton", "Beardsley", "Appleton", "Milan", "Montevideo", "Madison", "Ortonville"]
  },
  {
    region: "Further out",
    icon: <CornerDownRight className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    towns: ["Fergus Falls", "Sauk Centre", "Willmar", "Melrose", "Paynesville", "Long Prairie"]
  }
];

export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="relative bg-neutral-900/40 py-20 sm:py-24 lg:py-28 border-b border-neutral-800/80 overflow-hidden select-none">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 right-1/4 w-137.5 h-87.5 bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-125 h-87.5 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>SERVICE AREA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            Towns we serve in <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-amber-500">
              West-Central Minnesota
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed pt-1">
            We are based in Morris and we travel. If your town is on this list, we come to you.
          </p>
        </div>

        {/* Clean Minimal Responsive Service Areas Table */}
        <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-md shadow-2xl mb-14 sm:mb-16">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/80">
                <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-[10.5px] sm:text-xs font-semibold text-neutral-300 uppercase tracking-wider w-[40%] sm:w-[32%] lg:w-[28%]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Region / Area</span>
                  </div>
                </th>
                <th className="py-3.5 sm:py-4 px-4 sm:px-6 text-[10.5px] sm:text-xs font-semibold text-neutral-300 uppercase tracking-wider w-[60%] sm:w-[68%] lg:w-[72%] border-l border-neutral-800/80">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    <span>Towns & Communities</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {serviceRegions.map((regionItem, index) => (
                <tr
                  key={index}
                  className="hover:bg-neutral-800/25 transition-colors group"
                >
                  {/* Column 1: Region / Area */}
                  <td className="py-4 sm:py-5 px-4 sm:px-6 align-top">
                    <div className="flex items-start gap-2.5 sm:gap-3.5">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-neutral-700 transition-colors">
                        {regionItem.icon}
                      </div>
                      <h3 className="text-xs sm:text-sm lg:text-[15px] font-bold text-white font-['Outfit'] leading-snug pt-1">
                        {regionItem.region}
                      </h3>
                    </div>
                  </td>

                  {/* Column 2: Towns & Communities */}
                  <td className="py-4 sm:py-5 px-4 sm:px-6 align-top border-l border-neutral-800/80">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {regionItem.towns.map((town, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800/90 hover:border-neutral-700 text-[11px] sm:text-xs text-neutral-200 font-medium transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 shrink-0" />
                          {town}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Centered Send Your Town Line & Get My Free Quote Button */}
        <div className="text-center space-y-4 sm:space-y-5">
          <p className="text-xs sm:text-sm lg:text-base text-neutral-300 font-normal leading-relaxed max-w-xl mx-auto">
            Send your town with your quote request and we will tell you straight away.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact-booking"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/25 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
            >
              {/* <CalendarOutlined className="text-sm" /> */}
              <span>Get My Free Quote</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
