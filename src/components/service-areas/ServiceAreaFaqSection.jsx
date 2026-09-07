import React from 'react';
import { Collapse, ConfigProvider, theme } from 'antd';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    key: '1',
    label: 'My town is not on the list. Do you still come out?',
    answer:
      'Probably. That list covers where we work regularly, not the edge of what we will do. Send us your town with a quote request and we will tell you straight away whether it works and what the travel would be.'
  },
  {
    key: '2',
    label: 'How is the travel fee calculated?',
    answer:
      'By distance from Morris, not by the hour. Nothing beyond about 20 miles has a fee. Twenty to thirty five miles starts at 15 dollars, thirty five to fifty starts at 25 dollars, and beyond that we quote it. The fee is confirmed with your price before you book, never added afterward.'
  },
  {
    key: '3',
    label: 'Can I bring my vehicle to you instead?',
    answer:
      'Yes, and sometimes that is the better deal. If you are further out and it is a single vehicle, dropping it in Morris skips the travel fee entirely. Just ask and we will tell you honestly which way saves you money.'
  },
  {
    key: '4',
    label: 'Do you do multiple vehicles at one location?',
    answer:
      'We do, and that is one of the best ways to use us. Several vehicles at one address, one farm, or one business lot means we are there anyway, so the travel cost gets spread out. Businesses running a fleet should look at our fleet page.'
  },
  {
    key: '5',
    label: 'Do you work in winter?',
    answer:
      'Yes, though weather changes what makes sense. Interior work goes ahead year round with no problem. Exterior work depends on conditions, and we will tell you honestly if a day is not going to give you a good result. Most people around here get a full detail after thaw and Express interiors through the winter to stay ahead of the salt.'
  }
];

export default function ServiceAreaFaqSection() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgContainer: '#171717',
          colorBorder: '#262626',
          colorPrimary: '#fb2c36',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        },
        components: {
          Collapse: {
            contentBg: '#0f0f0f',
            headerBg: '#171717',
            headerPadding: '18px 24px',
            contentPadding: '18px 24px',
          },
        },
      }}
    >
      <section id="service-area-faq" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-28 overflow-hidden select-none border-t border-neutral-900">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>FAQ</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Questions About <br className="hidden sm:inline" />
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                Where We Go
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light pt-1">
              Clear answers about our travel range, service locations, and how we bring the detail to you.
            </p>
          </div>

          {/* Ant Design Collapse FAQ Accordion (Matching Home & About Page Style) */}
          <div className="custom-faq-wrapper">
            <Collapse
              accordion
              bordered={false}
              expandIconPosition="end"
              expandIcon={({ isActive }) => (
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
                    isActive
                      ? 'bg-red-500/20 border-red-500/50 text-[#fb2c36] rotate-180'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 pointer-events-none" />
                </div>
              )}
              items={faqItems.map((item) => ({
                key: item.key,
                label: (
                  <span className="font-['Outfit'] text-sm sm:text-base font-normal text-neutral-100 hover:text-white transition-colors">
                    {item.label}
                  </span>
                ),
                children: (
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light pt-1">
                    {item.answer}
                  </p>
                ),
                className:
                  'mb-3 rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900/60 hover:border-neutral-700/80 transition-all backdrop-blur-sm shadow-md'
              }))}
            />
          </div>

        </div>
      </section>
    </ConfigProvider>
  );
}
