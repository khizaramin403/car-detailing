import React, { useState, useEffect } from 'react';
import { Drawer, ConfigProvider, theme } from 'antd';
import {
  AlignRightOutlined,
  CloseOutlined,
  PhoneOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // { name: 'Services', href: '/services' },
  { name: 'Cost Calculator', href: '/prices' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const [drawerKey, setDrawerKey] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateState = () => {
        setCurrentPath(window.location.pathname);
        setMobileMenuOpen(false);
        setDrawerKey((prev) => prev + 1);
      };

      const handleBeforeSwap = () => {
        setMobileMenuOpen(false);
      };

      // Set initial path & check initial scroll
      updateState();
      setIsScrolled(window.scrollY > 20);

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setMobileMenuOpen(false);
        }
      };

      // Astro ClientRouter page lifecycle listeners (fires on client navigation)
      document.addEventListener('astro:before-swap', handleBeforeSwap);
      document.addEventListener('astro:page-load', updateState);
      window.addEventListener('popstate', updateState);
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize);

      return () => {
        document.removeEventListener('astro:before-swap', handleBeforeSwap);
        document.removeEventListener('astro:page-load', updateState);
        window.removeEventListener('popstate', updateState);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const isActive = (path) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href === currentPath || (href === '/' && (currentPath === '/' || currentPath === ''))) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification / Info Bar */}
      <div className="bg-neutral-950 text-neutral-400 text-xs border-b border-neutral-800/80 px-4 py-2 hidden md:block select-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <EnvironmentOutlined className="text-red-500" />
              <span>Mobile Detailing & Studio Workshop Available</span>
            </span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <ThunderboltOutlined className="text-amber-400" />
              <span>Certified Ceramic Pro & Paint Correction Specialists</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:+15558392849"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-red-400 transition-colors font-medium"
            >
              <PhoneOutlined className="text-red-500" />
              <span>+1 (555) 839-2849</span>
            </a>
            <span className="text-neutral-700">|</span>
            <span className="text-emerald-400 font-medium">Mon - Sat: 8:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Stable Height */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 py-1.5 sm:py-2 ${isScrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl'
          : 'bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-900'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Brand Logo */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="group flex items-center shrink-0 focus:outline-none cursor-pointer py-0.5"
              title="Dos Bros Auto Detailing"
            >
              <div className="relative flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Dos Bros Auto Detailing"
                  width="180"
                  height="42"
                  className="h-10.5 sm:h-12 md:h-13 w-auto max-w-60 sm:max-w-72.5 object-contain block transition-transform duration-200"
                  style={{
                    height: '42px',
                    width: 'auto',
                    maxHeight: '46px',
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${active
                      ? 'text-white font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900/60'
                      }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-linear-to-r from-red-500 to-amber-500 rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA & Booking Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 p-2.5 rounded-xl text-[12px] font-semibold text-white bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/30"
              >
                <CalendarOutlined />
                <span>Book Appointment</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2.5 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-900/60 transition-colors focus:outline-none cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <AlignRightOutlined className="text-lg" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer (Ant Design Drawer) */}
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorBgElevated: '#0a0a0a',
            colorText: '#f5f5f5',
            colorLink: '#f87171',
            colorLinkHover: '#ffffff',
            colorLinkActive: '#f87171',
          },
        }}
      >
        <Drawer
          key={drawerKey}
          placement="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          destroyOnClose
          getContainer={() => document.body}
          width="82%"
          style={{ maxWidth: '340px' }}
          closeIcon={null}
          title={
            <div className="flex items-center justify-between w-full">
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="flex items-center focus:outline-none cursor-pointer"
                title="Dos Bros Auto Detailing"
              >
                <img
                  src="/logo.png"
                  alt="Dos Bros Auto Detailing"
                  width="163"
                  height="38"
                  style={{
                    height: '38px',
                    width: 'auto',
                    maxHeight: '42px',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-xl text-neutral-400 hover:text-red-400 hover:bg-neutral-900 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <CloseOutlined className="text-base" />
              </button>
            </div>
          }
          styles={{
            wrapper: {
              maxWidth: '340px',
              width: '82%',
            },
            content: {
              backgroundColor: '#0a0a0a',
              borderLeft: '1px solid rgba(38, 38, 38, 0.8)',
            },
            header: {
              backgroundColor: '#0a0a0a',
              borderBottom: '1px solid rgba(38, 38, 38, 0.8)',
              padding: '14px 16px',
            },
            body: {
              backgroundColor: '#0a0a0a',
              padding: '16px',
            },
            mask: {
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
          }}
        >
          <div className="flex flex-col h-full justify-between">
            <div className="space-y-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`nav-drawer-link block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      active
                        ? 'nav-drawer-active bg-red-600/15! text-red-400! border-l-4 border-red-500! font-semibold'
                        : 'text-neutral-300! hover:bg-neutral-900! hover:text-white!'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 pt-5 border-t border-neutral-900 space-y-3">
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white! bg-linear-to-r from-red-600 to-red-700 shadow-lg shadow-red-600/30 hover:from-red-500 hover:to-red-600 transition-all"
              >
                <CalendarOutlined />
                <span>Book Appointment</span>
              </a>

              <a
                href="tel:+15558392849"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-neutral-300! bg-neutral-900 hover:bg-neutral-800 border border-neutral-800! transition-all"
              >
                <PhoneOutlined className="text-red-500!" />
                <span>Call +1 (555) 839-2849</span>
              </a>
            </div>
          </div>
        </Drawer>
      </ConfigProvider>
    </>
  );
}
