import React from 'react';
import { 
  CalendarOutlined, 
  PhoneOutlined 
} from '@ant-design/icons';
import { 
  Sparkles, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section id="final-cta" className="relative bg-neutral-950 py-20 sm:py-24 lg:py-28 overflow-hidden select-none">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-red-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Final CTA Card (Centered Layout: Heading Top -> Paragraphs Middle -> Buttons Bottom) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center">
          
          {/* Subtle Ambient Glow Accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-red-600/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            
            {/* Top: Badge & Main Heading */}
            <div className="space-y-4">
              {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-semibold text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>SECTION 14: GET A QUOTE</span>
              </div> */}

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit'] uppercase tracking-tight leading-[1.15]">
                Get Your Free Car Detailing <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">
                  Quote in Morris
                </span>
              </h2>
            </div>

            {/* Middle: Description Paragraphs */}
            <div className="space-y-3 text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto">
              <p className="text-white font-medium">
                We are Reyes and Mariano, two brothers from Morris, and we bring the detailing to you.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm lg:text-base">
                Tell us what you drive and where you are. We will send you a straight price with no pressure and no runaround. If your vehicle is rough, that is fine. We have seen worse, and that is the fun part.
              </p>
            </div>

            {/* Bottom: Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
              >
                <CalendarOutlined className="text-base" />
                <span>Get My Free Quote</span>
              </a>

              <a
                href="tel:3202873573"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-neutral-200 uppercase tracking-wider bg-neutral-950 hover:bg-neutral-800 hover:text-white border border-neutral-800 shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <PhoneOutlined className="text-red-500 text-base" />
                <span>Call 320-287-3573</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
