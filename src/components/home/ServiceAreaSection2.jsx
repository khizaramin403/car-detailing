import React, { useState } from 'react';
import { ConfigProvider, theme } from 'antd';
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
  Truck 
} from 'lucide-react';

const regionsData = [
  {
    key: '1',
    label: 'Stevens County & Morris',
    shortName: 'Morris & Stevens',
    icon: <MapPin className="w-4 h-4 text-[#fb2c36]" />,
    headline: 'Stevens County & Morris',
    towns: ['Morris', 'Hancock', 'Alberta', 'Chokio', 'Donnelly', 'Cyrus']
  },
  {
    key: '2',
    label: 'North & Northeast',
    shortName: 'North Corridors',
    icon: <Navigation className="w-4 h-4 text-[#fb2c36]" />,
    headline: 'North & Northeast',
    towns: ['Hoffman', 'Kensington', 'Barrett', 'Elbow Lake', 'Herman', 'Ashby', 'Evansville', 'Brandon']
  },
  {
    key: '3',
    label: 'East & Lake Country',
    shortName: 'Lake Country',
    icon: <Waves className="w-4 h-4 text-[#fb2c36]" />,
    headline: 'East & Lake Country',
    towns: ['Starbuck', 'Glenwood', 'Lowry', 'Villard', 'Farwell', 'Alexandria', 'Osakis']
  },
  {
    key: '4',
    label: 'South & Southeast',
    shortName: 'South Corridors',
    icon: <Compass className="w-4 h-4 text-[#fb2c36]" />,
    headline: 'South & Southeast',
    towns: ['Benson', 'Kerkhoven', 'Murdock', 'Danvers', 'Clontarf', 'Sunburg', 'New London', 'Spicer']
  },
  {
    key: '5',
    label: 'West & Southwest',
    shortName: 'West Prairie',
    icon: <Sun className="w-4 h-4 text-[#fb2c36]" />,
    headline: 'West & Southwest',
    towns: ['Wheaton', 'Graceville', 'Clinton', 'Beardsley', 'Appleton', 'Milan', 'Montevideo', 'Madison', 'Ortonville']
  },
  {
    key: '6',
    label: 'Further Out',
    shortName: 'Extended Radius',
    icon: <CornerDownRight className="w-4 h-4 text-[#fb2c36]" />,
    headline: 'Further Out',
    towns: ['Fergus Falls', 'Sauk Centre', 'Willmar', 'Melrose', 'Paynesville', 'Long Prairie']
  }
];

export default function ServiceAreaSection2() {
  const [activeKey, setActiveKey] = useState('1');

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#fb2c36',
          colorBgContainer: '#171717',
          colorBorder: '#262626',
          fontFamily: 'Inter, sans-serif',
        },
      }}
    >
      <section id="service-area-tabs" className="relative bg-neutral-950 py-20 sm:py-24 lg:py-28 border-b border-neutral-800/80 overflow-hidden select-none">
        
        {/* Background Ambient Glow Accents */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>SERVICE AREA BY REGION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit'] uppercase tracking-tight leading-[1.15]">
              Explore Service Areas &nbsp;
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">
                By Region
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal pt-1">
              Select your region below to see all covered towns, mobile service details, and scheduling options.
            </p>
          </div>

          {/* Interactive Tabs by Region (No sliding - 4 on top, 2 below wrapped cleanly) */}
          <div className="max-w-5xl mx-auto mb-14 sm:mb-16">
            
            {/* Multi-Row Clean Tab Buttons Container */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto px-2">
                {regionsData.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveKey(tab.key)}
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm font-['Outfit'] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      activeKey === tab.key
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30 border border-red-500/50 scale-[1.02]'
                        : 'bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Region Detailed Showcase Card */}
            {regionsData.filter(r => r.key === activeKey).map(selected => (
              <div
                key={selected.key}
                className="rounded-3xl bg-neutral-900/80 border border-neutral-800/90 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md transition-all duration-500 relative overflow-hidden"
              >
                {/* Subtle Background Red Aura */}
                <div className="absolute right-0 top-0 w-80 h-80 bg-red-600/10 blur-[100px] pointer-events-none rounded-full" />

                <div className="relative z-10 space-y-6 sm:space-y-8">
                  
                  {/* Top Metadata Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800/80 pb-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit'] leading-tight">
                        {selected.headline}
                      </h3>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-semibold text-neutral-300 shrink-0">
                      <Truck className="w-4 h-4 text-[#fb2c36]" />
                      <span>100% Mobile Service</span>
                    </div>
                  </div>

                  {/* Covered Towns Chips Section */}
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 block mb-3">
                      Covered Towns & Locations:
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {selected.towns.map((town, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800/90 hover:border-red-500/40 text-xs sm:text-sm text-white font-semibold transition-all shadow-sm"
                        >
                          <MapPin className="w-3.5 h-3.5 text-red-500" />
                          <span>{town}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quick Direct Quote CTA For This Region */}
                  <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-400 text-center sm:text-left">
                      Live in <strong className="text-white">{selected.label}</strong>? We can detail your vehicle at home or work.
                    </p>
                    <a
                      href="/contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all border border-red-500/40"
                    >
                      <CalendarOutlined />
                      <span>Book for {selected.shortName}</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Bottom Consultation Banner (Services Section Consistent Style) */}
          <div className="relative rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-8 sm:p-10 shadow-2xl overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-2xl space-y-2.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] leading-tight">
                  Not sure if we reach you?
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Send your town with your quote request and we will tell you straight away.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
                >
                  <CalendarOutlined className="text-base" />
                  <span>Get My Free Quote</span>
                </a>

                <a
                  href="tel:3202873573"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-neutral-200 uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-700/80 shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <PhoneOutlined className="text-red-500 text-base" />
                  <span>Call 320-287-3573</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </ConfigProvider>
  );
}
