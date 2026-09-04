import React from 'react';
import { 
  CalendarOutlined, 
  PhoneOutlined
} from '@ant-design/icons';
import { 
  Wind, 
  Snowflake, 
  Dog, 
  Tractor, 
  Sun, 
  Droplets, 
  ShieldAlert, 
  MapPin
} from 'lucide-react';

// Swiper React Components & Modules for Small Screen Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const conditionCards = [
  {
    id: "01",
    title: "Why does gravel dust get into everything, and can it actually be removed?",
    icon: <Wind className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "Stevens County Gravel",
    content: "Gravel roads throw up a fine dust that behaves more like powder than dirt. It does not sit on top of your seats. It works down into the fabric weave, into the vents, and into every seam in the dash. Vacuuming pulls out maybe half of it, which is why your car looks clean and then looks dusty again two days later. Getting the rest out takes compressed air to blow it loose first, then extraction to pull it out. One of our customers told us her car was dusty and dirty inside from driving gravel roads daily. That is the job we do most often around here."
  },
  {
    id: "02",
    title: "Winter Salt from Highways 28, 59, and 9 Leaves Stains a Vacuum Will Not Lift",
    icon: <Snowflake className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "Highway Salt Damage",
    content: "Minnesota roads get salted for months, not weeks. You track it in on your boots, it soaks into the carpet, then it dries and leaves those white crusty rings behind. The problem is that salt is a mineral, not a stain sitting on the surface. It has bonded with the carpet fibers. A shop vac does nothing to it. Removing it properly needs hot water extraction, which lifts the salt out of the fiber instead of pushing it deeper. Left alone through a few winters, carpet starts looking permanently gray."
  },
  {
    id: "03",
    title: "What causes that smell in a vehicle that hauls dogs and gear?",
    icon: <Dog className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "Moisture & Organic Odor",
    content: "Usually it is not one thing. It is moisture plus organic material plus time. Wet dog, damp gear, a spilled coffee from last February, all sitting in carpet that never fully dries in a Minnesota winter. Bacteria feeds on it and the smell settles into the padding underneath, which is why air fresheners stop working after a day. You have to remove the source, not cover it. That means shampoo and extraction, and sometimes an odor treatment on top. One customer put it well when she said living on dirt roads and traveling with a dog is hard on a vehicle. She was not wrong."
  },
  {
    id: "04",
    title: "Harvest Dust Settles Into Vents and Fabric Where You Can Not Reach It",
    icon: <Tractor className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "Agricultural Fall Dust",
    content: "Come fall, the air around Morris carries a different kind of dust. Finer, drier, and it gets everywhere. It packs into the vent louvers and the seams around your center console. You can wipe your dash every week and still get a puff of dust out of the vents when you turn the heat on in November. Cleaning that properly means getting into the vents themselves with the right tools, not just wiping what you can see."
  },
  {
    id: "05",
    title: "Does prairie sun actually damage a dashboard or seats?",
    icon: <Sun className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "Unobstructed UV Exposure",
    content: "It does, and it is slower than people expect, which is what makes it sneaky. Out here there is no tree cover to speak of. Vehicles parked at a farm site or a work lot take full sun all day, every day, through the summer. UV dries the oils out of vinyl and leather, and once material starts drying it cracks. Cracking is permanent. You cannot undo it, you can only prevent it. Conditioning treated surfaces during a detail is what slows it down. In our experience, this is the damage customers regret not getting ahead of."
  },
  {
    id: "06",
    title: "Spring Thaw and Township Roads Put Mud Where Washing Alone Will Not Touch",
    icon: <Droplets className="w-5 h-5 text-[#fb2c36]" strokeWidth={2.2} />,
    tag: "Thaw Mud & Seams",
    content: "Thaw season turns township roads into something between a road and a riverbed. That mud does not just coat the outside. It gets under your mats, into the seams where carpet meets the door sill, and into the wheel wells and undercarriage. The outside comes clean with a wash. The stuff underneath your mats sits there holding moisture against the carpet for weeks, and that is where the smell starts. It is more complicated than it sounds."
  }
];

