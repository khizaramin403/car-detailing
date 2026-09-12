import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import {
  GoogleOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined
} from '@ant-design/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Full Interior Revival', href: '' },
    { name: 'Exterior Hand Wash & Seal', href: '' },
    { name: 'Multi-Stage Paint Correction', href: '' },
    { name: 'Ceramic & Graphene Coating', href: '' },
    { name: 'Farm & Heavy Duty Equipment', href: '' },
    { name: 'Odor & Pet Hair Removal', href: '' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Our Studio', href: '/about' },
    { name: 'Detailing Services', href: '/#services' },
    { name: 'Pricing & Packages', href: '/prices' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Contact & Booking', href: '/contact' },
  ];

  return (
    <footer className="relative bg-neutral-950 text-neutral-400 border-t border-neutral-900 overflow-hidden select-none">
      {/* Subtle top ambient red gradient hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-red-500/30 to-transparent pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10 pt-12 sm:pt-14 md:pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-5 sm:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-8 xl:gap-10 pb-12 border-b border-neutral-900/90">

          {/* Column 1: Brand Info & Bio */}
          <div className="col-span-2 lg:col-span-4 xl:col-span-4 space-y-4">
            {/* Logo */}
            <a 
              href="/" 
              className="inline-block transition-transform duration-200 hover:opacity-95 focus:outline-none"
              title="Dos Bros Auto Detailing"
            >
              <div className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="Dos Bros Auto Detailing"
                  width="180"
                  height="42"
                  className="h-9 xs:h-10 sm:h-11 w-auto max-w-55 xs:max-w-[260px] object-contain"
                  style={{
                    height: '42px',
                    width: 'auto',
                    maxHeight: '48px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </a>

            {/* Concise Bio */}
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              We bring professional interior and exterior detailing straight to your driveway, your workplace, or your farm site. Serving Morris, Alexandria, Glenwood, Starbuck, Benson, & surrounding towns.
            </p>


            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.google.com/search?q=dos+ros+detailing+morris&sca_esv=35cfe427b01f9ce2&sxsrf=APpeQnubABDyQlUKzeujqubn9MHryYxxZA%3A1789064331965&ei=i_SiauWyOr6Xi-gP5P6GqAo&biw=1366&bih=599&ved=2ahUKEwilpPL_z-SWAxW-ywIHHWS_AaUQ4dUDegQIBhAM&uact=5&oq=dos+ros+detailing+morris&gs_lp=Egxnd3Mtd2l6LXNlcnAiGGRvcyByb3MgZGV0YWlsaW5nIG1vcnJpczIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBDIIEAAYiQUYogQyCBAAGIAEGKIESLwPULMDWIcNcAF4AJABAJgBpwOgAfwOqgEFMy0yLjO4AQPIAQD4AQGYAgagAskPwgIKECMYsAIYsAMYJ8ICDRAAGIAEGIoFGEMYsAPCAgoQABiABBgNGLADwgILEAAYiQUYogQYsAPCAggQABjvBRiwA8ICBxAjGLACGCfCAgcQABiABBgNwgIGEAAYHhgNwgIFECEYnwWYAwDiAwUSATEgQIgGAZAGCJIHBzEuMy0yLjOgB6YcsgcFMy0yLjO4B7sPwgcFMi00LjLIByyACAE&sclient=gws-wiz-serp"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Review and Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-900/80 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800/80 hover:border-red-500 hover:scale-105"
              >
                <GoogleOutlined className="text-sm" />
              </a>
              <a
                href="https://www.facebook.com/DosBrosDetailingMN#"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Dos Bros Detailing on Facebook"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-900/80 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800/80 hover:border-red-500 hover:scale-105"
              >
                <FacebookOutlined className="text-sm" />
              </a>
              <a
                href="https://www.instagram.com/dosbrosmn"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Dos Bros Detailing on Instagram"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-900/80 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800/80 hover:border-red-500 hover:scale-105"
              >
                <InstagramOutlined className="text-sm" />
              </a>
              <a
                href="https://www.tiktok.com/@dosbrosdetailing"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Dos Bros Detailing on TikTok"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-neutral-900/80 hover:bg-red-600/90 text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800/80 hover:border-red-500 hover:scale-105"
              >
                <TikTokOutlined className="text-sm" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Side-by-side with Services on mobile) */}
          <div className="col-span-1 lg:col-span-2 xl:col-span-2 space-y-3 sm:space-y-4">
            <h3 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider font-['Outfit',sans-serif] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
              Explore
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-1 group py-0.5"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Side-by-side with Explore on mobile) */}
          <div className="col-span-1 lg:col-span-3 xl:col-span-3 space-y-3 sm:space-y-4">
            <h3 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider font-['Outfit',sans-serif] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-neutral-200 transition-colors duration-150 inline-flex items-center group py-0.5"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours (Full width below Explore & Services on mobile) */}
          <div className="col-span-2 lg:col-span-3 xl:col-span-3 space-y-3 sm:space-y-4 pt-2 sm:pt-0">
            <h3 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider font-['Outfit',sans-serif] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
              Contact & Hours
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm">
              {/* Phone */}
              <a
                href="tel:3202873573"
                className="group flex items-center gap-2.5 p-2 rounded-lg  text-neutral-300  "
              >
                <div className="w-7 h-7 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 ">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Call or Text</span>
                  <span className="block text-xs sm:text-sm font-semibold text-white tracking-tight">(320) 287-3573</span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-2.5 px-2 py-1 text-neutral-400">
                <div className="w-7 h-7 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="leading-snug">
                  <span className="text-neutral-300 font-medium block">Morris, MN 56267</span>
                  <span className="text-[11px] text-neutral-500">Stevens County & Surrounding Cities</span>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:ordonezreyes75@gmail.com"
                className="group flex items-center gap-2.5 p-2 rounded-lg text-neutral-300 hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">Email Us</span>
                  <span className="block text-xs sm:text-sm font-semibold text-white tracking-tight truncate group-hover:text-red-400 transition-colors">
                    ordonezreyes75@gmail.com
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Action Button */}
            {/* <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white bg-linear-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all shadow-sm shadow-red-950/40 hover:shadow-red-900/50"
              >
                <span>Book Mobile Detail</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div> */}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal / Feedback Links */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center md:text-left">
            <p>© {currentYear} Dos Bros Auto Detailing. All rights reserved.</p>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <span className="text-neutral-400">Morris, Minnesota</span>
          </div>

          {/* Legal & Feedback Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-2 text-xs">
            <a
              href="/terms"
              className="text-neutral-500 hover:text-neutral-300 hover:underline underline-offset-4 transition-colors"
            >
              Terms of Use
            </a>
            <span className="text-neutral-800">•</span>
            <a
              href="/privacy"
              className="text-neutral-500 hover:text-neutral-300 hover:underline underline-offset-4 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-800">•</span>
            <a
              href="/disclaimer"
              className="text-neutral-500 hover:text-neutral-300 hover:underline underline-offset-4 transition-colors"
            >
              Disclaimer
            </a>
            <span className="text-neutral-800">•</span>
            <a
              href="/feedback"
              className="text-neutral-400 hover:text-red-400 hover:underline underline-offset-4 transition-colors font-medium flex items-center gap-1.5"
            >
              <span>Feedback</span>
              {/* <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500/80"></span> */}
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
