import React from 'react';
import { Collapse, ConfigProvider, theme } from 'antd';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    key: '1',
    label: 'How much does car detailing cost in Morris, MN?',
    answer:
      'Our packages start at 75 dollars for an Express Exterior and 330 dollars for a full Executive detail. Vehicle size adds 20 to 50 dollars. Travel is free within about 20 miles of Morris. Most customers land somewhere between 200 and 400 dollars depending on vehicle and condition.'
  },
  {
    key: '2',
    label: 'Why is detailing more expensive than a car wash?',
    answer:
      'Because it is a completely different job. A car wash is ten minutes and cleans the outside surface. A full detail is hours of hands-on work using extraction, steam, and decontamination on both the inside and outside, and the result lasts months instead of days.'
  },
  {
    key: '3',
    label: 'Is the calculator price what I will actually pay?',
    answer:
      'It is a starting price, and for most vehicles in normal condition it is very close. What can move it is heavy pet hair, set-in stains, strong odor, or years of buildup. If that is your vehicle, we tell you before we start, not after.'
  },
  {
    key: '4',
    label: 'Do you charge extra to come to my town?',
    answer:
      'Not within about 20 miles of Morris. Beyond that there is a travel fee starting at 15 dollars to cover fuel and time, and it is always confirmed with your quote before you book.'
  },
  {
    key: '5',
    label: 'Do I tip?',
    answer:
      'No, and please do not feel awkward about it. We own the business and we price the job properly, so a tip is never expected. If you want to do something for us, leave an honest Google review or mention us to a neighbor. That helps far more.'
  },
  {
    key: '6',
    label: 'Do you offer payment plans or take cards?',
    answer:
      'Ask us when you book and we will tell you what we can take. We keep this simple.'
  }
];

export default function PricingFaqSection() {
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
            headerPadding: '16px 20px',
            contentPadding: '16px 20px',
          },
        },
      }}
    >
      <section id="pricing-faq" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-24 border-t border-neutral-900 overflow-hidden select-none">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-medium text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="tracking-widest uppercase">FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Questions About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                Pricing
              </span>
            </h2>

            <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mx-auto" />
          </div>

          {/* Ant Design Collapse FAQ Accordion */}
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
                  <span className="font-['Outfit'] text-xs sm:text-sm font-normal text-neutral-100 hover:text-white transition-colors">
                    {item.label}
                  </span>
                ),
                children: (
                  <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-light pt-1">
                    {item.answer}
                  </p>
                ),
                className:
                  'mb-2.5 rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900/60 hover:border-neutral-700/80 transition-all backdrop-blur-sm shadow-md'
              }))}
            />
          </div>

        </div>
      </section>
    </ConfigProvider>
  );
}
