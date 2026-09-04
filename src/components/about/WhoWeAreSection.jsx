import React from 'react';
import dosBrosImg from '../../assets/DosBros.png';
import { 
  Users, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

export default function WhoWeAreSection() {
  const imageSrc = typeof dosBrosImg === 'object' ? dosBrosImg.src : dosBrosImg;

  return (
    <section id="who-we-are" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-28 overflow-hidden select-none border-t border-neutral-900">
      
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[350px] bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[350px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Photo of Reyes and Mariano (Matching Home Page Frame Style) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group w-full max-w-md lg:max-w-none h-full">
              
              {/* Sleek Gradient Ambient Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600/30 via-amber-500/20 to-red-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 group-hover:blur-2xl transition duration-500 pointer-events-none" />

              {/* Main Image Container Card */}
              <div className="relative w-full h-[440px] sm:h-[500px] lg:h-[540px] rounded-3xl bg-neutral-900 border border-neutral-800/90 overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:border-red-500/40 flex flex-col">
                
                {/* Image positioned top so faces are never cropped */}
                <div className="w-full h-full flex-1 overflow-hidden bg-neutral-950 relative">
                  <img
                    src={imageSrc}
                    alt="Reyes and Mariano - Founders of Dos Bros Auto Detailing"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Glassmorphic Caption Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-2xl bg-neutral-950/85 border border-neutral-800/80 backdrop-blur-md flex items-center justify-between shadow-2xl">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <h3 className="font-['Outfit'] text-sm sm:text-base font-bold text-white leading-tight">
                        Reyes & Mariano
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-400 font-medium pt-0.5">
                      Founders & Mobile Detailers
                    </p>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-[10px] sm:text-[11px] font-bold text-red-400 uppercase tracking-wider">
                    Morris, MN
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Story Content */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            
            {/* Section Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>WHO WE ARE</span>
              </div>
            </div>

            {/* H2 Heading: Sleek, Non-Bulky with Theme Gradient Accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white font-['Outfit'] tracking-tight leading-[1.15]">
              Who <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">We Are</span>
            </h2>

            {/* Story Paragraphs: Sleek, Legible & Professional */}
            <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              <p>
                We are Reyes and Mariano. We are brothers, we grew up in Morris, and Dos Bros is ours. That is where the name comes from. Two brothers.
              </p>

              <p>
                Mariano worked at a professional detailing shop before we started this. That is where a lot of what we do came from, the process and the standards and knowing what actually works versus what just looks good for a day. We both spent a lot of time working alongside our dad growing up too. He taught us that if your name is on something, you do it right.
              </p>

              <p>
                These days Reyes handles most of the messages and quotes, so if you reach out, that is who you are talking to. On bigger jobs we work together.
              </p>

              <p className="text-neutral-200 font-normal">
                Morris is a town of about five thousand people. That means we run into our customers everywhere. The grocery store, the gas station, all of it. Honestly, that is the best accountability there is. You cannot rush somebody's truck on Monday and then bump into them on Atlantic Avenue on Tuesday.
              </p>
            </div>

            {/* Local Community Accountability Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-neutral-400">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Morris, MN Local</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300">
                <Users className="w-3.5 h-3.5 text-amber-500" />
                <span>Owner Operated</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                <span>100% Guaranteed</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
