import React from 'react';
import { 
  CalendarOutlined, 
  PhoneOutlined 
} from '@ant-design/icons';

export default function AboutCtaBanner() {
  return (
    <section id="cta" className="relative bg-neutral-950 py-12 sm:py-16 lg:py-20 border-t border-neutral-800 select-none overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Minimal Consultation Banner Card matching Cost Calculator CTA */}
        <div className="relative rounded-3xl bg-linear-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          
          {/* Ambient red glow on the right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 sm:w-1/3 bg-linear-to-l from-red-600/15 to-transparent pointer-events-none" />
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-red-600/15 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center gap-6 sm:gap-8">
            
            {/* Center Content */}
            <div className="max-w-2xl space-y-3 mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-['Outfit'] leading-tight">
                Ready to Get Started?
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                We are Reyes and Mariano, two brothers from Morris, and we bring the detailing to you. Tell us what you drive and where you are, and we will send you a straight price. No pressure, no runaround.
              </p>
            </div>

            {/* Buttons Below: [Get My Free Quote] or call 320-287-3573 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-600/20 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
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