const costTableData = [
  {
    factor: "Winter road salt",
    whatItDoes: "Tracked in, dries into carpet",
    effect: "White staining, fiber damage",
    impact: "Interior looks years older than it is"
  },
  {
    factor: "Gravel and field dust",
    whatItDoes: "Settles into vents, fabric, seams",
    effect: "Ground-in grit, dull surfaces",
    impact: "Harder to remove each season it sits"
  },
  {
    factor: "Pet hair",
    whatItDoes: "Weaves into upholstery",
    effect: "Embedded, resists vacuuming",
    impact: "Gets noticed on every trade-in"
  },
  {
    factor: "Prairie sun",
    whatItDoes: "UV on dash, seats, and trim",
    effect: "Fading, drying, cracking",
    impact: "Permanent once it starts"
  },
  {
    factor: "Spring thaw mud",
    whatItDoes: "Under mats and in seams",
    effect: "Moisture held against carpet",
    impact: "Odor and staining that spreads"
  }
];

// Reusable Condition Card Component
function ConditionCard({ card }) {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[320px] group relative rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800/80 hover:border-red-500/40 p-6 sm:p-7 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-600/10 backdrop-blur-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-[#fb2c36]/40 transition-colors">
            {card.icon}
          </div>
          <span className="text-[11px] font-semibold text-neutral-400 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800">
            {card.tag}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] mb-3 group-hover:text-red-400 transition-colors leading-snug">
          {card.title}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
          {card.content}
        </p>
      </div>

      <div className="pt-4 mt-5 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-400">
        <span className="text-neutral-500">Case #{card.id}</span>
        <span className="text-[#fb2c36] font-bold">Morris Condition</span>
      </div>
    </div>
  );
}

// Reusable Cost Matrix Card Component for Small Screens
function CostCard({ row }) {
  return (
    <div className="w-full h-full min-h-[220px] rounded-2xl p-5 sm:p-6 border border-neutral-800 bg-neutral-900/80 backdrop-blur-md flex flex-col justify-between shadow-lg hover:border-red-500/30 transition-all">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
            {row.factor}
          </h4>
          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-red-500/10 text-red-400 border border-red-500/20">
            Cost Factor
          </span>
        </div>

        <div className="space-y-2.5 text-xs">
          <div>
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-0.5">
              What it does:
            </span>
            <p className="text-neutral-300 leading-relaxed">{row.whatItDoes}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-0.5">
              Effect on vehicle:
            </span>
            <span className="inline-block px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-200 font-medium">
              {row.effect}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 mt-3 border-t border-neutral-800/80">
        <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-0.5">
          Impact over time:
        </span>
        <p className="text-xs sm:text-sm text-red-400 font-semibold">{row.impact}</p>
      </div>
    </div>
  );
}

