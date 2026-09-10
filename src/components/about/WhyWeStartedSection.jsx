import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import gallery images
import g1 from '../../assets/aboutgallery/1.webp';
import g2 from '../../assets/aboutgallery/2.webp';
import g3 from '../../assets/aboutgallery/3.webp';
import g4 from '../../assets/aboutgallery/4.webp';
import g5 from '../../assets/aboutgallery/5.webp';
import g6 from '../../assets/aboutgallery/6.webp';


const leftImages = [g1, g2, g3].map((img) => (typeof img === 'object' ? img.src : img));
const rightImages = [g4, g5, g6].map((img) => (typeof img === 'object' ? img.src : img));
const allImages = [...leftImages, ...rightImages];

export default function WhyWeStartedSection() {
  const leftSwiperRef = useRef(null);
  const rightSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  return (
    <section id="why-we-started" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-28 overflow-hidden select-none border-t border-neutral-900">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[350px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* ========================================================
            DESKTOP & EXTRA LARGE SCREENS (lg+):
            3-Column Layout with Perfectly Equal Symmetrical Spacing
            (Left 3 Cols | Center 6 Cols | Right 3 Cols = 12 Cols)
            ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 xl:gap-8 items-center">
          
          {/* LEFT COLUMN: Image Slider 1 */}
          <div className="lg:col-span-3 h-[460px] xl:h-[500px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/90 shadow-2xl">
              
              <Swiper
                modules={[Autoplay, Navigation]}
                onBeforeInit={(swiper) => {
                  leftSwiperRef.current = swiper;
                }}
                onSwiper={(swiper) => {
                  leftSwiperRef.current = swiper;
                }}
                navigation={{
                  prevEl: '.why-left-prev',
                  nextEl: '.why-left-next',
                }}
                observer={true}
                observeParents={true}
                resizeObserver={true}
                grabCursor={true}
                allowTouchMove={true}
                speed={500}
                loop={true}
                autoplay={{ delay: 3800, disableOnInteraction: false }}
                className="w-full h-full"
              >
                {leftImages.map((src, i) => (
                  <SwiperSlide key={i} className="w-full h-full relative">
                    <img
                      src={src}
                      alt={`Dos Bros Detailing Work ${i + 1}`}
                      className="w-full h-full object-cover select-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-neutral-950/20 pointer-events-none" />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Left & Right Navigation Buttons */}
              <button
                type="button"
                onClick={() => leftSwiperRef.current?.slidePrev()}
                className="why-left-prev absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-neutral-950/70 hover:bg-neutral-900 border border-neutral-700/80 hover:border-red-500/60 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-md cursor-pointer active:scale-95 select-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 pointer-events-none" />
              </button>

              <button
                type="button"
                onClick={() => leftSwiperRef.current?.slideNext()}
                className="why-left-next absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-neutral-950/70 hover:bg-neutral-900 border border-neutral-700/80 hover:border-red-500/60 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-md cursor-pointer active:scale-95 select-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 pointer-events-none" />
              </button>

            </div>
          </div>

          {/* CENTER COLUMN: Story Content */}
          <div className="lg:col-span-6 text-center flex flex-col items-center justify-center space-y-4 px-3 xl:px-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>WHY WE STARTED</span>
            </div>

            {/* H2 Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Why We Started <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Dos Bros</span>
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light text-center max-w-lg">
              <p className="text-white font-normal">
                We started this because we wanted to build something that was ours.
              </p>

              <p>
                Both of us had an interest in detailing already. Mariano had the shop experience. We had both put in plenty of hours working with our dad. So we figured we would take what we knew, start making our own money, and see how far we could push it.
              </p>

              <p>
                It started small. We detailed our own vehicles first, then friends, then family. Everybody says their car looks great when it is your cousin doing it, so that only proves so much. The real test was going out and finding somebody who did not know us.
              </p>

              <p>
                Our first actual customer came through an ad we ran. Somebody in the area saw it, messaged us, and booked. That was the moment it stopped being a side project. Somebody who had never met us was willing to pay for the work. That changed how we thought about the whole thing.
              </p>

              <p className="text-neutral-200 font-medium pt-1">
                We have been building it up ever since, one vehicle at a time.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Image Slider 2 */}
          <div className="lg:col-span-3 h-[460px] xl:h-[500px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/90 shadow-2xl">
              
              <Swiper
                modules={[Autoplay, Navigation]}
                onBeforeInit={(swiper) => {
                  rightSwiperRef.current = swiper;
                }}
                onSwiper={(swiper) => {
                  rightSwiperRef.current = swiper;
                }}
                navigation={{
                  prevEl: '.why-right-prev',
                  nextEl: '.why-right-next',
                }}
                observer={true}
                observeParents={true}
                resizeObserver={true}
                grabCursor={true}
                allowTouchMove={true}
                speed={500}
                loop={true}
                autoplay={{ delay: 4200, disableOnInteraction: false }}
                className="w-full h-full"
              >
                {rightImages.map((src, i) => (
                  <SwiperSlide key={i} className="w-full h-full relative">
                    <img
                      src={src}
                      alt={`Dos Bros Detailing Work ${i + 6}`}
                      className="w-full h-full object-cover select-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-neutral-950/20 pointer-events-none" />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Left & Right Navigation Buttons */}
              <button
                type="button"
                onClick={() => rightSwiperRef.current?.slidePrev()}
                className="why-right-prev absolute left-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-neutral-950/70 hover:bg-neutral-900 border border-neutral-700/80 hover:border-red-500/60 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-md cursor-pointer active:scale-95 select-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 pointer-events-none" />
              </button>

              <button
                type="button"
                onClick={() => rightSwiperRef.current?.slideNext()}
                className="why-right-next absolute right-3 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-neutral-950/70 hover:bg-neutral-900 border border-neutral-700/80 hover:border-red-500/60 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-md cursor-pointer active:scale-95 select-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 pointer-events-none" />
              </button>

            </div>
          </div>

        </div>

        {/* ========================================================
            SMALL & TABLET SCREENS (< lg):
            Story Content on Top + Single Swiper with Reliable Controls
            ======================================================== */}
        <div className="lg:hidden flex flex-col space-y-8">
          
          {/* Story Content */}
          <div className="text-center flex flex-col items-center space-y-4 max-w-2xl mx-auto px-2">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>WHY WE STARTED</span>
            </div>

            {/* H2 Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Why We Started <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Dos Bros</span>
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light text-center">
              <p className="text-white font-normal">
                We started this because we wanted to build something that was ours.
              </p>

              <p>
                Both of us had an interest in detailing already. Mariano had the shop experience. We had both put in plenty of hours working with our dad. So we figured we would take what we knew, start making our own money, and see how far we could push it.
              </p>

              <p>
                It started small. We detailed our own vehicles first, then friends, then family. Everybody says their car looks great when it is your cousin doing it, so that only proves so much. The real test was going out and finding somebody who did not know us.
              </p>

              <p>
                Our first actual customer came through an ad we ran. Somebody in the area saw it, messaged us, and booked. That was the moment it stopped being a side project. Somebody who had never met us was willing to pay for the work. That changed how we thought about the whole thing.
              </p>

              <p className="text-neutral-200 font-medium">
                We have been building it up ever since, one vehicle at a time.
              </p>
            </div>

          </div>

          {/* Single Clean Responsive Slider on Small Screens */}
          <div className="w-full max-w-md sm:max-w-lg mx-auto pt-2">
            <div className="relative w-full h-70 sm:h-85 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/90 shadow-xl">
              
              <Swiper
                modules={[Autoplay, Navigation]}
                onBeforeInit={(swiper) => {
                  mobileSwiperRef.current = swiper;
                }}
                onSwiper={(swiper) => {
                  mobileSwiperRef.current = swiper;
                }}
                navigation={{
                  prevEl: '.why-mobile-prev',
                  nextEl: '.why-mobile-next',
                }}
                observer={true}
                observeParents={true}
                resizeObserver={true}
                grabCursor={true}
                allowTouchMove={true}
                speed={500}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                className="w-full h-full"
              >
                {allImages.map((src, i) => (
                  <SwiperSlide key={i} className="w-full h-full relative">
                    <img
                      src={src}
                      alt={`Dos Bros Detailing ${i + 1}`}
                      className="w-full h-full object-cover select-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* In-Frame Navigation Buttons with Both Native Selector & Click Fallback */}
              <button
                type="button"
                onClick={() => mobileSwiperRef.current?.slidePrev()}
                className="why-mobile-prev absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-700/80 hover:border-red-500 text-white flex items-center justify-center backdrop-blur-md cursor-pointer active:scale-90 transition-all shadow-lg select-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 pointer-events-none" />
              </button>

              <button
                type="button"
                onClick={() => mobileSwiperRef.current?.slideNext()}
                className="why-mobile-next absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-700/80 hover:border-red-500 text-white flex items-center justify-center backdrop-blur-md cursor-pointer active:scale-90 transition-all shadow-lg select-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 pointer-events-none" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
