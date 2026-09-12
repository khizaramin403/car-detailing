import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Phone, 
  ArrowUpRight, 
  AlertCircle
} from 'lucide-react';

export default function LegalContentSection({
  badge = "LEGAL DOCUMENT",
  title,
  subtitle,
  lastUpdated = "September 2026",
  sections = []
}) {
  return (
    <section className="relative bg-neutral-950 py-12 sm:py-16 lg:py-20 border-t border-neutral-900 overflow-hidden select-none">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Block (Matching Site's Refined Aesthetic) */}
        <div className="border-b border-neutral-900 pb-8 sm:pb-10 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] sm:text-[11px] font-semibold text-neutral-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="tracking-wide uppercase">{badge}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-['Outfit'] tracking-tight mb-3 leading-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-5">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
            <span className="text-neutral-700">•</span>
            <span>Dos Bros Auto Detailing</span>
            <span className="text-neutral-700">•</span>
            <span>Morris, Minnesota</span>
          </div>
        </div>

        {/* Minimalist Inline Table of Contents */}
        {sections.length > 0 && (
          <div className="mb-12 pb-6 border-b border-neutral-900">
            <span className="text-[10px] uppercase font-semibold text-neutral-500 tracking-wider mb-3 block">
              Contents &amp; Jump Links
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              {sections.map((section, idx) => (
                <a
                  key={section.id || idx}
                  href={`#${section.id}`}
                  className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group py-0.5"
                >
                  <span className="text-red-500/80 font-mono text-[10px]">{String(idx + 1).padStart(2, '0')}.</span>
                  <span className="group-hover:underline underline-offset-4">{section.navTitle || section.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Legal Sections (Clean Paragraphs & Bullets - No Excessive Heavy Card Boxes) */}
        <div className="space-y-12 sm:space-y-14">
          {sections.map((section, idx) => (
            <div 
              key={section.id || idx} 
              id={section.id} 
              className="scroll-mt-24 pb-10 sm:pb-12 border-b border-neutral-900/80 last:border-b-0 space-y-4"
            >
              {/* Section Header */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-red-500 font-semibold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] tracking-tight">
                  {section.title}
                </h2>
              </div>

              {/* Section Content: Flowing Text and Lists */}
              <div className="text-sm sm:text-[15px] text-neutral-300 leading-relaxed space-y-3.5 font-light">
                {section.content}
              </div>

              {/* Occasional Subtle Callout (Only when important note is present) */}
              {section.callout && (
                <div className="mt-5 p-4 rounded-xl bg-neutral-900/60 border-l-2 border-l-red-500 border-y border-r border-neutral-800/80 flex items-start gap-3 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium mb-0.5">{section.callout.title}</strong>
                    <span className="text-neutral-400 leading-relaxed font-light">{section.callout.text}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Minimalist Bottom Contact Box */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs text-red-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Transparent Service Guarantee</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                Have questions regarding these terms or your vehicle?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Reyes and Mariano are always available to discuss custom detailing requirements or clarify any service policies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="tel:3202873573"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>(320) 287-3573</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-semibold text-white shadow-lg shadow-red-950/50 hover:shadow-red-900/40 transition-all"
              >
                <span>Book Mobile Detail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
