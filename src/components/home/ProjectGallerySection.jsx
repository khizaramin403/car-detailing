import React, { useState, useRef, useEffect } from 'react';
import { Modal } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Camera,
  Eye,
  RotateCw,
  ShieldCheck
} from 'lucide-react';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';


// Curated Project Gallery Items from local assets
const projectImages = [
  { id: 1, src: '/gallery/1.webp', title: 'High-Gloss Exterior Finish', category: 'Paint Correction', location: 'Morris, MN' },
  { id: 2, src: '/gallery/2.webp', title: 'Deep Fabric Steam Extraction', category: 'Interior Detail', location: 'Stevens County' },
  { id: 3, src: '/gallery/7.webp', title: 'Mirror Finish Clear Coat', category: 'Ceramic Coating', location: 'Morris, MN' },
  { id: 4, src: '/gallery/10.webp', title: 'Leather Treatment & Conditioning', category: 'Interior Revival', location: 'Hancock, MN' },
  { id: 5, src: '/gallery/15.webp', title: 'Prairie Dust & Road Film Removal', category: 'Exterior Detail', location: 'Chokio, MN' },
  { id: 6, src: '/gallery/19.webp', title: 'Cockpit & Console Restoration', category: 'Deep Clean', location: 'Morris, MN' },
  { id: 7, src: '/gallery/22.webp', title: 'Hydrophobic Glass & Paint Protection', category: 'Paint Protection', location: 'Alberta, MN' },
  { id: 8, src: '/gallery/26.webp', title: 'Pet Hair & Odor Neutralization', category: 'Carpet Extraction', location: 'Donnelly, MN' },
  { id: 9, src: '/gallery/34.webp', title: 'Heavy Farm Truck Mud Cleanup', category: 'Truck Specialist', location: 'Stevens County' },
  { id: 10, src: '/gallery/37.webp', title: 'Door Jambs & Crevice Detailing', category: 'Interior Detail', location: 'Morris, MN' },
  { id: 11, src: '/gallery/45.webp', title: 'Swirl Mark & Scratch Correction', category: '2-Step Polish', location: 'Cyrus, MN' },
  { id: 12, src: '/gallery/58.webp', title: 'Showroom Gloss Restoration', category: 'Full Detail Package', location: 'Morris, MN' },
  { id: 13, src: '/gallery/60.webp', title: 'Wheel Arch & Rim Decontamination', category: 'Wheels & Tires', location: 'Morris, MN' },
  { id: 14, src: '/gallery/63.webp', title: 'SUV Multi-Row Family Reset', category: 'Interior & Exterior', location: 'Glenwood, MN' }
];

