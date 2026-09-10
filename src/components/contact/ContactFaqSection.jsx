import React from 'react';
import { Collapse, ConfigProvider, theme } from 'antd';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    key: '1',
    label: 'How fast will you get back to me?',
    answer:
      'Usually the same day. If we are mid-job it might be a few hours, but we answer everything. If you have not heard from us by the next morning, something went wrong on our end so please try again or just call.'
  },
  {
    key: '2',
    label: 'Do I have to book right away?',
    answer:
      'No. A quote is a quote. Plenty of people ask for a price, think about it, and come back weeks later. We will not chase you and we will not add you to any list.'
  },
  {
    key: '3',
    label: 'Can I ask a question without getting a quote?',
    answer:
      'Of course. Text or message us. If you want to know whether we can get a specific stain out or whether we handle a certain vehicle, just ask. We would rather answer honestly than have you book something that is not right.'
  },
  {
    key: '4',
    label: 'How far ahead do I need to book?',
    answer:
      'It depends on the season. Spring after thaw is our busiest stretch and we book out further then. Winter is usually easier to get a spot. Either way, ask and we will tell you the real next available day.'
  }
];

export default function ContactFaqSection() {
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
      <section id="faq" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-28 overflow-hidden select-none border-t border-neutral-900">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-87.5 bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-112.5 h-75 bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Before You{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-amber-500">
                Get in Touch
              </span>
            </h2>

            <div className="w-8 h-0.5 bg-linear-to-r from-red-500 to-amber-500 rounded-full mx-auto" />
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
