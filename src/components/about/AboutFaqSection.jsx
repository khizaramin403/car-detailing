import React from 'react';
import { Collapse, ConfigProvider, theme } from 'antd';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    key: '1',
    label: 'Who actually shows up at my house?',
    answer:
      'One of us. Usually Reyes, and both of us on bigger jobs. You will have already messaged with whoever arrives, so nobody is turning up unannounced. We are not a company that sends out a rotating crew.'
  },
  {
    key: '2',
    label: 'Are you a franchise or locally owned?',
    answer:
      'Locally owned. Dos Bros is two brothers from Morris and that is the entire company. No franchise, no parent company, no call center somewhere else.'
  },
  {
    key: '3',
    label: 'Do you actually know what you are doing?',
    answer:
      'Fair question and we would ask it too. Mariano worked at a professional detailing shop before we started this, which is where most of our process came from. We both grew up working alongside our dad. And every review on our Google profile is a five star, which you can go check yourself right now.'
  },
  {
    key: '4',
    label: 'Is it really just the two of you?',
    answer:
      'Yes. That is a limitation on how many vehicles we can do in a week, and it is the reason we book out. It is also why the work is consistent. Same two people, same standards, every single time.'
  },
  {
    key: '5',
    label: 'What if I am not happy with something?',
    answer:
      'Tell us before we leave. We walk around the vehicle with you at the end for exactly this reason. If something got missed, we fix it right there. We would much rather spend another twenty minutes than have you drive around unhappy with our name on it.'
  }
];

export default function AboutFaqSection() {
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
              Questions People Ask <br className="hidden sm:inline" />
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                Before They Book
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light pt-1">
              Honest answers about who we are, our standards, and how we operate in Morris and Stevens County.
            </p>
          </div>

          {/* Ant Design Collapse FAQ Accordion (Matching Home Page Style) */}
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