export default function ProjectGallerySection() {
  const [activeViewerImage, setActiveViewerImage] = useState(null);

  const handlePrevImage = () => {
    if (!activeViewerImage) return;
    const currentIndex = projectImages.findIndex((img) => img.id === activeViewerImage.id);
    const prevIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
    setActiveViewerImage(projectImages[prevIndex]);
  };

  const handleNextImage = () => {
    if (!activeViewerImage) return;
    const currentIndex = projectImages.findIndex((img) => img.id === activeViewerImage.id);
    const nextIndex = (currentIndex + 1) % projectImages.length;
    setActiveViewerImage(projectImages[nextIndex]);
  };

  // Keyboard navigation for gallery modal
  useEffect(() => {
    if (!activeViewerImage) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'Escape') {
        setActiveViewerImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeViewerImage]);

  return (
    <section id="gallery" className="relative bg-neutral-950 py-18 sm:py-22 lg:py-26 border-b border-neutral-800/80 overflow-hidden select-none">

      {/* Background Subtle Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      {/* ========================================================================= */}
      {/* Section Header (Minimal, Clean Title Case matching Section 8)             */}
      {/* ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>PROJECT GALLERY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            Our detailing work in <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Morris and surrounding areas
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed pt-0.5 max-w-2xl mx-auto">
            Real vehicles from local driveways, farm properties, and town streets around Stevens County. Swipe through our recent transformations.
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3D Panorama Full-Bleed Curved Cylinder Slider (End to end, zero side gaps) */}
      {/* ========================================================================= */}
      <div className="relative w-full z-10 mb-4 sm:mb-6 overflow-hidden">
        <div className="relative group/carousel w-full overflow-hidden" style={{ contain: 'paint' }}>

          {/* Left / Right Minimal Floating Arrows */}
          <button
            type="button"
            aria-label="Previous slide"
            className="gallery-prev-btn absolute left-2 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-800 hover:border-red-500/50 shadow-xl backdrop-blur-md flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            className="gallery-next-btn absolute right-2 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-800 hover:border-red-500/50 shadow-xl backdrop-blur-md flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Swiper Panorama 3D Coverflow Container */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            roundLengths={true}
            autoHeight={false}
            speed={600}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 16,       // Sleek 3D inward angle
              stretch: 0,
              depth: 80,        // Tight panoramic depth
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              el: '.gallery-panorama-pagination',
              bulletClass: 'panorama-bullet',
              bulletActiveClass: 'panorama-bullet-active',
            }}
            navigation={{
              prevEl: '.gallery-prev-btn',
              nextEl: '.gallery-next-btn',
            }}
            slidesPerView="auto"
            spaceBetween={14}
            breakpoints={{
              640: {
                spaceBetween: 18,
              },
              1024: {
                spaceBetween: 22,
              },
            }}
            className="panorama-swiper-container w-full !py-2 sm:!py-3"
          >
            {projectImages.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[180px] xs:!w-[200px] sm:!w-[215px] md:!w-[225px] lg:!w-[235px] !h-full flex items-center justify-center shrink-0"
              >
                <div
                  onClick={() => setActiveViewerImage(item)}
                  className="group relative w-full h-full max-h-[240px] xs:max-h-[265px] sm:max-h-[285px] md:max-h-[300px] lg:max-h-[315px] aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900 shadow-xl transition-all duration-300 hover:border-red-500/60 hover:shadow-red-600/10 cursor-pointer"
                >
                  {/* Vehicle Image */}
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay & Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-end z-10">
                    {/* <span className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 text-neutral-300">
                      {item.category}
                    </span> */}
                    <div className="w-6 h-6 rounded-full bg-neutral-950/80 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-red-400 group-hover:border-red-500/50 transition-colors">
                      <Eye className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Bottom Text & Location */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-3.5 z-10 space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-bold text-white font-['Outfit'] leading-tight line-clamp-1 group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between text-[10px] text-neutral-400">
                      <span>{item.location}</span>
                      <span className="text-[9px] font-medium text-red-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-2.5 h-2.5" />
                        <span>Preview</span>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Pagination Dots (Matching Sample) */}
          <div className="gallery-panorama-pagination flex items-center justify-center gap-1.5 sm:gap-2 h-6 mt-3 sm:mt-4" />
        </div>
      </div>

      {/* Quick Footer Note */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center pt-1">
        <p className="text-xs text-neutral-500 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Click any vehicle card to view high-resolution detailing photo</span>
        </p>
      </div>

      {/* ========================================================================= */}
      {/* Ant Design Responsive Modal for Panorama Preview                         */}
      {/* ========================================================================= */}
      <Modal
        open={!!activeViewerImage}
        onCancel={() => setActiveViewerImage(null)}
        footer={null}
        centered
        destroyOnClose
        width="96%"
        style={{
          maxWidth: '1120px',
          width: '96%',
          margin: '0 auto',
          padding: 0,
        }}
        styles={{
          container: {
            backgroundColor: '#0a0a0a',
            border: '1px solid rgba(38, 38, 38, 0.8)',
            borderRadius: '16px',
            padding: 0,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            overflow: 'hidden',
          },
          content: {
            backgroundColor: '#0a0a0a',
            border: '1px solid rgba(38, 38, 38, 0.8)',
            borderRadius: '16px',
            padding: 0,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            overflow: 'hidden',
          },
          body: {
            backgroundColor: 'transparent',
            padding: 0,
          },
          mask: {
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
          }
        }}
        closeIcon={<X className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 hover:text-red-400 transition-colors" />}
      >
        {activeViewerImage && (
          <div className="w-full flex flex-col space-y-2.5 sm:space-y-3 p-3 sm:p-5 max-h-[calc(100dvh-28px)] sm:max-h-[calc(100dvh-44px)] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pr-7 sm:pr-9 border-b border-neutral-800/80 pb-2.5 sm:pb-3">
              <div className="space-y-0.5 min-w-0 pr-2">
                <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-red-500 block">
                  {activeViewerImage.category}
                </span>
                <h3 className="text-sm sm:text-base md:text-xl font-bold font-['Outfit'] text-white truncate">
                  {activeViewerImage.title}
                </h3>
              </div>
            </div>

            {/* High-Resolution Vehicle Detailing Image Preview Container */}
            <div className="w-full h-[48vh] min-h-[240px] max-h-[380px] xs:h-[54vh] xs:min-h-[270px] sm:h-[60vh] sm:max-h-[520px] md:h-[68vh] md:max-h-[620px] rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-950/90 shadow-2xl relative flex items-center justify-center p-2 sm:p-4">
              {/* Previous Image Navigation Arrow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                aria-label="Previous image"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-800 hover:border-red-500/50 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Vehicle Detailing Photo */}
              <img
                key={activeViewerImage.src}
                src={activeViewerImage.src}
                alt={activeViewerImage.title}
                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg sm:rounded-xl shadow-2xl select-none"
              />

              {/* Next Image Navigation Arrow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                aria-label="Next image"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-800 hover:border-red-500/50 text-neutral-300 hover:text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-lg"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Modal Footer Info */}
            <div className="flex items-center justify-between flex-wrap gap-2 text-[11px] sm:text-xs text-neutral-400 pt-0.5 sm:pt-1">
              <span className="truncate">
                Location: <strong className="text-neutral-300 font-medium">{activeViewerImage.location}</strong>
              </span>
              <button
                type="button"
                onClick={() => setActiveViewerImage(null)}
                className="text-neutral-400 hover:text-white underline text-[11px] sm:text-xs cursor-pointer ml-auto"
              >
                Back to Gallery
              </button>
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
}