export default function WhyDifferentSection() {
  return (
    <section id="why-different" className="relative bg-neutral-950 py-20 sm:py-24 lg:py-28 select-none border-b border-neutral-800/80">
      
      {/* Background Ambient Glow Accents (isolated in overflow-hidden so sticky column is never broken) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-red-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* 1. Main Sticky 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20 sm:mb-24">
          
          {/* Left Sticky Column (Pinned on Desktop while scrolling through cards) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>LOCAL CONDITIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Why vehicles around Morris <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
                get dirty differently
              </span>
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              <p>
                Morris sits in Stevens County, surrounded by some of the richest farmland in the country. Three highways run through town. Most of what is around us is gravel. That combination does specific things to a vehicle, and it is not the same as what happens to a car in the Twin Cities.
              </p>
              <p className="text-neutral-300 font-medium">
                We are not guessing about this. Our own customers wrote it for us before we ever put it on a website.
              </p>
            </div>

            {/* Quick Stat Pill */}
            <div className="p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800/80 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-xs text-neutral-300 font-medium leading-snug">
                Stevens County gravel, Highway 28/59/9 road salt, and prairie UV demand specialized extraction methods.
              </p>
            </div>
          </div>

          {/* Right Column: Desktop Vertical Scroll + Mobile Swiper Carousel */}
          <div className="lg:col-span-7">
            
            {/* Desktop / Large Screen: Smooth Vertical Scroll List */}
            <div className="hidden lg:block space-y-6">
              {conditionCards.map((card, idx) => (
                <ConditionCard key={idx} card={card} />
              ))}
            </div>

            {/* Mobile / Small Screen: Swiper.js Carousel */}
            <div className="block lg:hidden">
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
                  el: '.why-different-pagination',
                  bulletClass: 'services-bullet',
                  bulletActiveClass: 'services-bullet-active',
                }}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                }}
                className="!pb-0"
              >
                {conditionCards.map((card, idx) => (
                  <SwiperSlide key={idx} className="!h-auto flex">
                    <ConditionCard card={card} />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* External Custom Pagination Dots Container */}
              <div className="why-different-pagination flex items-center justify-center gap-2 mt-6" />
            </div>

          </div>

        </div>

        {/* 2. H3 Section: What Morris Conditions Actually Cost You */}
        <div className="mb-20 sm:mb-24 pt-8 border-t border-neutral-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit'] uppercase tracking-tight">
              What Morris Conditions <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">Actually Cost You</span>
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto">
              None of this happens overnight. That is exactly the problem. It happens slowly enough that you stop noticing, and then one day you go to trade the vehicle in and it looks ten years old inside.
            </p>
          </div>

          {/* Table on Desktop & Tablet */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-md shadow-2xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/90 text-[11px] font-extrabold uppercase tracking-wider text-neutral-400">
                  <th className="py-4 px-6 w-1/4">Local factor</th>
                  <th className="py-4 px-6 w-1/4">What it does</th>
                  <th className="py-4 px-6 w-1/4">Effect on the vehicle</th>
                  <th className="py-4 px-6 w-1/4">Impact over time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {costTableData.map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-white">
                      <span className="font-['Outfit'] text-sm sm:text-base font-bold text-white block">
                        {row.factor}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-neutral-300">
                      {row.whatItDoes}
                    </td>
                    <td className="py-4 px-6 text-neutral-200 font-medium">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-neutral-900/80 border border-neutral-800/80 text-neutral-300">
                        {row.effect}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-red-400 font-semibold">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Small / Mobile Screen: Swiper.js Carousel (< 768px) */}
          <div className="block md:hidden">
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
                el: '.cost-matrix-pagination',
                bulletClass: 'services-bullet',
                bulletActiveClass: 'services-bullet-active',
              }}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
              }}
              className="!pb-0"
            >
              {costTableData.map((row, i) => (
                <SwiperSlide key={i} className="!h-auto flex">
                  <CostCard row={row} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Swiper Custom Pagination Dots Container */}
            <div className="cost-matrix-pagination flex items-center justify-center gap-2 mt-6" />
          </div>
        </div>

        {/* 3. Detailing Is Maintenance, Not a Luxury Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400">
                <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
                <span>Value Protection</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] leading-tight">
                Detailing is maintenance, not a luxury
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                <p>
                  Here is the thing though. Most people think of detailing as making a car look nice. Looking nice is the visible part. The part that matters is what you are preventing.
                </p>
                <p>
                  Conditioning your dash stops it cracking. Pulling salt out of carpet stops the fibers breaking down. Waxing paint stops oxidation. None of that shows up as a dramatic before and after photo. It shows up years later, when you go to sell.
                </p>
                <p className="text-neutral-200 font-medium pt-0.5">
                  And that is real money. A clean interior is the first thing a dealer looks at on a trade-in, and it is the first thing a private buyer notices when they open the door. That is one of the smarter things you can do with 245 dollars.
                </p>
              </div>
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
