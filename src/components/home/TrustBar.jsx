import React from 'react';
import { StarFilled } from '@ant-design/icons';
import { Car, Users, BookOpen } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: (
        <div className="flex items-center justify-center text-[#fb2c36] text-xl">
          <StarFilled />
        </div>
      ),
      title: "5.0 on Google",
      subtitle: "Verified 5-Star Reviews"
    },
    {
      icon: (
        <div className="flex items-center justify-center text-[#fb2c36]">
          <Car className="w-6 h-6" color="#fb2c36" strokeWidth={2.2} />
        </div>
      ),
      title: "We come to you",
      subtitle: "100% Mobile Detailing"
    },
    {
      icon: (
        <div className="flex items-center justify-center text-[#fb2c36]">
          <Users className="w-6 h-6" color="#fb2c36" strokeWidth={2.2} />
        </div>
      ),
      title: "Two brothers, locally owned",
      subtitle: "Morris, MN Community"
    },
    {
      icon: (
        <div className="flex items-center justify-center text-[#fb2c36]">
          <BookOpen className="w-6 h-6" color="#fb2c36" strokeWidth={2.2} />
        </div>
      ),
      title: "Free quotes",
      subtitle: "No Obligation Estimate"
    }
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-2xl backdrop-blur-xl p-2 sm:p-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800/80">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3 sm:p-2 select-none cursor-default"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-neutral-950/80 border border-neutral-800/80 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit'] flex items-center gap-1">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5 font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
