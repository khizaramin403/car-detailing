import React from 'react';
import { Collapse, ConfigProvider, theme } from 'antd';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    key: '1',
    label: 'Do you actually come to me?',
    children: (
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
        Yes. That is the whole business. We bring everything to your driveway, your workplace, or your farm site, anywhere in our service area. Your vehicle never has to leave home.
      </p>
    )
  },
  {
    key: '2',
    label: 'Do you need my water and power?',
    children: (
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
        Yes, we need access to an outdoor water spigot and a standard power outlet. We bring all the equipment, products, and tools ourselves. Most homes, shops, and business lots already have what we need. If you are unsure, just ask before booking and we will sort it out.
      </p>
    )
  },
  {
    key: '3',
    label: 'How long does a full detail take?',
    children: (
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
        An Express Full Detail runs about 3 to 4.5 hours. An Executive Full Detail runs 5 to 7 hours. Interior only is 2 to 5 hours depending on the package and condition. Larger vehicles take longer. We give you a realistic window when we quote.
      </p>
    )
  },
  {
    key: '4',
    label: 'How often should I get my vehicle detailed?',
    children: (
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
        For most vehicles around here, a full detail once or twice a year works well, with lighter Express services in between. If you drive gravel daily, haul pets, or park outside year-round, twice a year is closer to right. Every vehicle is different.
      </p>
    )
  },
  {
    key: '5',
    label: 'What happens if it rains?',
    children: (
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
        We keep an eye on the forecast and reach out ahead of time if it looks bad. If weather rolls in mid-job, we reschedule the outside work at no extra charge. If you have a garage or a covered shop area, even better, we can usually work right through it.
      </p>
    )
  },
  {
    key: '6',
    label: 'Do I need to be home?',
    children: (
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
        Not at all. Plenty of our customers leave for work and come back to a finished vehicle. We just need access to the vehicle, water, and power. One of our customers said coming home to a truck that was dialed in was priceless, and honestly that is our favorite kind of job.
      </p>
    )
  },
  {
    key: '7',
    label: 'Can you get pet hair and smells out?',
    children: (
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
        Usually, yes. Pet hair takes specialized tools and patience because it works into the fabric weave rather than sitting on top. Odor is different because you have to remove the source, not mask it, which means shampoo and extraction and sometimes an odor treatment. Heavy cases can take extra time, and we will tell you upfront if yours is one.
      </p>
    )
  },
  {
    key: '8',
    label: 'Does detailing help what I get on a trade-in?',
    children: (
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
        It does. Interior condition is one of the first things a dealer or a private buyer looks at, and a clean, conditioned interior reads as a well-maintained vehicle. Customers detail before selling all the time. It is one of the better returns you can get on a few hundred dollars.
      </p>
    )
  },
  {
    key: '9',
    label: 'What is the difference between a detail and a car wash?',
    children: (
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
        A car wash cleans the outside surface and it lasts a few days. A detail cleans, restores, and protects the inside and the outside, right down to the vents, the seams, and the carpet fibers. Results last months, not days. Think of a car wash as upkeep and detailing as maintenance.
      </p>
    )
  },
  {
    key: '10',
    label: 'Do I tip?',
    children: (
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
        No, and please do not feel awkward about it. We own the business and we price the job properly, so tips are never expected. If you want to do something for us, leave an honest Google review or mention us to a neighbor. That helps more than anything.
      </p>
    )
  }
];

export default function FaqSection() {
  const midIndex = Math.ceil(faqItems.length / 2);
  const leftItems = faqItems.slice(0, midIndex);
  const rightItems = faqItems.slice(midIndex);

  const renderExpandIcon = ({ isActive }) => (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
      isActive 
        ? 'bg-red-500/20 border-red-500/50 text-[#fb2c36] rotate-180' 
        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
    }`}>
      <ChevronDown className="w-4 h-4" />
    </div>
  );

  const formatItem = (item) => ({
    key: item.key,
    label: (
      <span className="font-['Outfit'] text-sm sm:text-base font-semibold text-neutral-100 hover:text-white transition-colors">
        {item.label}
      </span>
    ),
    children: item.children,
    className: "mb-3 rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900/60 hover:border-neutral-700/80 transition-all backdrop-blur-sm shadow-md"
  });

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgContainer: '#171717',
          colorBorder: '#262626',
          colorPrimary: '#fb2c36',
          fontFamily: 'Inter, sans-serif',
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
      <section id="faq" className="relative bg-neutral-950 py-20 sm:py-24 lg:py-28 overflow-hidden select-none border-b border-neutral-800/80">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-87.5 bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-112.5 h-75 bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>FAQ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Questions people <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-amber-500">
                ask us
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal pt-1">
              Everything you need to know about our mobile detailing process in Morris and Stevens County.
            </p>
          </div>

          {/* Ant Design Collapse FAQ Accordion in 2 Responsive Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-14 sm:mb-16">
            <div className="custom-faq-wrapper">
              <Collapse
                accordion
                bordered={false}
                expandIconPosition="end"
                expandIcon={renderExpandIcon}
                items={leftItems.map(formatItem)}
              />
            </div>
            <div className="custom-faq-wrapper">
              <Collapse
                accordion
                bordered={false}
                expandIconPosition="end"
                expandIcon={renderExpandIcon}
                items={rightItems.map(formatItem)}
              />
            </div>
          </div>

          

        </div>
      </section>
    </ConfigProvider>
  );
}
