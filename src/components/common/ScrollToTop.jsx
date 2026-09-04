import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

      // Show button after scrolling down 150px
      if (scrollTop > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Re-calculate on Astro page transitions
    document.addEventListener('astro:page-load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('astro:page-load', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Scroll back to top"
        className="w-11 h-11 rounded-full bg-neutral-950/90 hover:bg-neutral-900 border border-neutral-800 hover:border-red-500/50 shadow-xl backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none"
      >
        <ArrowUp className="w-4 h-4 text-neutral-400 group-hover:text-red-500 group-hover:-translate-y-0.5 transition-all duration-200" />
      </button>
    </div>
  );
}
